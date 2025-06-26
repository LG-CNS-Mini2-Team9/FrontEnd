import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BigButton from "./BigButton";
import logo from "../../assets/logo.png";
import axios from "axios";
import { postLogout } from "../../api/authApi";

const Nav = () => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [profileImgUrl, setProfileImgUrl] = useState(
    localStorage.getItem("profileImgUrl")
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    postLogout({accessToken}).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="bg-background-dark w-full h-92 items-center px-40 grid-cols-3 grid text-gray-300">
      <ul className="flex">
        <li>
          <Link to="questions" className="px-20 text-lg font-semibold">
            CS 면접 질문
          </Link>
        </li>
        <li>
          <Link to="/answers/my" className="px-20 text-lg font-semibold">
            내 모든 답변
          </Link>
        </li>
      </ul>

      <Link className="flex justify-center" to="/">
        <img src={logo} className="h-40"/>
      </Link>

      <div className="flex gap-20 justify-end">
        {accessToken ? (
          <>
            <BigButton
              text="로그아웃"
              onClick={() => handleLogout(accessToken)}
            />

            <Link to="/statistics">
              {profileImgUrl ? (
                <img
                  src={profileImgUrl}
                  alt=""
                  className="w-44 h-44 bg-gray-300 rounded-full"
                />
              ) : (
                <button className="w-44 h-44 bg-primary rounded-full"></button>
              )}
            </Link>
          </>
        ) : (
          <>
            <Link to="/auth?tab=signup">
              <BigButton text="회원가입" />
            </Link>
            <Link to="/auth?tab=signin">
              <BigButton text="로그인" fill />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
