import NavBar from "@/app/components/navBar/navBar";
import PostedArticlesCards from "../../components/cards/postedArticlesCards";

export default function Articles() {
    return (
        <section className="max-w-[1140px] mx-auto">
            <NavBar />
            <div className="grid grid-cols-12 mt-10 gap-5">
                <PostedArticlesCards />
                <PostedArticlesCards />
                <PostedArticlesCards />
                <PostedArticlesCards />
                <PostedArticlesCards />
                <PostedArticlesCards />
                <PostedArticlesCards />
                <PostedArticlesCards />
                <PostedArticlesCards />
                <PostedArticlesCards />
            </div>
        </section>
    );
}
