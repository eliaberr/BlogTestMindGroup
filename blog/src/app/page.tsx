import CarrouselPodiumCard from "./components/cards/carrouselPodiumCard";
import ContainerHome from "./components/containerHome";
import NavBar from "./components/navBar/navBar";

export default function Home() {
    return <section className="max-w-[1140px] mx-auto">
        <NavBar/>
        <ContainerHome/>
        <CarrouselPodiumCard/>
    </section>;
}
