"use client";

import { useEffect, useState } from "react";
import PodiumCard from "./podiumCard";
import { ArticlesCardsProps } from "@/app/intercafe";

export default function CarrouselPodiumCard() {
    const [articles, setArticles] = useState<ArticlesCardsProps[]>([]);

    useEffect(() => {
        const articles = async () => {
            try {
                const response = await fetch(`http://localhost:3006/articleMoreFavorite`);
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error("erro no fecth", error);
            }
        };
        articles();
    }, []);
    return (
        <div className="overflow-x-auto h-[258px] w-[full]">
            <div className="flex gap-4 w-max px-4 scroll-smooth lg:justify-between lg:w-full lg:px-0">
                {articles.map((item, index) => {
                    return (
                        <PodiumCard
                            key={index}
                            id={item.id}
                            title={item.title}
                            date={item.date}
                            qntFavorite={item.qntFavorite}
                            urlImg={item.urlImg} 
                            positionPodium={index+1}                           
                        />
                    );
                })}
            </div>
        </div>
    );
}
