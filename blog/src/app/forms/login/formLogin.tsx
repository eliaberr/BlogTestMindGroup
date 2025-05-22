"use client"

import Button from "@/app/components/UI/button";
import Input from "@/app/components/UI/input";
import { AllFormProps } from "@/app/intercafe";
import Link from "next/link";
import { useState } from "react";

export default function FormLogin({ showForm }: AllFormProps) {
    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const test = () => {
        const emailUserTest = "email@email.com";
        const senhaUserTest = "1234";

        if (emailUser == emailUserTest && passwordUser == senhaUserTest) {
            alert("deu certo");
        }
    };
    return (
        <form
            onSubmit={test}
            className="flex flex-col justify-around h-[250px] mt-[70px]"
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
                placeholder="Senha"
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPasswordUser(e.target.value)
                }
                required
            />
            <Link
                href="/forgotPassword"
                onClick={() => showForm?.(1)}
                className="text-[10px] flex justify-end cursor-pointer hover:underline"
            >
                Esqueceu a Senha?
            </Link>
            <Button type="submit">Login</Button>
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
