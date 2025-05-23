import { ReactNode } from "react";

export interface AllFormProps {
    showForm?: (formName: number) => void;
}
export interface LoginLayoutProps {
    children: ReactNode;
}
export interface ArticlesCardsProps {
    id: number,
    title: string,
    date?: string,
    nameUser?: string,
    qntFavorite?: number,
    urlImg: string,
    urlAvatarUser?: string,
    textArticles?: string,
    positionPodium?: number
}
export interface ArtilesPage {
    params: Promise<{ titleArticles: string }>
}
export interface ButtonFavoriteProps {
    titleArticle: string
    idUser?: number
    idArticle?: number
}

export interface TestArticlesCardsProps {
    idArticles: number,
    title: string,
    date?: string,
    nameUser?: string,
    qntFavorite?: number,
    urlImg: string,
    urlAvatarUser?: string,
    textArticles?: string,
    positionPodium?: number
}

export interface User {
    idUser: 1,
    name: string,
    surname: string,
    email: string,
    password: string,
    idArticles: number
}
