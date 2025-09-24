import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/create.user.dto";


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}
    // forward ref for circular dependancy


    getAllUsers() {
        return this.userRepository.find();
    }

    getUserById(id: Number){
        
    }

    public async createUser(userDto: CreateUserDto) {
       // validate if user email already exist
        const user = await this.userRepository.findOne({
            where: { email: userDto.email}
        })
       // handle error / exception
       if (user){
        return 'the user with given email already exist';
       }
       //create user
       let newUser = this.userRepository.create(userDto);
       newUser = await this.userRepository.save(newUser);
       return newUser;
    }
}