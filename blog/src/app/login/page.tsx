"use client";

import { useState } from "react";
import FormLogin from "../forms/login/formLogin";
import FormForgotPassword from "../forms/forgotPassword/formforgotPassword";
import FormRegister from "../forms/register/formRegister";
import Image from "next/image";

export default function PageLogin() {
    const [showForm, setShowForm] = useState(0);

    const descriptionPage = [
        {
            title: "Bem-vindo de volta!",
            description:
                "Acesse sua conta para acompanhar artigos exclusivos, favoritar e muito mais.",
        },
        {
            title: "Esqueci a senha",
            description:
                "Sem problemas! Informe seu e-mail e enviaremos um link para redefinir sua senha.",
        },
        {
            title: "Registrar",
            description:
                "Crie sua conta para explorar conteúdos incríveis, seguir autores e participar da comunidade.",
        },
    ];

    return (
        <section className="h-screen grid-cols-12 lg:grid">
            <div className="bg-[#090909] hidden col-span-7 lg:flex flex-col justify-center items-center gap-2">
                <Image
                    src="/assets/Logo.png"
                    width={191}
                    height={126}
                    alt="logo"
                />
                <h2 className="text-white">Inovação ao Seu Alcance.</h2>
            </div>
            <div className="col-span-5 w-[303px] mx-auto flex-col lg:justify-center lg:flex ">
                <button className="border rounded-2xl w-20 text-sm flex justify-center items-center gap-2 cursor-pointer hover:bg-[#f1f1f1f1]">
                    <Image 
                        src="/assets/home.svg"
                        width={20}
                        height={30}
                        alt="home"
                    />
                    Home
                </button>
                <div className="mt-[70px] py-2.5 h-[116px] flex flex-col justify-between lg:mt-0">
                    <div className="flex gap-5 items-center">
                        {showForm != 0 ? (
                            <button
                                onClick={() => {
                                    setShowForm(0);
                                }}
                            >
                                <Image
                                    src="/assets/arrow_back.svg"
                                    width={24}
                                    height={24}
                                    alt="arrow"
                                />
                            </button>
                        ) : (
                            <></>
                        )}
                        <h2 className="font-[700] text-2xl">
                            {descriptionPage[showForm].title}
                        </h2>
                    </div>
                    <p className="text-[14px] text-justify">
                        {descriptionPage[showForm].description}
                    </p>
                </div>
                {showForm == 0 ? (
                    <FormLogin showForm={setShowForm} />
                ) : showForm == 1 ? (
                    <FormForgotPassword showForm={setShowForm} />
                ) : (
                    <FormRegister showForm={setShowForm} />
                )}
            </div>
        </section>
    );
}
