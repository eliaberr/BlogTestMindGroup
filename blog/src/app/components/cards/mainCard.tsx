import Image from "next/image";

export default function MainCard() {
    return (
        <div className="flex flex-col justify-between h-[400px] gap-3 lg:h-[530px] lg:gap-3 lg:col-span-7">
            <Image
                src="/assets/wallpaperMainCard.jpeg"
                width={755}
                height={368}
                alt="wallpaperMainCard"
                className="rounded-2xl shadow lg:h-[380px] lg:rounded "
            />
            <h2 className="font-bold text-xl lg:text-[28px] lg:ps-5">
                Desvendando o JavaScript: Dicas e Técnicas Essenciais para
                Desenvolvedores
            </h2>
            <div className="flex justify-between lg:ps-5">
                <div className="flex items-center gap-3">
                    <Image
                        src="/assets/fotoUser.jpg"
                        width={100}
                        height={100}
                        alt="wallpaperMainCard"
                        className=" rounded-full w-10 h-10 shadow"
                    />
                    <p>
                        Por{" "}
                        <span className="font-semibold lg:text-sm">
                            Vilma Rosa
                        </span>{" "}
                        - Março 20, 2025
                    </p>
                </div>
                <button className="bg-[#FF3B30] text-white w-[110px] h-10 text-sm rounded-lg hidden lg:grid items-center">LER MAIS</button>
            </div>
        </div>
    );
}
