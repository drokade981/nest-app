import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create.user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { GetUserParamDto } from "./dtos/get-user-param.dto";

// http://localhost:3000/users
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }

    @Get()
    getUsers(){
       return this.userService.getAllUsers();
    }



    @Post()
    createUser(@Body() user: CreateUserDto) {
        
        this.userService.createUser(user);
        console.log(user instanceof CreateUserDto);
        
        return 'new user has been created';
    }


}