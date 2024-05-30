
"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { EnvConfiguration } from "../config/env.config";


type data = {
    email : string;
    password: string;
}
const secretKey = EnvConfiguration.SESSION_SECRET;

const key = new TextEncoder().encode(secretKey);

export async function login (data: data) {

      const user = {email:data.email, password:data.password}


     //Verify the Credentials
    const combined = `${user.email}:${user.password}`;


    // Encode the combined string to Base64
    const base64Encoded = Buffer.from(combined).toString('base64');

    const res = await fetch(`${EnvConfiguration.BACKENDURL}/v5/user/self`, {
        headers: {
          'Authorization': `Basic ${base64Encoded}`, // auth header with bearer token
        },
      });

      if (res.ok) {
        const result = await res.json();

    //Create the session

    const expires=new Date(Date.now() +10 * 60 * 1000)
    const session=await encrypt({result,expires})

    //save the session in a cookie

    cookies().set('session',session,{expires,httpOnly:true});

     return result;
      }
     else {
     // Handle error
        return {'error':true}   
            }
    
      
   
}
export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
  }
  


///Encrypton and decryption ..
export async function encrypt(payload: any) {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("10 mins from now")
      .sign(key);
  }

  export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  }


  export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
  }


  export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;
  
    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 10 * 60* 1000);
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: await encrypt(parsed),
      httpOnly: true,
      expires: parsed.expires,
    });
    return res;
  }  