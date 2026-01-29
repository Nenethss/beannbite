import LoginImage from "../assets/loginImage.jpg";
import Logo from "../assets/Logo.png";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <div
      id="login-page"
      className="w-full h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="w-1/2 p-20">
        <div className=" bg-[#ffe6a7] p-10 flex flex-col items-center justify-between rounded-lg">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <img src={Logo} alt="Login" className="w-150 h-42 object-cover" />
            </div>
            <Form
              name="basic"
              requiredMark={false}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="flex flex-col px-4 mt-4!"
            >
              <Form.Item
                layout="vertical"
                name="email"
                className="mb-2! w-full!"
              >
                <Input
                  className="w-75! mt-1!  focus:outline-none! hover:outline-none!"
                  required
                />
              </Form.Item>

              <Form.Item layout="vertical" name="password" className="m-0!">
                <Input.Password className="mt-0! w-full!" required />
              </Form.Item>

              {/* <div className="flex justify-between">
                <Form.Item
                  name="remember"
                  className="m-0! text-sm!"
                  valuePropName="checked"
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="pt-1 text-sm text-black!" href="">
                  Forgot Password?
                </a>
              </div> */}

              <Form.Item>
                <div className="flex gap-3 mt-10! justify-end">
                  <Button
                    type="default"
                    className="bg-[#bb9457]! w-24 rounded-[100px]! hover:text-black! hover:border-black!"
                    htmlType="button"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="primary"
                    className="bg-[#99582a]! w-24 rounded-[100px]!"
                    htmlType="submit"
                  >
                    Submit
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

export default Login;
