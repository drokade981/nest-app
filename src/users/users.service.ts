import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dtos/create.user.dto";
import { Profile } from "src/profile/profile.entity";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) {}
    // forward ref for circular dependancy


    getAllUsers() {
        return this.userRepository.find();
    }

    getUserById(id: Number){
        
    }

    public async createUser(userDto: CreateUserDto) {
        // create profile and save
        userDto.profile = userDto.profile ?? {};
        let profile = this.profileRepository.create(userDto.profile);
   
        await this.profileRepository.save(profile);
        const { profile: _, ...safeDto } = userDto;

        // create user object 
        let user = this.userRepository.create(safeDto);

        // save user profile
        // user.profile = profile;  // no need to specify it as we define it in user intity

        // save the user object
        return await this.userRepository.save(user);

    }
}