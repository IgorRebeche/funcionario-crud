import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

class Adress {
  @Prop()
  zipcode: number

  @Prop()
  street: string
}

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ unique: true })
  email: string;

  @Prop()
  adress: Adress

}

export const UserSchema = SchemaFactory.createForClass(User);