import Image from "next/image";
import { FaPen } from "react-icons/fa";
import { ArticlesCardsProps } from "@/app/intercafe";
import Link from "next/link";
import ButtonFavorite from "../UI/buttonFavorite";

export default function PostedArticlesCards({
    id,
    title,
    nameUser,
    urlImg,
    urlAvatarUser,
    textArticles,
}: ArticlesCardsProps) {
    return (
        <>
            <div className="flex flex-col justify-between h-[480px] gap-3 col-span-10 col-start-2 lg:gap-3 lg:col-span-4 ">
                <Image
                    src={urlImg}
                    width={369}
                    height={224}
                    alt="wallpaperMainCard"
                    className="rounded-2xl shadow lg:rounded-none"
                />
                <Link
                    href={`/${title}`}
                    className="font-semibold h-[100px] overflow-hidden text-sm lg:text-base hover:cursor-pointer hover:underline"
                >
                    {title}
                </Link>
                <p className="text-[12px] h-[100px] overflow-hidden lg:text-sm">
                    {textArticles}{" "}
                </p>
                <div className="flex justify-between" key={id}>
                    <div className="flex items-center gap-3">
                        <Image
                            src={urlAvatarUser}
                            width={100}
                            height={100}
                            alt="wallpaperMainCard"
                            className=" rounded-full w-8 h-8 shadow"
                        />
                        <p className="lg:text-sm">
                            Por{" "}
                            <span className="font-semibold ">{nameUser}</span> -
                            Março 20, 2025
                        </p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <ButtonFavorite titleArticle={title} />
                        <button className="bg-[#007AFF] text-white text-[12px] w-[26px] h-[26px] border border-[#007AFF] rounded-lg flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#007AFF]">
                            <FaPen />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
