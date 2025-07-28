import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import {BsDiscord, BsFacebook, BsGithub} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border border-t-4 border-blue-900">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">   
            <Link
                    to="/"
                    className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
                  >
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center">
                        <img
                          src="/techstream_icon.svg"
                          alt="TechStream Logo"
                          className="h-7 sm:h-9"
                        />
                        <span className="px-2 py-1 font-aldrich">TechStream</span>
                      </div>
                      <span className="text-xs sm:text-sm font-normal pl-24 -mt-1">
                        By Niranjan Vasudevan
                      </span>
                    </div>
                  </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank" rel="noopener noreferrer">
                  Me
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Niranjan's Blog
                </Footer.Link>
              </Footer.LinkGroup>
               
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/niranjan-v2" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/niranjan-v/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href='#' by="Inkspire" year={new Date().getFullYear()} />
        </div>
        <div className="flex gap-6 sm:mt-3 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/imnitro2001/' icon={BsFacebook} />
            <Footer.Icon href='https://www.discord.com/users/698587929051922432' icon={BsDiscord} />
            <Footer.Icon href='https://github.com/niranjan-v2' icon={BsGithub} />

        </div>
      </div>
    </Footer>
  );
}



