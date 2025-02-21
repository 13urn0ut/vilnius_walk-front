import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useContext, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import UserContext from "../contexts/UserContext";

const API_URL = import.meta.env.VITE_API_URL;

const UserForm = ({ action }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  const sendData = async (data) => {
    try {
      const { data: result } = await axios.post(
        `${API_URL}/users/${action}`,
        data,
        {
          withCredentials: true,
        }
      );

      setUser(result.data);
      toast.success(`Welcome ${action === "login" ? "back" : ""}`);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(error.response.data);
        } else if (error.request) {
          setError("Something went wrong");
        } else {
          setError("No internet connection");
        }
      } else {
        showBoundary(error);
      }
    }
  };

  useEffect(() => {
    reset();
  }, [action]);

  return (
    <div className="user-form ">
      <h2>{action === "login" ? "Login" : "Signup"}</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit(sendData)}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        {action === "signup" && (
          <div>
            <label htmlFor="confirmPassword"></label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>
        )}

        <button type="submit">{action === "login" ? "Login" : "Signup"}</button>
      </form>
    </div>
  );
};

export default UserForm;
