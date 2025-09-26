import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.entity';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [
    TypeOrmModule.forFeature([Profile])  // add it to create table
  ]
})
export class ProfileModule {}
