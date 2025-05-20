"use client";
import Button from "@/app/components/UI/button";
import Input from "@/app/components/UI/input";
import { AllFormProps } from "@/app/intercafe";
import { useState } from "react";

export default function FormForgotPassword({ showForm }: AllFormProps) {
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [confirmPasswordUser, setconfirmPasswordUser] = useState("");

  const test = () => {
    const emailUserTest = "email@email.com";

    if (emailUser == emailUserTest && passwordUser == confirmPasswordUser) {
      alert("deu certo");
    } else {
      alert("deu erro");
    }
  };

  return (
    <form
      onSubmit={test}
      className="flex flex-col justify-around h-[302px] mt-[70px]"
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
      <Button type="submit">Alterar</Button>
      <a
        onClick={() => showForm?.(2)}
        className="text-[10px] flex justify-center"
      >
        Novo usuário? Clique aqui
      </a>
    </form>
  );
}
