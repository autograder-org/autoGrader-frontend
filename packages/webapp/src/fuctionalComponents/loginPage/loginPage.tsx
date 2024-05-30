'use client'
import { FormEvent, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import useScreenSize from "@/hooks/useScreenSize"
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"

import Image from 'next/image';
import { useRouter } from "next/navigation";
import ReCAPTCHA from 'react-google-recaptcha'
import { login, getSession } from "../../lib/session"



export default function LoginPage(repcapchaSiteKey:{
  repcapchaSiteKey:string
}) {
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    useEffect(() => {
        const checkSession = async () => {

            const session = await getSession();
            if (session) {
                router.push('/home');
             } 
             //else {
            //     setLoading(false); // Set loading to false when useEffect completes
            // }
        };
        checkSession();
    }, []);
    const currentScreenSize = useScreenSize();//getting current screensize using hook
    const captchaRef = useRef<any>(null);

    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const captchaValue = captchaRef.current.getValue()
        if (!captchaValue) {
            //if catcha value is null, send a alert
            alert('Please verify the reCAPTCHA!')
        } else {
            //creating session and validation credentails
            login({ email: e.currentTarget.email.value, password: e.currentTarget.password.value }).then((data) => {
                console.log(data)
                if (data?.error) {
                    console.log("invalid user")
                    setError("Invalid username or password.")
                } else {
                    setError("");
                    router.push('/home');
                }
            })
        }
    }


    // if (loading) {
    //     // Return a loading indicator until useEffect completes
    //     return <div>Loading...</div>;
    // }

    return (//Login form
        <main className="bg-[#26313c] w-screen h-screen flex items-center justify-center p-10 overflow-scroll">
            <div className="grid w-full h-full grid-cols-1  md:grid-cols-2">
                <div className=" bg-[#16202a] text-white flex items-center justify-center flex-col md:bg-[#16202a]text-white flex items-center justify-center flex-col">
                    <h1 className="text-3xl mb-4 font-semibold ">AutoGrader</h1>
                    <form className="w-1/2 " onSubmit={(e) => { handleSubmit(e) }}>


                        <Label htmlFor="email">Email</Label>
                        <Input className="mt-3 mb-4 bg-transparent rounded-full" type="email" id="email" />
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input 
                                className="mt-3 mb-4 bg-transparent rounded-full pr-10" 
                                type={showPassword ? "text" : "password"} 
                                id="password" 
                            />
                            <div 
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        
                  <ReCAPTCHA size={currentScreenSize.width < 380 ? "compact" : "normal"} className="mt-3 mb-4 flex justify-center" sitekey={repcapchaSiteKey.repcapchaSiteKey} ref={captchaRef} />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button className="w-full mt-3 bg-indigo-600 rounded-full hover:bg-indigo-700" type="submit">Login</Button>

                    </form>
                </div>
                <div className="relative hidden md:block">
                    <Image className="object-cover " fill={true} src="/bg.jpg" alt="bg-image" />
                </div>
            </div>

        </main>
    );

}



      