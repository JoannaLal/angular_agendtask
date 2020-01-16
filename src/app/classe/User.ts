export class User {

  private id: number;
  private pseudo: string;
  private email: string;
  private password: string;
  private birthday: string;


  constructor(pseudo?: string, email?: string, password?: string, birthday?: string) {
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
  }


  get _pseudo(): string {
    return this.pseudo;
  }

  set _pseudo(value: string) {
    this.pseudo = value;
  }

  get _email(): string {
    return this.email;
  }

  set _email(value: string) {
    this.email = value;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }

  get _birthday(): string {
    return this.birthday;
  }

  set _birthday(value: string) {
    this.birthday = value;
  }
}
