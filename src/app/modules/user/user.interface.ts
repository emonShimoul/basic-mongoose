import { HydratedDocument, Model } from "mongoose";

// creating a Interface
export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// instance methods
export interface IUserMethods {
  fullName(): string;
}

// statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
