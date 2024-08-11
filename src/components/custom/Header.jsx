/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
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
  //taking the users from the local storage for updatinf headr after sign in
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log(user);
  }, []);

  const [openDialog, setopenDialog] = useState(false);

  //method for login with google
  const login=useGoogleLogin({ 
    //it has two callback methods
    onSuccess:(codesResp)=>GetUserProfile(codesResp),
    onError:(error)=>console.log(error)
  })
  const GetUserProfile=(token_info)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token_info?.access_token}`,{
    headers:{
      Authorization:`Bearer ${token_info?.access_token}`,
      Accept:'Application/json'
    }
  }).then((resp) => {
     console.log(resp);
     //we will store these value or user info into local storage
     localStorage.setItem('user',JSON.stringify(resp.data));
     setopenDialog(false);
     window.location.reload();
  });
}

  return (
   <div className="p-3 flex justify-between items-center h-20">
      <img src="/nirvananomads.png" alt="" className="w-36 h-auto cursor-pointer" onClick={()=>window.location.href='/'}/>
      <div>
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
                  className="h-[35px] w-[35px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-1">
                {/* name of the user */}
                <h2 className="font-bold bg-slate-200 p-1">{user?.name}</h2>
                {/* logout button through goole logout auth */}
                <h2 className="cursor-pointer  bg-red-200 p-1 hover:bg-red-500" onClick={()=>{
                  //logout kiya
                  googleLogout();
                  //local storage clear kiya
                  localStorage.clear();
                  //window refresh
                  window.location.reload();
                }}>Logout</h2>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={()=>setopenDialog(true)}>Sign In</Button>
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
