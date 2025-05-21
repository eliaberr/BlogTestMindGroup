"use client";

import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import NavBar from "../../components/navBar/navBar";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function PostedArticles() {
    const [favorite, setFavorite] = useState(false);
    return (
        <section className="max-w-[1140px] mx-auto">
            <NavBar />
            <div className="mt-10 px-3 lg:px-0 flex flex-col gap-4">
                <h2 className="font-semibold lg:text-4xl lg:font-medium">
                    Dominando TypeScript: Por que a Tipagem Estática Está
                    Transformando o Desenvolvimento JavaScript
                </h2>
                <div className="flex justify-between border-b border-[#09090933] pb-3">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/assets/fotoUser.jpg"
                            width={100}
                            height={100}
                            alt="wallpaperMainCard"
                            className=" rounded-full w-8 h-8 shadow"
                        />
                        <p>
                            Por{" "}
                            <span className="font-semibold lg:text-sm">
                                Vilma Rosa
                            </span>{" "}
                            - Março 20, 2025
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button
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
                        </button>
                        <button className="bg-[#007AFF] text-white text-[12px] w-[26px] h-[26px] border border-[#007AFF] rounded-lg flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#007AFF]">
                            <FaPen />
                        </button>
                    </div>
                </div>
                <div>
                    <Image
                        src="/assets/wallpaperMainCard.jpeg"
                        width={1140}
                        height={498}
                        alt="imgArticle"
                        className="h-[498px] bg-cover"
                    />
                    <div className="flex flex-col gap-4 mt-10 text-[12px] lg:text-xl">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce sodales leo nisi, at scelerisque metus
                            pharetra sed. Nulla eu efficitur dolor. Integer sit
                            amet dui ornare, tempor risus a, vestibulum purus.
                            Morbi lacus magna, molestie varius elit a, dignissim
                            volutpat dui. Nam sit amet sem condimentum,
                            hendrerit tortor nec, ultricies eros. Curabitur eget
                            sodales odio, non tempor ex. Vestibulum id fringilla
                            est. Praesent id urna nisi. Phasellus ac odio eros.
                            Vestibulum dictum erat nibh, vel placerat est
                            condimentum vel. Phasellus malesuada, leo et commodo
                            hendrerit, nisi tortor tincidunt ipsum, ut tincidunt
                            enim sapien vel neque. Interdum et malesuada fames
                            ac ante ipsum primis in faucibus. Vivamus eu auctor
                            felis. Proin vitae malesuada mauris. Morbi quis ex
                            ligula. Aenean consectetur mauris non iaculis porta.
                            Nunc ultrices, mauris tincidunt pulvinar
                            scelerisque, dolor est condimentum metus, ut
                            interdum est nisl ut ante. Cras rhoncus lacus eu
                            finibus convallis. Ut varius lacus eros, eget
                            suscipit odio aliquet nec. Nam sem eros, ornare ac
                            erat eu, pharetra finibus ex. Donec in massa vitae
                            lectus blandit posuere. Cras ut risus id metus
                            mattis dictum
                        </p>
                        <p>
                            Pellentesque at urna feugiat, accumsan diam vel,
                            condimentum mi. Fusce ac semper arcu, vel
                            pellentesque ante. Aenean et volutpat orci. Donec
                            vitae feugiat odio. Aenean vel luctus sem, vitae
                            cursus urna. Suspendisse consectetur urna vitae
                            aliquam ornare. Donec mattis nisl id lectus
                            sollicitudin, pulvinar dictum velit lacinia. Quisque
                            finibus justo a nibh rhoncus, a efficitur purus
                            maximus. Etiam posuere libero id fringilla maximus.
                            Morbi molestie quam fermentum dolor hendrerit
                            condimentum. Suspendisse accumsan semper pretium.
                            Donec nisi lacus, feugiat eu sem at, pretium
                            consequat dolor. Integer commodo massa nisi, quis
                            viverra massa interdum ac. Ut commodo et magna vel
                            lobortis. Nullam varius enim nec ultricies lacinia.
                            Proin egestas tempus est.
                        </p>
                        <p>
                            Cras ac ex ac ex auctor semper ac quis metus.
                            Praesent et tempus nibh. Nam a efficitur risus. Cras
                            nibh ex, lobortis at aliquam et, varius vitae
                            turpis. Duis consequat velit varius velit mattis,
                            non maximus est elementum. Donec vel tellus cursus
                            enim posuere tempus ac at velit. Maecenas quis eros
                            purus. Proin vulputate ante vitae placerat varius.
                            Maecenas vitae ligula nec tortor tempor lobortis non
                            quis velit. Sed vulputate et erat id laoreet. Etiam
                            erat mi, bibendum non mauris id, aliquet malesuada
                            urna. Nam ex est, vehicula eget consequat in,
                            bibendum ac elit. Fusce porta pellentesque placerat.
                        </p>
                        <p>
                            Suspendisse potenti. Sed pulvinar facilisis libero
                            vitae gravida. Nam quis pellentesque sapien.
                            Pellentesque venenatis vel ipsum tincidunt
                            hendrerit. Vestibulum eleifend erat nec sem aliquam,
                            aliquet lacinia est congue. Fusce a nisl non massa
                            congue vestibulum sed nec nisl. Vestibulum id
                            maximus nibh. Aliquam ante sapien, dapibus ac
                            vestibulum interdum, lacinia vitae mauris. Etiam non
                            posuere orci, non semper risus. Aenean non facilisis
                            urna. Praesent ut dui nibh. Morbi lacus dolor,
                            egestas facilisis pellentesque in, cursus pretium
                            ligula. Praesent rutrum turpis in nisl blandit, a
                            euismod lectus suscipit. Vivamus ut ullamcorper
                            odio, vel vulputate lacus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
