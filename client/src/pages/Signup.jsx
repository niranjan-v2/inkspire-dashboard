import { Button, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left*/}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500">
              Inkspire
            </span>
            <br></br>
          </Link>
          <p className="text-sm mt-5">
            This is a space where I share my thoughts, stories, and discoveries
            on topics that inspire me—from personal reflections to explorations
            of the world around us
          </p>
        </div>
        {/*right*/}

        <div className="flex-1">
          <form className="flex flex-col gap-8">
            <div>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit">
              {" "}
              Sign Up{" "}
            </Button>
          </form>
          <div className="flex gap-2 mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
