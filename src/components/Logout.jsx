import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useErrorBoundary } from "react-error-boundary";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const API_URL = import.meta.env.VITE_API_URL;

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { showBoundary } = useErrorBoundary();

  const logout = async () => {
    try {
      await axios.post(
        `${API_URL}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      setUser(null);

      toast.success("Logout successful");
      navigate("/");
    } catch (err) {
      // const error = handleError(err);
      showBoundary(err);
    }
  };
  return (
    <div className="w-max mx-auto bg-red-200 py-4 px-8 rounded-2xl mt-30 flex flex-col items-center gap-3">
      <p>Are you sure, you want to logout?</p>
      <div className="flex gap-3">
        <button onClick={logout}>Yes</button>
        <button onClick={() => navigate("/")}>No</button>
      </div>
    </div>
  );
};

export default Logout;
