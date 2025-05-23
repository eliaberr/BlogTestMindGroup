import { ArticlesCardsProps } from "@/app/intercafe";
import Image from "next/image";
import Link from "next/link";
import ButtonFavorite from "../UI/buttonFavorite";

export default function PodiumCard({
    id,
    title,
    date,
    urlImg,
    positionPodium,
}: ArticlesCardsProps) {
    return (
        <div
            key={id}
            className="w-[289px] mx-auto flex flex-col gap-1.5 lg:w-[349px]"
        >
            <div className="flex items-center justify-between">
                <Image
                    src={urlImg}
                    width={177}
                    height={177}
                    alt="wallpaperMainCard"
                    className="rounded shadow"
                />
                <h2 className="font-irish text-8xl lg:mx-auto">
                    0{positionPodium}
                </h2>
            </div>
            <Link
                href={`http://localhost:3000/${encodeURIComponent(title)}`}
                className="font-medium text-sm h-[60px] line-clamp-3 overflow-hidden hover:underline"
            >
                {title}
            </Link>
            <div className="flex items-center justify-between">
                <div className="flex items-cente gap-0.5">
                    <ButtonFavorite
                        titleArticle={title}
                    />
                    
                </div>
                <p className="text-[12px] font-light">{date}</p>
            </div>
        </div>
    );
}
