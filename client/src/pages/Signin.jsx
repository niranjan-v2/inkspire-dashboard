import { Button, TextInput, Alert, Spinner } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice"; 
import OAuth from "../components/OAuth";

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.userid || !formData.password) {
      return dispatch(signInFailure("Oops, please fill out all the fields"));
    }
    try {
      /*setLoading(true);
      setErrorMessage(null);*/
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };
  return (
    <div className="mt-20 min-h-screen">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:items-center gap-20">
        {/*left*/}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500">
              Inkspire
            </span>
            <br></br>
          </Link>
        </div>
        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-8 w-72" onSubmit={handleSubmit}>
            <div>
              <TextInput
                style={{ fontSize: "15.5px" }}
                type="text"
                placeholder="Username or email"
                id="userid"
                onChange={handleChange}
              />
            </div>

            <div>
              <TextInput
                style={{ fontSize: "15.5px" }}
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button
                gradientDuoTone="purpleToBlue"
                type="submit"
                disabled={loading}
                pill
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />{" "}
                    <span className="pl-3"> Signing in...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              <OAuth />
            </div>
          </form>
          <div className="flex gap-2 mt-5">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
