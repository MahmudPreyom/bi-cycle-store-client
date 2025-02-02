/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex, Row } from "antd";
import ShopForm from "../../components/form/ShopForm";
import ShopInput from "../../components/form/ShopInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
// import { verifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [register] = useRegisterMutation();

  const defaultValues = {
    name: "Abdullah Al Mahmud",
    // email: "c15@gmail.com",
    password: "customer123",
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const toastId = toast.loading("signing in...");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = await register(userInfo).unwrap();

      dispatch(setUser({ user: res.data.user, token: res.data.accessToken }));
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("Register Successfully", { id: toastId, duration: 2000 });
      // navigate(`
      navigate("/");
    } catch (err) {
      toast.error("something wants wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{ minHeight: "100vh", padding: "16px" }}
    >
      <Col xs={24} sm={16} md={12} lg={8} xl={6}>
        <ShopForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <h1>Welcome to Bicycle shop</h1>
          <ShopInput type="text" name="name" label="User Name" />
          <ShopInput type="text" name="email" label="Email" />
          <ShopInput type="text" name="password" label="Password" />
          <p className="sign-and-login">
            You have account <Link to="/login">Login</Link>
          </p>
          <Button className="nav-btn" htmlType="submit" block>
            Sign Up
          </Button>
        </ShopForm>
      </Col>
    </Flex>
  );
};

export default Register;
