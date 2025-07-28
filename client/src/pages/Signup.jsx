import { Button, TextInput, Alert, Spinner } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth.jsx";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Oops, please fill out all the fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="mt-28 min-h-screen">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-20">
        {/*left*/}
        <div className="flex-1">
          <Link to="/" className="flex flex-col items-center">
                      <div className="px-2 py-1">
                        <img 
                          src="/techstream_icon.svg" 
                          alt="TechStream Logo" 
                          className="h-32" // Adjust height as needed
                        />
                      </div>
                      <span className="font-aldrich font-sem text-4xl mt-4">TechStream</span>
                    </Link>
          <p className="text-sm mt-5">
            This is TechStream — a space for me to capture the code, concepts, and curiosities that shape my journey as a developer. It’s where I share what I’m building, what I’m breaking, and what I’m learning in real-time.
          </p>
        </div>
        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div>
              <TextInput
                style={{ fontSize: "15.5px" }}
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextInput
                style={{ fontSize: "15.5px" }}
                type="email"
                placeholder="Email"
                id="email"
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
                color="blue"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />{" "}
                    <span className="pl-3"> Signing up...</span>
                  </>
                ) : (
                  "Sign up"
                )}
              </Button>
              <OAuth />
            </div>
          </form>
          <div className="flex gap-2 mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign in
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
