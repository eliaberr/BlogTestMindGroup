"use client";

import { ArticlesCardsProps } from "@/app/intercafe";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewArticlesCard() {
    const [articles, setArticles] = useState<ArticlesCardsProps[]>([]);

    useEffect(() => {
        const articles = async () => {
            try {
                const response = await fetch(`http://localhost:3006/article`);
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error("erro no fetch", error);
            }
        };
        articles();
    }, []);

    return (
        <div className="bg-[#090909] text-white rounded-sm mt-10 py-6 px-3 mb-20 lg:col-span-5 lg:mt-0 lg:h-[530px] lg:px-5 lg:py-5 overflow-auto">
            <p className="font-irish text-5xl">New</p>
            <div className="grid gap-5 mt-5 text-[12px] ">
                {articles.slice(0, 3).map((item,index) => {
                    return (
                        <Link
                            href={`http://localhost:3000/${encodeURIComponent(
                                item.title
                            )}`}
                            key={index}
                            className="grid gap-2 hover:bg-gray-800 cursor-pointer"
                        >
                            <h2 className="font-semibold lg:text-lg">
                                {item.title}
                            </h2>
                            <p className="font-light lg:text-sm overflow-hidden line-clamp-2">
                                {item.textArticles}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
