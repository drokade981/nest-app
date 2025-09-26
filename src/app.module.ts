import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UsersModule, TweetModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: 'postgres',
      // entities: [User],
      autoLoadEntities: true,  // for autlo load of all entity
      synchronize: true, // true only for development and true for production
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Test@123',
      database: 'nestjs'
    })
  }), ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
