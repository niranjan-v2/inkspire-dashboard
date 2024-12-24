import { Navbar, TextInput, Button } from 'flowbite-react'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className = 'border-b-2'>
      <Link to ="/" className='self-center whitespace-nowrap text-sm sm:text-xl 
      font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500'>Inkspire</span>
        <br></br>
        <span className='px-10 text-sm font-normal'>By Niranjan Vasudevan</span>
      </Link>
      <form>
        <TextInput
          type='text' 
          placeholder='Search...'
          style={{borderRadius:'0'}}
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-9 lg:hidden' color='gray' pill>
        <AiOutlineSearch></AiOutlineSearch>
      </Button>
      <div className="flex gap-6 md:order-2">
        <Button className='w-14 h-9 mt-1 hidden sm:inline' color='gray' pill>
          <FaMoon></FaMoon>
        </Button>
        <Link to ='/signin'>
          <Button color='blue' >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle></Navbar.Toggle>
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={'div'}>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={'div'}>
            <Link to='/about'>
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={'div'}>
            <Link to='/projects'>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>

    </Navbar>
  )
}
