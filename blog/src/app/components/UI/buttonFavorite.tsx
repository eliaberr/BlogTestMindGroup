import { ButtonFavoriteProps, TestArticlesCardsProps } from "@/app/intercafe";
import { useEffect, useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

export default function ButtonFavorite({ titleArticle }: ButtonFavoriteProps) {
    const [qntFavorite, setQntFavorite] = useState<TestArticlesCardsProps[]>(
        []
    );
    const [favorite, setFavorite] = useState(Number);
    const [showFavorite, setShowFavorite] = useState(false);
    const [idArticles, setIdArticles] = useState(Number);
    useEffect(() => {
        const articles = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3006/article/${encodeURIComponent(
                        titleArticle
                    )}`
                );
                const data = await response.json();
                setQntFavorite(data);
                console.log(data);
            } catch (error) {
                console.error("erro no fetch", error);
            }
        };
        articles();
    }, []);

    useEffect(() => {
        if (qntFavorite.length > 0) {
            console.log(`teste do id ${qntFavorite[0].idArticles} `);
            console.log(`teste do favorite ${qntFavorite[0].qntFavorite} `);
            setIdArticles(qntFavorite[0].idArticles);
            setFavorite(qntFavorite[0].qntFavorite);
        }
    }, [qntFavorite]);

    const updateFavorite = async () => {
        const newFavorite = showFavorite ? favorite - 1 : favorite + 1;
        try {
            const response = await fetch(
                `http://localhost:3006/article/${idArticles.toString()}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ qntFavorite: newFavorite }),
                }
            );
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Erro ao atualizar no servidor: ${errorText}`);
            }
            setFavorite(newFavorite);
            setShowFavorite(!showFavorite);
        } catch (error) {
            console.error("Erro ao atualizar favorito:", error);
        }
    };

    return (
        <>
            <button
                onClick={updateFavorite}
                className={`transition-colors cursor-pointer hover:text-red-500 ${
                    showFavorite ? "text-red-500" : "text-gray-400"
                }`}
            >
                {showFavorite ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
            </button>
            <p className="text-sm font-medium">{favorite}</p>
        </>
    );
}
