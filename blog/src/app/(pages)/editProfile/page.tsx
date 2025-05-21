"use client";

import NavBar from "@/app/components/navBar/navBar";
import Image from "next/image";
import { useRef, useState } from "react";

export default function EditProfile() {
    const [urlAvatar, setUrlAvatar] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setUrlAvatar(url);
            setFileName(file.name);
        }
    };
    const addImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setUrlAvatar(url);
            setFileName(file.name);
        }
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    const removeImage = () => {
        setUrlAvatar(null);
        setFileName("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };
    const removeAll = () => {
        removeImage()
        setUserName("");
        setUserSurname("");
    };
    const editarPerfilTest = () => {
        console.log(`texto: ${urlAvatar}`);
        console.log(`titulo: ${userName}`);
        console.log(`urlImg: ${userSurname}`);
    };
    return (
        <section className="max-w-[1140px] mx-auto">
            <NavBar />
            <form onSubmit={editarPerfilTest} className="mt-10 px-3 lg:px-10">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium lg:text-2xl lg:font-semibold">
                        Novo Artigo
                    </h2>
                    <div className="text-white flex gap-2">
                        <button
                            onClick={removeAll}
                            className="bg-[#FF3B30] w-[100px] h-10 rounded-lg cursor-pointer hover:bg-[#cc1a11]"
                        >
                            Limpar Tudo
                        </button>
                        <button
                            type="submit"
                            className="bg-[#18181B] w-[90px] h-10 rounded-lg cursor-pointer hover:bg-[#363636]"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-12 gap-y-3">
                    <div className="col-span-12 lg:col-span-6 grid gap-4">
                        <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
                            <label className="text-sm">Inserir Avatar</label>
                            <input
                                type="text"
                                className="border border-gray-300 w-full h-12 p-2 rounded"
                                placeholder="Adicione uma imagem"
                                value={fileName}
                                readOnly
                            />
                            <div className="flex justify-center gap-5 lg:justify-start">
                                <div className="relative w-32">
                                    <input
                                        type="file"
                                        id="file-upload"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        required
                                    />
                                    <label
                                        htmlFor="file-upload"
                                        className="block w-full h-12 font-bold text-xs text-white bg-[#007AFF] text-center leading-[3rem] rounded-xl cursor-pointer"
                                    >
                                        SELECIONAR
                                    </label>
                                </div>
                                {urlAvatar && (
                                    <button
                                        onClick={removeImage}
                                        className="block w-32 h-12 font-bold text-xs text-white bg-red-600 rounded-xl cursor-pointe"
                                    >
                                        REMOVER IMAGEM
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <label className="text-sm">Nome</label>
                            <input
                                name="name"
                                className="w-full h-12 p-2 border border-gray-300 rounded"
                                placeholder="Digite seu nome"
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                                required
                            ></input>
                        </div>
                        <div className="col-span-12 lg:col-span-5">
                            <label className="text-sm">Sobrenome</label>
                            <input
                                name="surname"
                                className="w-full h-12 p-2 border border-gray-300 rounded"
                                placeholder="Digite seu sobrenome"
                                onChange={(e) => setUserSurname(e.target.value)}
                                value={userSurname}
                                required
                            ></input>
                        </div>
                    </div>
                    <div
                        onDrop={addImageDrop}
                        onDragOver={handleDragOver}
                        className="h-[247px] bg-gray-200 rounded col-span-12 lg:h-full lg:col-span-5 lg:col-start-9 relative overflow-hidden flex items-center justify-center"
                    >
                        {urlAvatar ? (
                            <Image
                                src={urlAvatar}
                                alt="Prévia da imagem"
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <>
                                <span className="text-gray-500 hidden lg:grid">
                                    Arraste e solte uma imagem aqui
                                </span>
                                <span className="text-gray-500 grid lg:hidden">
                                    Nenhuma imagem selecionada
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </section>
    );
}
