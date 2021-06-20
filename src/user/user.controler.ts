import { Body, Controller, Delete, Get, Post, Put, UseFilters } from '@nestjs/common';
import { User } from 'src/user/user.models';
import { UserService } from 'src/user/user.service';
import { CreateUserDto, UpdateUserDto } from 'src/user/user.dto';
import { MongoExceptionFilter } from 'src/filters/mongo-exception.filter';
import { Param } from '@nestjs/common';
import { HttpStatus, NotFoundException, Res, Query } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Res() res): Promise<User[]> {
    const users = await this.userService.findUsers();
    return res.status(HttpStatus.OK).json(users);
  }
  @Get(":id")
  @UseFilters(MongoExceptionFilter, HttpExceptionFilter)
  async getUserById(@Res() res, @Param('id') id : string): Promise<User> {
    const user = await this.userService.findUserById(id);
    if (!user) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json(user);
  }

  @Post()
  @UseFilters(MongoExceptionFilter, HttpExceptionFilter)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @UseFilters(MongoExceptionFilter, HttpExceptionFilter)
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto): Promise<User> {
    return this.userService.updateUserById(id, body);
  }

  @Delete(':id')
  @UseFilters(MongoExceptionFilter, HttpExceptionFilter)
  async deleteUser(@Param('id') id: string)
  {
    return this.userService.deleteUserById(id)
  }
}
