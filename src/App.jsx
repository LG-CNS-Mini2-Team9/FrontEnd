import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Nav from "./components/global/Nav";
import InfoUpdate from "./pages/InfoUpdate";
import QuestionBoard from "./pages/QuestionBoard";
import QuestionDetail from "./pages/QuestionDetail";
import CSQuestionBoard from "./pages/CSQuestionBoard";
import QuestionPostPage from "./pages/QuestionPostPage";
import AnswerResultPage from "./pages/AnswerResultPage";
import AnswersPage from "./pages/AnswersPage";
import Delete from "./pages/Delete";
import MyAnswersPage from "./pages/MyAnswersPage";
import MyAllAnswersPage from "./pages/MyAllAnswersPage";
import CSQuestionDetailPage from "./pages/CSQuestionDetailPage";
import Auth from "./pages/Auth";
import "./index.css";

function App() {
  // const accessToken = localStorage.getItem("accessToken");
  // if (accessToken) {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  // }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/info" element={<MyPage />} />
          <Route path="/user/update" element={<InfoUpdate />} />
          <Route path="/user/delete" element={<Delete />} />
          <Route path="/questions" element={<CSQuestionBoard />} />
          <Route
            path="/questions/detail/:questionId"
            element={<CSQuestionDetailPage />}
          />
          <Route path="/answers/detail/:answerId" element={<AnswerResultPage />} />
          <Route path="/answers/my" element={<MyAllAnswersPage />} />
          <Route path="/answers/my/:questionId" element={<MyAnswersPage />} />
          <Route path="/answers/all/:questionId" element={<AnswersPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;