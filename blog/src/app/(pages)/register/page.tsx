import FormRegister from "@/app/forms/register/formRegister";
import LoginLayout from "@/app/layouts/login/loginLoyout";

export default function Register() {
    return (
        <LoginLayout>
            <div className="mt-[70px] py-2.5 h-[116px] flex flex-col justify-between lg:mt-0">
                <div className="flex gap-5 items-center">
                    <h2 className="font-[700] text-2xl">Registrar</h2>
                </div>
                <p className="text-[14px] text-justify">
                    Crie sua conta para explorar conteúdos incríveis, seguir
                    autores e participar da comunidade.
                </p>
            </div>
            <FormRegister />
        </LoginLayout>
    );
}
