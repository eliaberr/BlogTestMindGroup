"use client";
import Button from "@/app/components/UI/button";
import Input from "@/app/components/UI/input";
import Link from "next/link";
import { useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};

export default function FormForgotPassword() {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [confirmPasswordUser, setConfirmPasswordUser] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState<User[]>([]);

    const buscarUsuario = async () => {
        setMessage("");
        setUser([]);

        if (!emailUser) {
            setMessage("Digite um e-mail.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:3006/users/login/${emailUser}`
            );
            const data = await response.json();

            console.log("Resposta da API:", data);

            if (!data || !Array.isArray(data) || data.length === 0) {
                setMessage("Usuário não encontrado.");
                return;
            }

            setUser(data);
            setMessage("Usuário encontrado. Agora defina uma nova senha.");
        } catch (error: any) {
            console.error("Erro ao buscar usuário:", error);
            setMessage("Erro ao buscar usuário.");
        }
    };

    const atualizarSenha = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (user.length === 0) {
            setMessage("Você precisa buscar o usuário primeiro.");
            return;
        }

        if (passwordUser !== confirmPasswordUser) {
            setMessage("As senhas não coincidem.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:3006/users/${user[0].id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ password: passwordUser }),
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao atualizar a senha.");
            }

            setMessage("Senha atualizada com sucesso!");
        } catch (error: any) {
            console.error("Erro ao atualizar senha:", error);
            setMessage("Erro ao atualizar senha.");
        }
    };

    return (
        <form
            onSubmit={atualizarSenha}
            className="flex flex-col justify-around h-auto gap-4 mt-[50px]"
        >
            <Input
                placeholder="Email"
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmailUser(e.target.value)
                }
                required
            />

            {user.length === 0 && (
                <Button type="button" onClick={buscarUsuario}>
                    Buscar usuário
                </Button>
            )}

            {user.length > 0 && (
                <>
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
                            setConfirmPasswordUser(e.target.value)
                        }
                        required
                    />
                    <Button type="submit">Atualizar senha</Button>
                </>
            )}

            <Link
                href="/register"
                className="text-[10px] flex justify-center cursor-pointer hover:underline"
            >
                Novo usuário? Clique aqui
            </Link>

            {message && (
                <p className="text-center text-sm mt-2 text-gray-700">
                    {message}
                </p>
            )}
        </form>
    );
}
