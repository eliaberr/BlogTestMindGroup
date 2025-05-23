"use client";

import { ArticlesCardsProps } from "@/app/intercafe";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainCard() {
    const [article, setArticle] = useState<ArticlesCardsProps[]>([]);

    useEffect(() => {
        const article = async () => {
            try {
                const response = await fetch(`http://localhost:3006/article`);
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                console.error("erro no fetch", error);
            }
        };
        article();
    }, []);

    if (!article || article.length === 0) {
        return <p className="text-center mt-10">Carregando artigo...</p>;
    }

    const articleMoreFavorite = article[0];

    return (
        <div className="flex flex-col justify-between h-[400px] gap-3 lg:h-[530px] lg:gap-3 lg:col-span-7">
            <Image
                src={articleMoreFavorite.urlImg}
                width={755}
                height={368}
                alt="wallpaperMainCard"
                className="rounded-2xl shadow lg:h-[380px] lg:rounded "
            />
            <h2 className="font-bold text-xl line-clamp-2 lg:text-[28px] lg:ps-5">
                {articleMoreFavorite.title}
            </h2>
            <div className="flex justify-between lg:ps-5">
                <div className="flex items-center gap-3">
                    <Image
                        src={articleMoreFavorite.urlAvatarUser}
                        width={100}
                        height={100}
                        alt="wallpaperMainCard"
                        className=" rounded-full w-10 h-10 shadow"
                    />
                    <p>
                        Por{" "}
                        <span className="font-semibold lg:text-sm">
                            {articleMoreFavorite.nameUser}
                        </span>{" "}
                        - {articleMoreFavorite.date}
                    </p>
                </div>
                <Link
                    href={`http://localhost:3000/${encodeURIComponent(
                        articleMoreFavorite.title
                    )}`}
                    className="bg-[#FF3B30] text-white w-[110px] h-10 text-sm rounded-lg hidden lg:grid items-center justify-center hover:bg-[#ff1206] cursor-pointer"
                >
                    LER MAIS
                </Link>
            </div>
        </div>
    );
}
