export interface User {
  id:any
  name: string;
  surname: string;
  username: string;
  }

export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  name: string;
  surname: string;
  username: string;
  password: string;
}
