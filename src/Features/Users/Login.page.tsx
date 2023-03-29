import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "@/Core/Lib/FormBuilder/Form/Form";
import useAuthentication from "@/Core/Providers/Authentication.Provider";
import useNotifications from "@/Core/Providers/Notifications.Provider";

import { LoginUser } from "./Authentication.Service";
import { IUser } from "./Register.page";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({
    username: "",
    password: "",
  });
  const { dispatch } = useAuthentication();
  const { setNotifications } = useNotifications();

  const formSchema = {
    title: "Login",
    clearBtn: true,
    fields: [
      {
        type: "email",
        name: "email",
        label: "Email",
        placeHolder: "Enter your Email",
        validationSchema: {
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
    ],
  };

  const handleFormSubmit = async () => {
    const res = await LoginUser(user);
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
        <></>
      </Form>
    </>
  );
}
