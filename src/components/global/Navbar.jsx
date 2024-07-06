import { useNavigate } from "react-router-dom"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
} from "../ui/menubar"
import { RightCircleTwoTone } from "@ant-design/icons";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center !w-[100%] bg-[#fff] h-[12vh] max-sm:hidden">
            <div className=" pl-[5%] text-[17px] font-[700] cursor-pointer" onClick={() => navigate("/")}><span className='text-[#e5184e]'>Red</span>Cliffe Labs</div>
            <Menubar className='border-none pr-[15%]'>
                <MenubarMenu>
                    <MenubarTrigger className="text-[17px] cursor-pointer" onClick={() => navigate("/")}>Home</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-[17px] cursor-pointer">Purchase</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem className="text-[15px] cursor-pointer" onClick={() => navigate("/purchase-reagents")}><RightCircleTwoTone className="mr-[10px]" /> Reagents</MenubarItem>
                        <MenubarItem className="text-[15px] cursor-pointer" onClick={() => navigate("/purchase-analyzers")}><RightCircleTwoTone className="mr-[10px]" /> Analyzers</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-[17px] cursor-pointer" onClick={() => navigate("/my-orders")}>Orders</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-[17px] cursor-pointer">Profile</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-[17px] cursor-pointer" onClick={() => navigate("/login")}>Login</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}

export default Navbar