import EmployeeRepository from "../repository/employee.repository";
import Employee from "../entity/employee.entity";
import Address from "../entity/address.entity";

class EmployeeService {
    constructor(private employeeRepository:EmployeeRepository) {

    }

    async getAllEmployees():Promise<Employee[]> {
        return this.employeeRepository.find();
    }
    async getEmployeeById(id: number): Promise<Employee | null> {
        return this.employeeRepository.findOneBy({id});
    }
    async createEmployee(employee:Employee,address:Address): Promise<Employee | null>  {
        const newEmployee = new Employee();
        newEmployee.email=employee.email;
        newEmployee.name=employee.name;
        newEmployee.age=employee.age;
        const newAddress = new Address();
        newAddress.line1 = address.line1;
        newAddress.pincode = address.pincode;
        newEmployee.address=newAddress;

        return this.employeeRepository.save(newEmployee);
    }

    async updateEmployee(id:number,updateEmployee:Employee): Promise<Employee | null>  {
        const employee = await this.employeeRepository.findOneBy({id});
        employee.name = updateEmployee.name;
        employee.email = updateEmployee.email;
        employee.age = updateEmployee.age;
        employee.address.line1 = updateEmployee.address?.line1;
        employee.address.pincode = updateEmployee.address?.pincode;


        return this.employeeRepository.save(employee);
    }

    async delete(id:number){
        const employee = await this.employeeRepository.findOneBy({id});
        await this.employeeRepository.softRemove(employee);
    }

}
export default EmployeeService;