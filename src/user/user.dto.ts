class Adress {
  zipcode: number
  street: string
}

class CreateUserDto {
  name: string;
  age: number;
  email: string;
  adress: Adress;
}

class UpdateUserDto {
  name: string;
  age: number;
  email: string;
  adress: Adress;
}

export { CreateUserDto, UpdateUserDto };
