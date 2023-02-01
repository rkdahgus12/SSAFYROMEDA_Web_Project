import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authActions } from "../../store/AuthSlice";
import { parseJwt } from "components/utils/ParseJwt";

const OauthRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let token = useLocation().search.split("=")[1];
  let userEmail = parseJwt(token).email;
  console.log("현재 유저 이메일", userEmail);

  //   const email = useSelector((state) => state.auth.register.userEmail);

  useEffect(() => {
    // 받아온 이메일을 redux에 저장
    if (userEmail) {
      dispatch(authActions.addUserEmail(userEmail));
      console.log("이메밀 저장 성공");
      navigate("/signup");
    }
  }, [userEmail, dispatch]);

  return (
    <div>
      <h3>토큰을 빼오는 곳입니다 ㅎㅎ</h3>
    </div>
  );
};

export default OauthRedirect;