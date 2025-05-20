import MainCard from "./cards/mainCard";
import NewArticlesCard from "./cards/newArticlesCard";

export default function ContainerHome() {
    return (
        <section className="mt-10 w-[335px] mx-auto lg:w-full lg:mx-0 grid lg:grid-cols-12 gap-2">
            <MainCard/>
            <NewArticlesCard/>
        </section>
    )
}