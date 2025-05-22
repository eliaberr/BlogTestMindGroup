import { ReactNode } from "react";

export interface AllFormProps {
    showForm?: (formName: number) => void;
}

export interface LoginLayoutProps {
    children: ReactNode;
}

export interface PostedArticlesCardsProps {
    id: number,
    title: string,
    date?: string,
    nameUser: string,
    qntFavorite?: number,
    urlImg: string,
    urlAvatarUser: string,
    textArticles: string
}

export interface ArtilesPage {
    params: Promise<{ titleArticles: string }>
}

/*<button
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
                        </button>*/