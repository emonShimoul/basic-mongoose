import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "802",
    role: "test",
    password: "test1123",
    name: {
      firstName: "Mr. Test22",
      lastName: "Test 2",
    },
    gender: "male",
    email: "test@gmail.com",
    contactNo: "0199999999",
    emergencyContactNo: "01888888",
    presentAddress: "Test",
    permanentAddress: "Test",
  });
  await user.save();
  return user;
};
