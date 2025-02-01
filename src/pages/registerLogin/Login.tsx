/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex } from "antd";
import ShopForm from "../../components/form/ShopForm";
import ShopInput from "../../components/form/ShopInput";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApi";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const defaultValues = {
    email: "c15@gmail.com",
    password: "customer123",
  };

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    const toastId = toast.loading("Loggin in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      console.log(user);

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("login success", { id: toastId, duration: 2000 });
      // navigate(`
      navigate(`/`);
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
          <h1
            style={{
              fontSize: "1.8rem",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Please login Bicycle shop
          </h1>
          <ShopInput type="text" name="email" label="Email" />
          <ShopInput type="password" name="password" label="Password" />
          <p className="sign-and-login">
            Have you no account? <Link to="/register">Sign Up</Link>
          </p>
          <Button className="nav-btn" htmlType="submit" block>
            Login
          </Button>
        </ShopForm>
      </Col>
    </Flex>
  );
};

export default Login;
