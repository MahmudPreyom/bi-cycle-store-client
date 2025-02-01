import { Button, Col, Flex, Row } from "antd";
import ShopForm from "../../components/form/ShopForm";
import ShopInput from "../../components/form/ShopInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Register = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
  };
  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Col span={6}>
        <ShopForm onSubmit={onSubmit}>
          <h1>Welcome to Bicycle shop</h1>
          <ShopInput type="text" name="name" label="User Name" />
          <ShopInput type="text" name="email" label="Email" />
          <ShopInput type="text" name="password" label="Password" />
          <p className="sign-and-login">
            You have account <Link to="/login">Login</Link>
          </p>
          <Button className="nav-btn" htmlType="submit">
            Sign Up
          </Button>
        </ShopForm>
      </Col>
    </Flex>
  );
};

export default Register;
