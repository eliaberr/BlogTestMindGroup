"use client";

import Image from "next/image";
import { useState } from "react";
import { MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";

export default function PodiumCard() {
    const [favorite, setFavorite] = useState(false);

    return (
        <div className="w-[289px] mx-auto flex flex-col gap-1.5 cursor-pointer hover:shadow-2xl hover:bg-[#afafaf35] lg:w-[349px]">
            <div className="flex items-center justify-between">
                <Image
                    src="/assets/logoTs.png"
                    width={177}
                    height={177}
                    alt="wallpaperMainCard"
                    className="rounded shadow"
                />
                <h2 className="text-8xl lg:mx-auto">01</h2>
            </div>
            <p className="font-medium text-sm">
                5 Gerações de Redes 5G: O Que Esperar da Próxima Revolução da
                Conectividade
            </p>
            <div className="flex items-center justify-between">
                <div className="flex items-cente gap-0.5">
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
                    <p className="text-sm font-medium">16</p>
                </div>
                <p className="text-[12px] font-light">Março 19, 2025</p>
            </div>
        </div>
    );
}
