import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());

// parse json data
app.use(express.json());
// parse url encoded data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb
  /*
    Step 1: Create a Interface
    Step 2: Create a Schema
    Step 3: Create a Model
    Step 4: Database Query on Model
    */

  // creating a Interface
  interface IUser {
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

  // creating schema using interface
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });
  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      id: "778",
      role: "student",
      password: "abc123",
      name: {
        firstName: "Vijay",
        lastName: "Devrakonda",
      },
      gender: "male",
      email: "vijay@gmail.com",
      contactNo: "0199999999",
      emergencyContactNo: "01888888",
      presentAddress: "Dhaka",
      permanentAddress: "Khulna",
    });
    await user.save();
    console.log(user);
  };

  createUserToDB();

  res.send("Hello World!");
  //   next();
});

export default app;
