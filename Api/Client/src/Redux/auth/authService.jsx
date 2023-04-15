import { publicRequest } from "../../reqMethods";

// Register user
const signup = async userData => {
  const res = await publicRequest.post("auth/signup", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

// Login user
const login = async userData => {
  const res = await publicRequest.post("auth/login", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  signup,
  logout,
  login,
};

export default authService;
