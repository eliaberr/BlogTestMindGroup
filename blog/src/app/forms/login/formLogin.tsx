"use client";

import Button from "@/app/components/UI/button";
import Input from "@/app/components/UI/input";
import { AllFormProps } from "@/app/intercafe";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormLogin({ showForm }: AllFormProps) {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [error, setError] = useState("");
    const [loginOk, setLoginOk] = useState(false)
    const router = useRouter();

    async function Test(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:3006/users/login/${emailUser}`
            );
            const data = await response.json();
            if (data.length > 0 && data[0].password === passwordUser) {
                setLoginOk(true)
                setTimeout(() => router.push("/"), 2000);
            } else {
                setError("Senha incorreta ou usuário não encontrado");
                setPasswordUser("")
                setEmailUser("")
            }
        } catch (error) {
            console.error("Erro no fetch:", error);
            setError("Erro ao buscar usuário");
        }
    }

    return (
        <form
            onSubmit={Test}
            className="flex flex-col justify-around h-[250px] mt-[70px]"
        >
            <Input
                placeholder="Email"
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmailUser(e.target.value)
                }
                required
                value={emailUser}
            />
            <Input
                placeholder="Senha"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPasswordUser(e.target.value)
                }
                required
                value={passwordUser}
            />
            <p className="text-xs text-center">{error}</p>
            <Link
                href="/forgotPassword"
                onClick={() => showForm?.(1)}
                className="text-[10px] flex justify-end cursor-pointer hover:underline"
            >
                Esqueceu a Senha?
            </Link>
            <Button type="submit">
                {
                    loginOk ? (<p className="text-green-500 font-bold">Usuário Encontrado</p>):(<>Login</>)
                }
            </Button>
            <Link
                href="/register"
                onClick={() => showForm?.(2)}
                className="text-[10px] flex justify-center cursor-pointer hover:underline"
            >
                Novo usuário? Clique aqui
            </Link>
        </form>
    );
}
