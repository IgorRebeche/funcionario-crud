import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { User } from 'src/user/user.models';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/user.dto';
import { MongoExceptionFilter } from 'src/filters/mongo-exception.filter';

@Controller("/user")
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.appService.findUsers();
  }
  @Get(":id") //wrong, gotta fix
  async getUserById(id : string): Promise<User> {
    return this.appService.findUserById(id);
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.appService.create(createUserDto);
  }
}
