import { useEffect, useState } from "react";
import { useApi } from "./utils/use_api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthToken } from "./store/application_slice";

export const Home = () => {
  const [user, setUser] = useState(null);
  const api = useApi();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function getUser() {
    const {user} = await api.get("/users/me");
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, [])

  function logout() {
    dispatch(setAuthToken(null));
    navigate("/login")
  }

  return (
    <div>
      <h1>I am on the home page!</h1>
      <div>{user && <h1>Welcome, {user.firstName}</h1>}</div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}