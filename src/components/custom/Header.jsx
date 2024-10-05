/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// for dialog box
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function Header() {
  const { isDarkMode } = useTheme();
  //taking the users from the local storage for updatinf headr after sign in
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log(user);
  }, []);

  const [openDialog, setopenDialog] = useState(false);

  //method for login with google
  const login = useGoogleLogin({
    //it has two callback methods
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      GetUserProfile(codeResponse);
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const GetUserProfile = (token_info) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token_info?.access_token}`, {
      headers: {
        Authorization: `Bearer ${token_info?.access_token}`,
        Accept: 'application/json'
      }
    }).then((resp) => {
      console.log(resp);
      //we will store these value or user info into local storage
      localStorage.setItem('user', JSON.stringify(resp.data));
      setopenDialog(false);
      window.location.reload();
    }).catch(err => console.log(err));
  };

  return (
    <div className={`p-3 flex justify-between items-center h-20 header ${isDarkMode ? 'dark' : ''}`}>
      <img src="/nirvananomads.png" alt="" className="w-36 h-auto cursor-pointer" onClick={()=>window.location.href='/'}/>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {user ? (
          <div className="flex items-center gap-4">
            {/* add more trip */}
            <a href="/create-trip">
            <Button variant="outline" className="rounded-full">
              ➕ Create Trip
            </Button>
            </a>

            {/* header is not under react-router-dom component thus path element will not work we have to apply href for this */}
            <a href="/my-trips">
            <Button variant="outline" className="rounded-full">
              My Trips
            </Button>
            </a>

            {/* pop up for logout */}
           <Popover>
    <PopoverTrigger>
      <img
        src={user?.picture}
        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full cursor-pointer"
        alt="User"
      />
    </PopoverTrigger>
    <PopoverContent className="w-48 md:w-64 mt-2 absolute right-0 top-full bg-white   shadow-lg rounded-lg">
      <div className="flex flex-col gap-2 p-2">
        {/* Name of the user */}
        <h2 className=" cursor-pointer font-bold bg-slate-200 hover:bg-slate-400 p-2 text-center rounded-md">{user?.name}</h2>
        {/* Logout button through Google logout auth */}
        <h2
          className="cursor-pointer font-bold bg-red-200 p-2 text-center rounded-md hover:bg-red-400 text-black"
          onClick={() => {
            // Logout action
            googleLogout();
            // Clear local storage
            localStorage.clear();
            // Refresh the window
            window.location.reload();
          }}
        >
          Logout
        </h2>
      </div>
    </PopoverContent>
  </Popover>
          </div>
        ) : (
          <Button variant="themed" onClick={() => setopenDialog(true)}>Sign In</Button>
        )}
      </div>
       {/* dialog box */}
    <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle></DialogTitle>
      <DialogDescription>
        <img src='/nirvananomads.png' className="w-40 h-auto ml-[34%]" />
      </DialogDescription>
      <h2 className='font-bold text-lg mt-5'>Sign In with Google</h2>
      <p>Sign In to the App with Google Authentication securely</p>

      <Button
       className='w-full mt-7 flex gap-2 items-center' 
       onClick={login}>
        <FcGoogle className='h-6 w-6' />
        Sign In With Google
      </Button>


    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>

  );
}

export default Header;
