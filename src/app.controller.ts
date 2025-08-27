import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user';
import { log } from 'console';

@Controller()
export class AppController {
  private users: any = []
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.users
  }

  @Post()
  helloWorldPost(@Body() input:User): string {
    console.log(input)
    this.users.push(input)
    return 'hello 2 world post'
  }

  @Put('/:id')
  putHello(@Body() input:User, @Param('id') id:number) {
   this.users = this.users.map((user) => {
     if(user.id == id){
        user.name = input.name
      }
      return user;
    })
  }

  @Delete('/:id')
  deleteHello(@Param('id') id: number) {
    this.users = this.users.filter((user) => user.id != id);
  }

  @Get("/contato")
  qualquer(): string {
    return 'hello 3 world'
  }
}
