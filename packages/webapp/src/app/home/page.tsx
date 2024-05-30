import { redirect } from "next/navigation";
import {getSession} from "../../lib/session"
import Header from "@/fuctionalComponents/header/header"
import "../globals.css";
import HomePageContent from "@/fuctionalComponents/homePageContent"


export default async function HomePage() {
  const session = await getSession();
if(!session){
    redirect('/')
  }

const firstName = session.result.first_name.charAt(0).toUpperCase();;
const lastName = session.result.last_name.charAt(0).toUpperCase();



  return (
      <div className="overflow-scroll text-white bg-black h-screen "> 
          <Header username={firstName+lastName}/>
             
          <main className="p-4 h-auto h-5/6">
                <h1 className="text-4xl  text-center p-4  leading-7 text-yellow-500  sm:truncate text-3xl tracking-tight ">AUTO GRADER</h1>
                <p className="text-center text-l m-5" >Hi username! Welcome to auto grader. Automated assignment grading system to reduce manual grading fatigue and improve efficiency.</p>
\               <HomePageContent/>
          </main>
      </div>
  );
};
  