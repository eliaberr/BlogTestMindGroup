import Button from "@/app/components/UI/button";
import Input from "@/app/components/UI/input";
import { AllFormProps } from "@/app/intercafe";
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
            <a
                onClick={() => showForm?.(1)}
                className="text-[10px] flex justify-end"
            >
                Esqueceu a Senha?
            </a>
            <Button type="submit">Login</Button>
            <a
                onClick={() => showForm?.(2)}
                className="text-[10px] flex justify-center"
            >
                Novo usuário? Clique aqui
            </a>
        </form>
    );
}
