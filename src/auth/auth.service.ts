import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(@Inject(forwardRef(() => UsersService)) private readonly userService: UsersService) {}
    // forward ref for circular dependancy
    
    isAuthenticated: Boolean = false;

    login(email: String, pwd: String){
        const user = this.userService.users.find(u => u.email === email && u.password === pwd);
        if (user) {
            this.isAuthenticated = true;
            return 'user exist';
        }
        return 'user not exist';
    }
}
