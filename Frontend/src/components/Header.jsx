import { useNavigate } from "react-router";
import { Logo } from "./Logo";

export function Header() {

    const navigate = useNavigate()
    
    return (
        <header className="flex px-5 lg:px-10 xl:px-20 py-4 border-b-[0.5px] border-white border-opacity-20">
            <Logo 
            action={()=> navigate('/')}
            />

        </header>
    )
}