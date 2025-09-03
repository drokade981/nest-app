import { Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

// http://localhost:3000/users
@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        const UserService = new UsersService();
        return UserService.getAllUsers();
    }

    @Post()
    createUser() {
        const user = {id:4, name: 'maria', age:26, gender:'female', isMarried:false};
        const UserService = new UsersService();
        UserService.createUser(user);
        return 'new user created';
    }
}