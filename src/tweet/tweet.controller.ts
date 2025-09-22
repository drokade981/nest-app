import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService: TweetService) {

    }

    @Get(':userId')
    public GetTweets(@Param('userId', ParseIntPipe) userId: Number) {
        const tweets = this.tweetService.getTweets(userId);
        console.log('tweett');
        return tweets;
    }
}
