'use client'
import {  FormEvent, useRef } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";






  export default function LoginPage() {
    const captchaRef = useRef<any>(null);

    const router = useRouter();
  

  
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const captchaValue = captchaRef.current.getValue()
        if (!captchaValue) {
      //if catcha value is null, send a alert
      alert('Please verify the reCAPTCHA!')}
      else{
      // Add your login logic here
          router.push('/home')}
          

      };
  
      return (//Login form
          <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
            <div className="grid w-full h-full grid-cols-1 bg-white md:grid-cols-2">
                <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
                <h1 className="text-3xl mb-4 font-semibold ">AutoGrader</h1>
                <form className="w-1/2 " onSubmit={(e) => {handleSubmit(e)}}>
            
                  <Label htmlFor="email">Email</Label>
                  <Input className=" w-full mt-3 mb-4 bg-transparent rounded-full" type="email" id="email" />
                  <Label htmlFor="email">  Password</Label>
                  <Input className=" w-full mt-3 mb-4 bg-transparent rounded-full" type="password" id="password" />
                   <ReCAPTCHA  className=" w-full mt-3 mb-4 flex justify-center" sitekey="6Lfj0M4pAAAAADIXRkl_0fUWhvXVnzeygsi1WFLr" ref={captchaRef} /> 
                  <Button className="w-full mt-4 bg-indigo-600 rounded-full hover:bg-indigo-700" type="submit">Login</Button>
               </form>
               </div>
               <div className="relative hidden md:block">
                  <Image className="object-cover " fill={true} src="/bg.jpg" alt="bg-image"/>
               </div>
            </div>
            
        </main>
      );
     
  }


