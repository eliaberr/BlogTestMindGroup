import PodiumCard from "./podiumCard";

export default function CarrouselPodiumCard() {
    return (
        <div className="overflow-x-auto w-full">
            <div className="flex gap-4 w-max px-4 scroll-smooth lg:justify-between lg:w-full lg:px-0">
                <PodiumCard />
                <PodiumCard />
                <PodiumCard />
            </div>
        </div>
    );
}
