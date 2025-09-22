import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService: UsersService) {}

    tweets:{text: String, date: Date, userId: Number}[] = 
    [
        {text: 'Tweet one', date: new Date('2025-08-25'), userId: 1},
        {text: 'Tweet twoe', date: new Date('2025-08-26'), userId: 1},
        {text: 'Tweet three', date: new Date('2025-08-27'), userId: 2}
    ];

    getTweets(userId: Number) {
        const user = this.userService.getUserById(userId);
        console.log(user);
        
        const tweets = this.tweets.filter(t => t.userId === userId);
        const resposne = tweets.map(t => { return  {text: t.text, date: t.date, name: user?.name, userId: t.userId}} );
        return resposne;
    }
}
