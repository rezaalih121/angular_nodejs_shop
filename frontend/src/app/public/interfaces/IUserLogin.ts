export interface IUserLogin {
    // in the interface you don't need to use ? ! or set default value because in interface the properties are required by default
    email: string;
    password: string;
}