"use client";
import Button from "@/app/components/UI/button";
import Input from "@/app/components/UI/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormRegister() {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [confirmPasswordUser, setconfirmPasswordUser] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (passwordUser !== confirmPasswordUser) {
            setError("As senhas não coincidem");
            setSuccess("");
            return;
        }
        try {
            const response = await fetch("http://localhost:3006/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailUser,
                    password: passwordUser,
                }),
            });
            if (!response.ok) {
                throw new Error("Erro ao registrar o usuário");
            }
            setSuccess("Usuário registrado com sucesso!");
            setError("");
            setTimeout(() => router.push("/login"), 2000);
        } catch (error) {
            console.error(error);
            setError("Erro inesperado");
            setSuccess("");
        }
    }

    return (
        <form
            onSubmit={handleRegister}
            className="flex flex-col justify-around h-[400px] mt-[70px]"
        >
            <Input
                placeholder="Email"
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmailUser(e.target.value)
                }
                required
            />
            <Input
                placeholder="Nova senha"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPasswordUser(e.target.value)
                }
                required
            />
            <Input
                placeholder="Confirmar nova senha"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setconfirmPasswordUser(e.target.value)
                }
                required
            />
            {error && (
                <p className="text-red-600 text-center text-sm">{error}</p>
            )}
            {success && (
                <p className="text-green-600 text-center text-sm">{success}</p>
            )}
            <Button type="submit">Criar conta</Button>
            <div className="flex gap-3 items-center">
                <input type="checkbox" required />
                <p className="text-xs pe-5 flex justify-center ">
                    Li e concordo com os Termos de Uso e a Política de
                    Privacidade.
                </p>
            </div>
            <Link
                href="/login"
                className="text-[10px] flex justify-center cursor-pointer hover:underline"
            >
                Já tem cadastro? Clique aqui
            </Link>
        </form>
    );
}
