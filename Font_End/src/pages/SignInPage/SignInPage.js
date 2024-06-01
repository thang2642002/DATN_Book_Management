import "./SignInPage.scss";
import { Row, Col } from "react-bootstrap";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import background from "../../public/assets/img/signin/background.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../services/userService";
const SignInPage = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [defaultvalid, setDefauValid] = useState({
    isValidEmail: true,
    isValidPassword: true,
  });
  const [objCheckValid, setObjCheckValid] = useState(defaultvalid);
  const handleClick = (e) => {
    e.preventDefault();
  };

  const checkInputLogin = () => {
    var emailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    var valid = emailRegex.test(email);
    if (!email) {
      setObjCheckValid((prevState) => ({
        ...prevState,
        isValidEmail: false,
      }));
      toast.error("Chưa nhập email");
    } else if (!password) {
      toast.error("Chưa nhập password ");
      setObjCheckValid((prevState) => ({
        ...prevState,
        isValidPassword: false,
      }));
    } else if (!valid) {
      toast.error("Định dạng email chưa đúng");
      setObjCheckValid((prevState) => ({
        ...prevState,
        isValidEmail: false,
      }));
    } else {
      return true;
    }
  };
  const handleLogin = async () => {
    if (checkInputLogin()) {
      let userLogin = await Login(email, password);
      console.log("check login: ", userLogin);
      toast(userLogin.message);
      if (userLogin.data) {
        setTimeout(() => {
          navigate("/");
        }, 4000);
      } else {
        setTimeout(() => {
          navigate("/sign-in");
        }, 4000);
      }
    }
  };

  const handleCreateAccount = () => {
    navigate("/sign-up");
  };

  return (
    <div className="signin-container">
      <div className="content-signin">
        <Row>
          <Col lg={7}>
            <div className="sign-control">
              <div className="title-signin">Đăng nhập bằng email</div>
              <span className="description-signin">
                Nhập emai và mật khẩu tài khoản BookStore
              </span>
              <form onClick={(e) => handleClick(e)}>
                <div className="form-group mt-2">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className={
                      objCheckValid.isValidEmail
                        ? "form-control mt-2"
                        : "form-control mt-2 is-invalid"
                    }
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2 custom-input">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type={isShowPassword ? "text" : "password"}
                    className={
                      objCheckValid.isValidPassword
                        ? "form-control mt-2"
                        : "form-control mt-2 is-invalid"
                    }
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="eye"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? (
                      <EyeOutlined />
                    ) : (
                      <EyeInvisibleOutlined />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary col-12 mt-4"
                  onClick={handleLogin}
                >
                  Submit
                </button>
              </form>
              <div className="info-account">
                <div className="forget-password">Quên mật khẩu?</div>
                <div>
                  Chưa có tài khoản
                  <span
                    className="create-account"
                    onClick={handleCreateAccount}
                  >
                    Tạo tài khoản
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="sidebar-signin">
              <div className="img-signin">
                <img src={background} alt="background" />
              </div>
              <div className="title-introduce">Mua sắm tại Tiki</div>
              <span className="desc-month">Siêu ưu đãi mỗi ngày</span>
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default SignInPage;
