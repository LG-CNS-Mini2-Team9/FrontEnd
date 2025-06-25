import axios from "axios";

export const postLogout = () => {
  try {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("nickname");
    localStorage.removeItem("tier");
    localStorage.removeItem("interests");
    document.cookie =
      "refreshToken=; path=/; max-age=0; Secure; SameSite=Strict";
  } catch (e) {
    console.log(e);
  }
};
function getCookie(name) {
  const cookieArr = document.cookie.split("; ");
  for (const cookie of cookieArr) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}
export const reissueToken = async () => {
  const refreshToken = getCookie("refreshToken");
  try {
    const res = await axios.post(
      "/api/auth/v1/refresh",
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
        withCredentials: true,
      }
    );

    localStorage.setItem("accessToken", res.data.result);

    return res;
  } catch (e) {
    console.log(e);
  }
};
