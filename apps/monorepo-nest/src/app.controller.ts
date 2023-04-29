import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
	getHello(@Body() body: any): string {
		console.log('here we go to send en new event to other MS');
		
    return this.appService.newUser(body);
  }
}
