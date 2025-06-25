import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "signup" ? "signup" : "signin";
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="max-w-500 margin-top 20px mt-100 mx-auto my-auto cmt-25 shadow-lg rounded-lg bg-background-light">
      {/* 탭 네비 */}
      <nav className="flex border-b">
        <button
          className={`flex-1 py-15 text-center font-semibold cursor-pointer ${
            activeTab === "signin"
              ? "text-primary"
              : "text-white bg-background-dark"
          }`}
          onClick={() => setActiveTab("signin")}
        >
          로그인
        </button>
        <button
          className={`flex-1 py-15 text-center font-semibold cursor-pointer ${
            activeTab === "signup"
              ? "text-primary"
              : "text-white bg-background-dark"
          }`}
          onClick={() => setActiveTab("signup")}
        >
          회원가입
        </button>
      </nav>

      <div className="p-50">
        {activeTab === "signin" ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  );
}
const inputStyle =
  "w-full px-10 py-10 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500 bg-transparent text-white";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/v1/login", {
        email,
        password,
      });
      const result = res.data.result;

      localStorage.setItem("accessToken", result.accesstoken);
      localStorage.setItem("name", result.name);
      localStorage.setItem("email", result.email);
      localStorage.setItem("nickname", result.nickname);
      localStorage.setItem("tier", result.tier);
      localStorage.setItem("interests", result.interests);

      document.cookie = `refreshToken=${result.refreshtoken}; path=/; max-age=${
        7 * 24 * 60 * 60
      }; Secure; SameSite=Strict`;

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.accesstoken}`;
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSignIn} className="space-y-20">
      <div>
        <label htmlFor="signin-email" className="block text-white text-sm font-medium mb-8">
          이메일
        </label>
        <input
          id="signin-email"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="signin-password" className="block text-white text-sm font-medium mb-8">
          비밀번호
        </label>
        <input
          id="signin-password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <button
        type="submit"
        className="w-full mt-30 py-15 font-semibold rounded-md bg-primary text-white cursor-pointer"
      >
        로그인
      </button>
    </form>
  );
}

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [profile_image, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const categories = [
    "자료구조",
    "컴퓨터구조", 
    "운영체제",
    "데이터베이스",
    "네트워크",
    "소프트웨어공학",
    "알고리즘",
    "디자인패턴",
    "웹프론트엔드",
    "웹백엔드",
    "클라우드"
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("nickname", nickname);
    formData.append("role", "USER");

    if (profile_image) {
      formData.append("image", profile_image);
    }

    // 카테고리들을 개별 필드로 추가
    selectedCategories.forEach(category => {
      formData.append("interests", category);
    });

    try {
      const res = await axios.post("/api/users/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    // 미리보기 생성
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result); // Base64 URL 설정
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-20">
      <div>
        <label htmlFor="signup-email" className="block text-white text-sm font-medium mb-8">
          이메일
        </label>
        <input
          id="signup-email"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="signup-password" className="block text-white text-sm font-medium mb-8">
          비밀번호
        </label>
        <input
          id="signup-password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="signup-confirm-password" className="block text-white text-sm font-medium mb-8">
          비밀번호 확인
        </label>
        <input
          id="signup-confirm-password"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="signup-name" className="block text-white text-sm font-medium mb-8">
          이름
        </label>
        <input
          id="signup-name"
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="signup-nickname" className="block text-white text-sm font-medium mb-8">
          닉네임
        </label>
        <input
          id="signup-nickname"
          type="text"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <div>
        <label className="block text-white text-sm font-medium mb-8">
          관심 카테고리
        </label>
        <div className="grid grid-cols-3 gap-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className={`px-10 py-8 rounded-md text-sm font-medium transition-colors ${
                selectedCategories.includes(category)
                  ? "bg-primary text-white"
                  : "bg-background-dark text-white border border-gray-500 hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="signup-profile-image" className="block text-white text-sm font-medium mb-8">
          프로필 이미지
        </label>
        <input
          id="signup-profile-image"
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e)}
          className={inputStyle}
        />
      </div>
      {previewUrl && <img src={previewUrl} alt="프로필 미리보기" className="w-70 h-70" />}
      <button
        type="submit"
        className="w-full mt-30 py-15 font-semibold rounded-md bg-primary text-white cursor-pointer"
      >
        회원가입
      </button>
    </form>
  );
}
