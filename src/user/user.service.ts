import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/user.dto';
import { User, UserDocument } from 'src/user/user.models';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  
  private readonly logger = new Logger(UserService.name);
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  
  async findUserById(id: string) {
    return await this.userModel.findById(id).exec();
  }
}
