import { Module, forwardRef } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthModule } from "src/auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Profile } from "src/profile/profile.entity";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
    imports: [
        // forwardRef(() => AuthModule),  // forward ref for circular dependancy
        TypeOrmModule.forFeature([
            User, // pass the entity for repository 
            Profile
        ])
    ]
})
export class UsersModule {

}