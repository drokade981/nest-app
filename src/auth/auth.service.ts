import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor() {}
    // forward ref for circular dependancy
    
    isAuthenticated: Boolean = false;

    login(email: String, pwd: String){
        
        return 'user not exist';
    }
}
