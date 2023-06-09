// 카카오 로그인
import kakaoBtn from "resources/images/kakao_login_M.png";
import styled from "styled-components";

const Div = styled.div`
  img:hover{
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

const kakaoLogin = () => {
  const KAKAO_AUTH_URL =
    "https://i8d205.p.ssafy.io/api/oauth2/authorization/kakao";
  window.location.href = KAKAO_AUTH_URL;
};

const Login = () => {
  return (
    <Div className="hovers">
      <img
        className={"nes-pointer"}
        src={kakaoBtn}
        alt={"카카오로그인"}
        onClick={kakaoLogin}
      />
    </Div>
  );
};
export default Login;
