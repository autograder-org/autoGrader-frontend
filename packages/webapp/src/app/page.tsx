import LoginPage from "@/fuctionalComponents/loginPage/loginPage"
import { EnvConfiguration } from "../config/env.config";


export default function App(){
  return(<div className="overflow-scroll" >
    <LoginPage repcapchaSiteKey={EnvConfiguration.RECAPTCHA_SITE_KEY}/>
    </div>

)
}