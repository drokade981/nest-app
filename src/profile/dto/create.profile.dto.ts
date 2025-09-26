import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProfileDto {
    
    @IsString({message : 'first Name should be string'})
    @IsOptional()
    @MinLength(3, {message: "first Name should be minimum of 3 character"})
    @MaxLength(100, {message: "first Name should be maximum of 100 character"})
    firstName?: string;

    @IsString({message : 'Last Name should be string'})
    @IsOptional()
    @MinLength(3, {message: "Last Name should be minimum of 3 character"})
    @MaxLength(100, {message: "Last Name should be maximum of 100 character"})
    lastName?: string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsOptional()
    @IsDate()
    dateOfBirth: string;

    @IsOptional()
    @IsString()
    bio: string;

    @IsOptional()
    @IsString()
    profileImage: string;
}