class Address {
  zipcode: number
  street: string
}

class CreateUserDto {
  name: string;
  age: number;
  email: string;
  address: Address;
  cpf: string;
}

class UpdateUserDto {
  name: string;
  age: number;
  email: string;
  address: Address;
}

export { CreateUserDto, UpdateUserDto };
