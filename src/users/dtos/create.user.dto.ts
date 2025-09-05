import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsString({message : 'Name should be string'})
    @IsNotEmpty()
    @MinLength(3, {message: "Name should be minimum of 3 character"})
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    gender: string;

    @IsBoolean()
    isMarried: boolean;
}