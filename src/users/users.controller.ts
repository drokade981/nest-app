import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

// http://localhost:3000/users
@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:number, 
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number 
    ){
        const UserService = new UsersService();
        console.log(limit, page);
        
        return UserService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: any) {
        const UserService = new UsersService();
        console.log(typeof(id));
        return UserService.getUserById(id); // +id can be used to convert in string to number
    }

    @Post()
    createUser() {
        const user = {id:4, name: 'maria', age:26, gender:'female', isMarried:false};
        const UserService = new UsersService();
        UserService.createUser(user);
        return 'new user created';
    }
}