import LoginImage from "../assets/loginImage.jpg";
import Logo from "../assets/Logo.png";
import React from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { Link } from "react-router-dom";

const createUser = async ({ email, password, confirmPassword }) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, confirmPassword }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = {}; // fallback if response is empty
    }

    if (!response.ok) {
      throw new Error(data.message || "Failed to create user");
    }

    console.log("User created successfully:", data.message);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
};

const SignUp = () => {
  return (
    <div
      id="signup-page"
      className="w-full h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="w-1/2 px-20">
        <div className="bg-[#ffe6a7] p-10 flex flex-col items-center justify-between rounded-lg">
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <div className="flex justify-center items-center flex-col">
              <img src={Logo} alt="Login" className="w-150 h-42 object-cover" />
            </div>
            <Form
              name="basic"
              requiredMark={false}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={async (values) => {
                const { email, password, confirmPassword } = values;

                if (password !== confirmPassword) {
                  alert("Passwords do not match");
                  return;
                }

                try {
                  const data = await createUser({
                    email,
                    password,
                  });
                  console.log("User created:", data);
                } catch (error) {
                  console.error("Error creating user:", error);
                }
              }}
              autoComplete="off"
              className="flex flex-col px-4 mt-4!"
            >
              <Form.Item
                layout="vertical"
                name="email"
                className="mb-2! w-full!"
                placeholder="Email"
              >
                <Input
                  className="w-75! mt-1! focus:outline-none! hover:outline-none!"
                  required
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item layout="vertical" name="password" className="mb-2!">
                <Input.Password
                  className="w-full!"
                  required
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                layout="vertical"
                name="confirmPassword"
                className="mb-0!"
              >
                <Input.Password
                  className="w-full!"
                  required
                  placeholder="Confirm Password"
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                className="m-0!"
              >
                <div className="flex justify-between items-center w-full px-1">
                  <Checkbox className="text-[10px]!">Remember Me</Checkbox>
                  <Link to="/login" className="text-[10px] text-black!">
                    Have an account?
                  </Link>
                </div>
              </Form.Item>

              <Form.Item>
                <div className="flex gap-3 mt-10!">
                  <Button
                    type="primary"
                    className="bg-[#99582a]! w-full rounded-[100px]!"
                    htmlType="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-gray-50">
        <img
          src={LoginImage}
          alt="Login"
          className="object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default SignUp;
