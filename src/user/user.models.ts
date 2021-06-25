import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

class Address {
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
  address: Address;

  @Prop()
  cpf: string;
}

export const UserSchema = SchemaFactory.createForClass(User);