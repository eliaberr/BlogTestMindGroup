import Image from "next/image";

export default function NewArticlesCard() {
    return (
        <div className="bg-[#090909] text-white rounded-sm mt-10 py-6 px-3 mb-20 lg:col-span-5 lg:mt-0 lg:h-[530px] lg:px-5 lg:py-5 overflow-auto">
            <p className="font-irish text-5xl">New</p>

            <div className="grid gap-5 mt-5 text-[12px]">
                <div className="grid gap-2 hover:bg-gray-800 cursor-pointer">
                    <h2 className="font-semibold lg:text-lg">
                        Inteligência Artificial: O Futuro da Automação e da
                        Transformação Digital
                    </h2>
                    <p className="font-light lg:text-sm">
                        Neste artigo, exploramos como a inteligência artificial
                        está moldando o futuro dos negócios e da tecno...
                    </p>
                </div>
                <div className=" grid gap-2 hover:bg-gray-800 cursor-pointer">
                    <h2 className="font-semibold lg:text-lg">
                        Inteligência Artificial: O Futuro da Automação e da
                        Transformação Digital
                    </h2>
                    <p className="font-light lg:text-sm">
                        Neste artigo, exploramos como a inteligência artificial
                        está moldando o futuro dos negócios e da tecno...
                    </p>
                </div>
                <div className=" grid gap-2 hover:bg-gray-800 cursor-pointer">
                    <h2 className="font-semibold lg:text-lg">
                        Inteligência Artificial: O Futuro da Automação e da
                        Transformação Digital
                    </h2>
                    <p className="font-light lg:text-sm">
                        Neste artigo, exploramos como a inteligência artificial
                        está moldando o futuro dos negócios e da tecno...
                    </p>
                </div>
                <div className=" grid gap-2 hover:bg-gray-800 cursor-pointer">
                    <h2 className="font-semibold lg:text-lg">
                        Inteligência Artificial: O Futuro da Automação e da
                        Transformação Digital
                    </h2>
                    <p className="font-light lg:text-sm">
                        Neste artigo, exploramos como a inteligência artificial
                        está moldando o futuro dos negócios e da tecno...
                    </p>
                </div>
            </div>
        </div>
    );
}
