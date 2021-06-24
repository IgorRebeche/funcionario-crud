// class Address {
//   zipcode: number
//   street: string
// }

class CreateUserDto {
  name: string;
  age: number;
  email: string;
  address: string;
  cpf: string;
}

class UpdateUserDto {
  name: string;
  age: number;
  email: string;
  address: string;
}

export { CreateUserDto, UpdateUserDto };
