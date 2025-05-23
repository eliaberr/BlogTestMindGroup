"use client";

import NavBar from "../../components/navBar/navBar";
import { FaPen } from "react-icons/fa";
import Image from "next/image";
import { ArtilesPage, ArticlesCardsProps } from "@/app/intercafe";
import { use, useEffect, useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

export default function PostedArticles({ params }: ArtilesPage) {
    const [favorite, setFavorite] = useState(false);
    const { titleArticles } = use(params);
    const [articles, setArticles] = useState<ArticlesCardsProps[]>([]);

    useEffect(() => {
        const articles = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3006/article/${titleArticles}`
                );
                const data = await response.json();
                console.log("Dados recebidos:", data);
                setArticles(data);
            } catch (error) {
                console.error("Erro no fetch:", error);
            }
        };
        articles();
    }, [titleArticles]);

    if (!articles || articles.length === 0) {
        return <p className="text-center mt-10">Carregando artigo...</p>;
    }

    const article = articles[0];

    return (
        <section className="max-w-[1140px] mx-auto">
            <NavBar />
            <div className="mt-10 px-3 lg:px-0 flex flex-col gap-4">
                <h2 className="font-semibold lg:text-4xl lg:font-medium">
                    {article.title}
                </h2>
                <div className="flex justify-between border-b border-[#09090933] pb-3">
                    <div className="flex items-center gap-3">
                        <Image
                            src={article.urlAvatarUser}
                            width={100}
                            height={100}
                            alt="wallpaperMainCard"
                            className=" rounded-full w-8 h-8 shadow"
                        />
                        <p>
                            Por{" "}
                            <span className="font-semibold lg:text-sm">
                                {article.nameUser}
                            </span>{" "}
                            - {article.date}
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
                <div>
                    <Image
                        src={article.urlImg}
                        width={1140}
                        height={498}
                        alt="imgArticle"
                        className="h-[498px] bg-cover"
                    />
                    <div className="flex flex-col gap-4 mt-10 text-[12px] lg:text-xl">
                        <p className="whitespace-pre-line">{article.textArticles}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
