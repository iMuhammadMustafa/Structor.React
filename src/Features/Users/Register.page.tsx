import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

import Form from "@/Core/Lib/FormBuilder/Form/Form";
import FormTest from "@/Core/Lib/FormBuilder/Form/FormTest";
import useAuthentication from "@/Core/Providers/Authentication.Provider";
import useNotifications from "@/Core/Providers/Notifications.Provider";

import { RegisterUser, doesUserExists } from "./Authentication.Service";

export interface IUser {
  username: string;
  password: string;
  confirmPassword?: string;
  name?: string;
  rememberme?: boolean;
}

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({
    username: "",
    password: "",
  });
  const { dispatch } = useAuthentication();
  const { setNotifications } = useNotifications();

  const checkIfUserExists = async ({ input, options }: any) => {
    if (!input) return true;
    const doesExist = await doesUserExists(input);
    return !doesExist;
  };

  const formSchema = {
    title: "Register",
    clearBtn: true,
    fields: [
      {
        type: "text",
        name: "username",
        label: "Username",
        placeHolder: "Enter your username",
        helpText: "Choose a unique username",
        validationSchema: {
          customValidators: [
            {
              name: "checkIfUserExists",
              errorMessage: "Username already exists",
              validate: checkIfUserExists,
            },
          ],
          isRequired: true,
        },
      },
      {
        type: "email",
        name: "email",
        label: "Email",
        placeHolder: "Enter your Email",
        validationSchema: {
          customValidators: [
            {
              name: "checkIfUserExists",
              errorMessage: "Email already exists",
              validate: checkIfUserExists,
            },
          ],
          isRequired: true,
        },
      },
      {
        type: "password",
        name: "password",
        label: "Password",
        placeHolder: "Enter your username",
        helpText: "Choose a unique username",
        validationSchema: {
          isRequired: true,
          password: {
            hasNumber: true,
            minLength: 6,
          },
        },
      },
      {
        type: "password",
        name: "confirmPassword",
        label: "Confirm Password",
        validationSchema: {
          isRequired: true,
          matchField: { name: "Password", value: user?.password },
        },
      },
    ],
  };

  const handleFormSubmit = async () => {
    const res = await RegisterUser(user);
    if (!res) return;
    dispatch({ type: "LOGIN", payload: res });
    setNotifications({
      action: "ADD",
      payload: { message: "Logged In.", type: "success" },
    });

    console.log("should redirect?");
    navigate("/");
  };

  return (
    <>
      <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit}>
        <>
          {/* <Form.TextInput
            value="500"
            type={"text"}
            name={"username"}
            label={"Username"}
            placeHolder={"Enter your username"}
            // helpText={"Choose a unique username"}
          /> */}
          {/* <Form.HelpText id="11212" /> */}
        </>
      </Form>
      <FormTest>
        <FormTest.HelpText id="helpTextId">
          <div>Help text</div>
        </FormTest.HelpText>


        <FormTest.HelpText id="helpTextId" text="This is help text." />
      </FormTest>
    </>
  );
}
