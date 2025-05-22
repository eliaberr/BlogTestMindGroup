import FormForgotPassword from "@/app/forms/forgotPassword/formforgotPassword";
import LoginLayout from "@/app/layouts/login/loginLoyout";

export default function ForgotPassword() {
    return (
        <LoginLayout>
            <div className="mt-[70px] py-2.5 h-[116px] flex flex-col justify-between lg:mt-0">
                <div className="flex gap-5 items-center">
                    <h2 className="font-[700] text-2xl">Esqueci a senha</h2>
                </div>
                <p className="text-[14px] text-justify">
                    Sem problemas! Informe seu e-mail e enviaremos um link para
                    redefinir sua senha.
                </p>
            </div>
            <FormForgotPassword />
        </LoginLayout>
    );
}
