"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import NavBar from "@/app/components/navBar/navBar";

export default function NewArticles() {
    const [urlImg, setUrlImg] = useState<string | null>(null);
    const [fileName, setFileName] = useState("");
    const [titleArticles, setTitleArticles] = useState("");
    const [textArticles, setTextArticles] = useState("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setUrlImg(url);
            setFileName(file.name);
        }
    };
    const addImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setUrlImg(url);
            setFileName(file.name);
        }
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    const removeImage = () => {
        setUrlImg(null);
        setFileName("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };
    const removeAll = () => {
        setTitleArticles("");
        removeImage();
        setTextArticles("");
    };
    const enviarArtigoTeste = () => {
        console.log(`titulo: ${titleArticles}`);
        console.log(`urlImg: ${urlImg}`);
        console.log(`texto: ${textArticles}`);
    };

    return (
        <section className="max-w-[1140px] mx-auto">
            <NavBar />
            <form onSubmit={enviarArtigoTeste} className="mt-10 px-3 lg:px-10">
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
                    <div className="col-span-12">
                        <label className="text-sm">Título</label>
                        <textarea
                            name="title"
                            className="w-full h-32 p-2 border border-gray-300 rounded resize-none"
                            placeholder="Adicione um título"
                            onChange={(e) => setTitleArticles(e.target.value)}
                            value={titleArticles}
                            required
                        ></textarea>
                    </div>
                    <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
                        <label className="text-sm">Inserir imagem</label>
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
                            {urlImg && (
                                <button
                                    onClick={removeImage}
                                    className="block w-32 h-12 font-bold text-xs text-white bg-red-600 rounded-xl cursor-pointe"
                                >
                                    REMOVER IMAGEM
                                </button>
                            )}
                        </div>
                    </div>
                    <div
                        onDrop={addImageDrop}
                        onDragOver={handleDragOver}
                        className="h-[247px] bg-gray-200 rounded col-span-12 lg:col-span-5 lg:col-start-9 relative overflow-hidden flex items-center justify-center"
                    >
                        {urlImg ? (
                            <Image
                                src={urlImg}
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
                    <div className="col-span-12">
                        <label className="text-sm">Texto</label>
                        <textarea
                            name="title"
                            className="w-full h-96 p-2 border border-gray-300 rounded resize-none"
                            placeholder="Escreva seu artigo"
                            onChange={(e) => setTextArticles(e.target.value)}
                            value={textArticles}
                            required
                        ></textarea>
                    </div>
                </div>
            </form>
        </section>
    );
}
