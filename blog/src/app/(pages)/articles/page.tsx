"use client";

import NavBar from "@/app/components/navBar/navBar";
import PostedArticlesCards from "../../components/cards/postedArticlesCards";
import { useEffect, useState } from "react";
import { ArticlesCardsProps } from "@/app/intercafe";

export default function Articles() {
    const [articles, setArticles] = useState<ArticlesCardsProps[]>([]);

    useEffect(() => {
        const articles = async () => {
            try {
                const response = await fetch(`http://localhost:3006/article`);
                const data = await response.json();
                console.log("Dados recebidos:", data); 
                setArticles(data);
            } catch (error) {
                console.error("Erro no fetch:", error);
            }
        };
        articles();
    }, []);

    return (
        <section className="max-w-[1140px] mx-auto">
            <NavBar />
            <div className="grid grid-cols-12 mt-10 gap-5">
                {articles.map((item) => {
                    return (
                        <PostedArticlesCards
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            nameUser={item.nameUser}
                            urlImg={item.urlImg}
                            urlAvatarUser={item.urlAvatarUser}
                            textArticles={item.textArticles}
                        />
                    );
                })}
            </div>
        </section>
    );
}
