import { Controller, Get, Post } from "@nestjs/common";

// http://localhost:3000/users
@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return "this is get user method";
    }

    @Post()
    createUser() {
        return 'new user created';
    }
}