import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsString({message : 'first Name should be string'})
    @IsNotEmpty()
    @MinLength(3, {message: "first Name should be minimum of 3 character"})
    @MaxLength(100, {message: "first Name should be maximum of 100 character"})
    firstName: string;

    @IsString({message : 'Last Name should be string'})
    @IsNotEmpty()
    @MinLength(3, {message: "Last Name should be minimum of 3 character"})
    @MaxLength(100, {message: "Last Name should be maximum of 100 character"})
    lastName: string;

    @IsString()
    @IsEmail()
    @MaxLength(10)
    email: string;

    @IsString()
    @IsOptional()
    gender: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, {message: "Password should be minimum of 6 character"})
    @MaxLength(16, {message: "Password should be maximum of 16 character"})
    password: string;

}