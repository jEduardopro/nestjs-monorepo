import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

	constructor(
		@Inject('MAIL_SERVICE') private clientMail: ClientProxy,
	)
	{}

  getHello(): string {
    return 'Hola soy the app main!';
	}
	

	newUser(data:any): string {
		this.clientMail.emit('new_mail', data)
		return 'send_queue'
	}

}
