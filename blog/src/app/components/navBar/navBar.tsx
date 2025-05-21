"use client";

import Image from "next/image";
import Button from "../UI/button";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [userLogin, setUserLogin] = useState(true);

    return (
        <div className="flex justify-center lg:justify-between mt-3">
            <Image
                src="/assets/LogoBlack.png"
                width={70}
                height={70}
                alt="logo"
                className="hidden lg:grid"
            />
            <div className="flex justify-between items-center w-[346px] text-[14px]">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <Link href="/articles" className="hover:underline">
                    Artigos
                </Link>
                <span className="border-e border-[#090909] h-3.5"></span>
                {userLogin ? (
                    <>
                        <Link href="/newArticles" className="hover:underline">
                            Publicar
                        </Link>
                        <div className="relative group">
                            <div className="w-10 h-10 rounded-full relative overflow-hidden cursor-pointer">
                                <Image
                                    src="/assets/fotoUser.jpg"
                                    alt="photoUser"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="hidden group-hover:flex absolute right-3 mt-0.5  flex-col w-48 h-20 border border-[#00000033] bg-white shadow-md z-10">
                                <Link
                                    href="/editProfile"
                                    className="flex justify-end items-center hover:bg-[#a1a1a136] h-full px-5"
                                >
                                    Perfil
                                </Link>
                                <Link
                                    href="/"
                                    className="flex justify-end items-center hover:bg-[#a1a1a136] h-full px-5"
                                >
                                    Desconectar
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {" "}
                        <Link href="/login" className="hover:underline">
                            Entrar
                        </Link>
                        <Button className="w-[93px] h-10 text-white bg-black rounded-lg cursor-pointer hover:bg-gray-800">
                            Registrar
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
