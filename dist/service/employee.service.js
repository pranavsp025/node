"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_entity_1 = __importDefault(require("../entity/employee.entity"));
const address_entity_1 = __importDefault(require("../entity/address.entity"));
class EmployeeService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeeRepository.find();
        });
    }
    getEmployeeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employeeRepository.findOneBy({ id });
        });
    }
    createEmployee(employee, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEmployee = new employee_entity_1.default();
            newEmployee.email = employee.email;
            newEmployee.name = employee.name;
            newEmployee.age = employee.age;
            const newAddress = new address_entity_1.default();
            newAddress.line1 = address.line1;
            newAddress.pincode = address.pincode;
            newEmployee.address = newAddress;
            return this.employeeRepository.save(newEmployee);
        });
    }
    updateEmployee(id, updateEmployee) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const employee = yield this.employeeRepository.findOneBy({ id });
            employee.name = updateEmployee.name;
            employee.email = updateEmployee.email;
            employee.age = updateEmployee.age;
            employee.address.line1 = (_a = updateEmployee.address) === null || _a === void 0 ? void 0 : _a.line1;
            employee.address.pincode = (_b = updateEmployee.address) === null || _b === void 0 ? void 0 : _b.pincode;
            return this.employeeRepository.save(employee);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.employeeRepository.findOneBy({ id });
            yield this.employeeRepository.softRemove(employee);
        });
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=employee.service.js.map