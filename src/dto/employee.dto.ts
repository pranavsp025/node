import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"
import Address from "../entity/address.entity"
import { CreateAddressDto, UpdateAddressDto } from "./address.dto"
import "reflect-metadata"
import { Type } from "class-transformer"

export class CreateEmployeeDto{
    @IsNotEmpty()
    @IsString()
    name:string

    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsNumber()
    age:number

    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(()=> CreateAddressDto)
    address: CreateAddressDto
}

export class UpdateEmployeeDto{
    name:string

    email:string

    age:number

    @ValidateNested({each:true})
    @Type(()=> UpdateAddressDto)
    address: UpdateAddressDto
}
