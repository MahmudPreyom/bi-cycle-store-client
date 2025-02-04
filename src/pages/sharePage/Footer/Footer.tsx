import logo from "../../../assets/Adobe Express - file.png";
import { Link } from "react-router-dom";
import { Button, Row, Col, Form, Input } from "antd";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaArrowRightToBracket,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      {/* <Row> */}
      <Row style={{ width: "85%", margin: "auto", flexWrap: "wrap" }}>
        <Col xs={24} sm={12} md={6} style={{ padding: "10px" }}>
          <img
            src={logo}
            alt=""
            style={{ width: "100px", marginBottom: "20px" }}
          />
          <p>
            A bicycle shop offers a wide range of bikes, accessories, and repair
            services for cycling enthusiasts of all levels. From mountain and
            road bikes to electric and hybrid models, it caters to diverse
            needs.
          </p>
        </Col>
        <Col xs={24} sm={12} md={4} style={{ padding: "10px" }}>
          <h2 className="footer-h2">
            Office
            <div className="footer-animation-div">
              <span></span>
            </div>
          </h2>
          <p>Elephant Road</p>
          <p>Doctor Para, Rampur</p>
          <p>Dhaka, Postal 5662, Bangladesh</p>
          <p style={{ margin: "20px 0" }}>bicycleshop@gmail.com</p>
          <h3>+880 1234556890</h3>
        </Col>
        <Col xs={24} sm={12} md={4} style={{ padding: "10px" }}>
          <h2 className="footer-h2">
            Links
            <div className="footer-animation-div">
              <span></span>
            </div>
          </h2>
          <ul>
            <li>
              <Link className="footer-link" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                Service
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                Features
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6} style={{ padding: "10px" }}>
          <h2 className="footer-h2">
            Newsletter
            <div className="footer-animation-div">
              <span></span>
            </div>
          </h2>
          <Form className="footer-form">
            <MdOutlineMailOutline
              style={{ color: "#ffff", fontSize: "35px" }}
            />
            <Form.Item
              name="email"
              //   rules={[{ required: true, message: "Please enter your email!" }]}
              style={{ flex: 1, margin: 0 }}
            >
              <Input
                type="email"
                placeholder="Enter your email id"
                style={{
                  width: "100%",
                  background: "transparent",
                  color: "#ffff",
                  padding: "10px",
                  border: 0,
                  outline: "none",
                }}
              />
            </Form.Item>
            <Button
              htmlType="submit"
              style={{
                background: "transparent",
                border: 0,
                outline: "none",
                cursor: "pointer",
              }}
            >
              <FaArrowRightToBracket
                style={{ color: "#ffff", fontSize: "22px" }}
              />
            </Button>
          </Form>
          <div style={{ display: "flex", gap: "15px" }}>
            <FaFacebookF className="footer-social-icon" />
            <FaInstagram className="footer-social-icon" />
            <FaTwitter className="footer-social-icon" />
            <FaWhatsapp className="footer-social-icon" />
          </div>
        </Col>
      </Row>
      <hr
        style={{
          width: "90%",
          border: 0,
          borderBottom: "1px solid #ccc",
          margin: "20px auto",
        }}
      />
      <p style={{ textAlign: "center" }}>
        Mahmud Preyom © - All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
