import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MaxLength(20)
    username: string;

    @IsString()
    @IsEmail()
    @MaxLength(20)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, {message: "Password should be minimum of 6 character"})
    @MaxLength(16, {message: "Password should be maximum of 16 character"})
    password: string;

}