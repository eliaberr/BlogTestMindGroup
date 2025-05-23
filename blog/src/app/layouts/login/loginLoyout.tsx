import { GoHome } from "react-icons/go";
import Link from "next/link";
import { LoginLayoutProps } from "../../intercafe";

export default function LoginLayout({children}:LoginLayoutProps) {
    return (
        <section className="h-screen grid-cols-12 lg:grid relative">
            <div className="bg-[#090909] hidden col-span-7 lg:flex flex-col justify-center items-center leading-none">
                <span className="font-irish text-[160px] text-white">M.</span>
                <h2 className="text-white">Inovação ao Seu Alcance.</h2>
            </div>
            <div className="col-span-5 w-[303px] mx-auto flex-col lg:justify-center lg:flex ">
                <Link href="/" className="border rounded-2xl w-20 text-sm flex justify-center items-center gap-2 cursor-pointer hover:bg-[#f1f1f1f1] absolute -top-6 right-3 lg:top-5 lg:right-2">
                    <GoHome />
                    Home
                </Link>
                {children}
            </div>
        </section>
    );
}
