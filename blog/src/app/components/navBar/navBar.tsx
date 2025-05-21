import Image from "next/image";
import Button from "../UI/button";
import Link from "next/link";

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
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <a href="" className="hover:underline">Artigos</a>
                <span className="border-e border-[#090909] h-3.5"></span>
                <Link href="/login" className="hover:underline">
                    Entrar
                </Link>
                <Button className="w-[93px] h-10 text-white bg-black rounded-lg cursor-pointer hover:bg-gray-800">Registrar</Button>
            </div>
        </div>
    );
}
