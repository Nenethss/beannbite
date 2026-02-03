import Logo from "../assets/Logo_white.png";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import bgImage from "../assets/login_background_black.png";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="w-1/2 p-20 h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" p-10 flex flex-col items-center justify-between rounded-lg">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src={Logo} alt="Background" className="object-cover" />
            <p className="text-md text-white">
              • Coffee • Non-Coffee • Pastries •
            </p>
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
            <Form.Item layout="vertical" name="email" className="mb-2! w-full!">
              <Input
                className="w-75! mt-1!  focus:outline-none! hover:outline-none!"
                required
              />
            </Form.Item>

            <Form.Item layout="vertical" name="password" className="m-0!">
              <Input.Password className="mt-0! w-full!" required />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" className="m-0!">
              <div className="flex justify-between items-center w-full px-1">
                <Checkbox className="text-[10px]!">Remember Me</Checkbox>
                <Link to="/signup" className="text-[10px] text-primaryColor">
                  Have an account?
                </Link>
              </div>
            </Form.Item>

            <Form.Item>
              <div className="flex gap-3 justify-end">
                <Button className="w-24" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
