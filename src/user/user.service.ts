import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from 'src/user/user.dto';
import { User, UserDocument } from 'src/user/user.models';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  
  private readonly logger = new Logger(UserService.name);
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    
    if (!Number(createdUser.age))
      throw new HttpException('Idade precisa ser um numero!', HttpStatus.BAD_REQUEST)
    
    if (Number(createdUser.age) <= 10 )
      throw new HttpException('Usuario precisar ter mais que 10 anos!', HttpStatus.BAD_REQUEST);
   
    return createdUser.save();
  }

  async findUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  
  async findUserById(id: string) {
    const user = await this.userModel.findById(id).exec();
    
    if (!user)
      throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
    
    return user 
  }

  async updateUserById(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id)
    if (!user)
      throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
    
    this.logger.log(user)
    await this.userModel.findByIdAndUpdate({_id: id}, updateUserDto).exec();
    
    return this.userModel.findById(id).exec();
  }

  async deleteUserById(id: string) {
    const user = await this.userModel.findById(id)
    if (!user)
      throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
    
    return this.userModel.findByIdAndDelete(id)
  }
}
