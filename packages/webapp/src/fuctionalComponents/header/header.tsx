
import Image from 'next/image';

import profilePic from "/public/persona.jpg"
import HeaderDropdown from "./headerDropdown"


interface HeaderProps {
    username: string;
    
}

const Header: React.FC<HeaderProps> = ({username}) => {

   
    return (
        <header className="bg-[#26313c] text-white p-4 flex justify-between items-center ">
            <h1 className="text-3xl  font-extrabold font-mono ">AutoGrader</h1>
            <div className="w-2/6 flex  justify-end">
           
                   <div className="hidden md:block md:mr-2 rounded-full">
                    
                     <Image
                        src={profilePic}
                        alt={username[0]}
                        width={55}
                        height={55}
                        className="md:object-contain rounded-full"
                        />
                    </div>
                   <HeaderDropdown username={username}/>
             
                
         </div>
        </header>
    );
};
export default Header;