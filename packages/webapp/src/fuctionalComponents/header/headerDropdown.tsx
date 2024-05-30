    "use client"
    import { Button } from "@/components/ui/button"
    import useScreenSize from "@/hooks/useScreenSize"
  import{logout} from "../../lib/session"



    import {
        DropdownMenu,
        DropdownMenuCheckboxItem,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"

    interface HeaderDropdownProps {
        username: string;
    }

    export default function HeaderDropdown({ username }: HeaderDropdownProps)
    {
   
   

function handleLogoutButton()
    {
        logout();
    }

        return(<div className="py-2 px-4 " >
                        
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-sm text-black md:text-black bg-white text-base ">
         {username}
          </Button>
        </DropdownMenuTrigger>
    <DropdownMenuContent>
    <DropdownMenuItem onSelect={handleLogoutButton}>Logout</DropdownMenuItem>
    <DropdownMenuSeparator />
    
        
    </DropdownMenuContent>
    </DropdownMenu>
                    </div>
                    )
    }
    