"use client";

import Image from "next/image";
import { useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Link from "next/link";

export default function PostedArticlesCards() {
    const [favorite, setFavorite] = useState(false);

    return (
        <>
            <Link
                href="/posted_articles"
                className="flex flex-col justify-between h-[424px] gap-3 col-span-10 col-start-2 lg:gap-3 lg:col-span-4"
            >
                <Image
                    src="/assets/iotimg.png"
                    width={369}
                    height={224}
                    alt="wallpaperMainCard"
                    className="rounded-2xl shadow lg:rounded-none"
                />
                <h2 className="font-semibold text-sm lg:text-base ">
                    Como a Internet das Coisas (IoT) Está Moldando o Futuro das
                    Cidades Inteligentes
                </h2>
                <p className="text-[12px] lg:text-sm">
                    TypeScript, uma superconjunto de JavaScript, tem se tornado
                    uma escolha popular entre desenvolvedores para garantir
                    código mais seguro e fácil de manter. Neste artigo, vamos
                    explorar os benefícios da tipagem estática no...
                </p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/assets/fotoUser.jpg"
                            width={100}
                            height={100}
                            alt="wallpaperMainCard"
                            className=" rounded-full w-8 h-8 shadow"
                        />
                        <p>
                            Por{" "}
                            <span className="font-semibold lg:text-sm">
                                Vilma Rosa
                            </span>{" "}
                            - Março 20, 2025
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button
                            onClick={() => setFavorite(!favorite)}
                            className={`transition-colors cursor-pointer hover:text-red-500 ${
                                favorite ? "text-red-500" : "text-gray-400"
                            }`}
                        >
                            {favorite ? (
                                <MdOutlineFavorite />
                            ) : (
                                <MdFavoriteBorder />
                            )}
                        </button>
                        <button className="bg-[#007AFF] text-white text-[12px] w-[26px] h-[26px] border border-[#007AFF] rounded-lg flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#007AFF]">
                            <FaPen />
                        </button>
                    </div>
                </div>
            </Link>
        </>
    );
}
