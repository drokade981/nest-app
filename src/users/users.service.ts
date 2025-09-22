import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService {

    constructor(@Inject(forwardRef(() => AuthService))private readonly authService: AuthService) {}
    // forward ref for circular dependancy

    users: {id: Number, name : String, email : String, gender: String, isMarried: boolean, password: String
    }[] = [
        {id:1, name: 'john', email:'john@gmail.com', gender:'male', isMarried:false, password: 'Test123'},
        {id:2, name: 'mark', email:'mark@gmail.com', gender:'male', isMarried:false, password: 'Test123'},
        {id:3, name: 'marry', email:'marry@gmail.com', gender:'female', isMarried:true, password: 'Test123'},
    ];

    getAllUsers() {
        if(this.authService.isAuthenticated) {
            return this.users;
        }
        return 'You are not logged in';
    }

    getUserById(id: Number){
        return this.users.find(x => x.id === id);
    }

    createUser(user: {id: Number, name: String, email: String, gender: string, isMarried: boolean, password: String}) {
        this.users.push(user);
    }
}