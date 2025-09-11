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
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number, 
        @Param() param: GetUserParamDto
    ){
        console.log(param);
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: any) {
        console.log(typeof(id));
        return this.userService.getUserById(id); // +id can be used to convert in string to number
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        
        // UserService.createUser(user);
        console.log(user instanceof CreateUserDto);
        
        return 'new user has been created';
    }

    @Patch()
    updateUser(@Body() user: UpdateUserDto ) {
        console.log(user);
        return 'User updated sussessfully';
    }
}