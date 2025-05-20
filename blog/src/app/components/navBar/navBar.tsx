import Image from "next/image";
import Button from "../UI/button";

export default function NavBar() {
    return (
        <div className="flex justify-between mt-3">
            <Image
                src="/assets/LogoBlack.png"
                width={70}
                height={70}
                alt="logo"
            />
            <div className="flex justify-between items-center w-[346px] text-[14px]">
                <a href="">Home</a>
                <a href="">Artigos</a>
                <span className="border-e border-[#090909] h-3.5"></span>
                <a href="">Entrar</a>
                <Button className="w-[93px] h-10 text-white bg-black rounded-lg">Registrar</Button>
            </div>
        </div>
    );
}
