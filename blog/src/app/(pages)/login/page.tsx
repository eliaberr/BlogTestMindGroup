import FormLogin from "@/app/forms/login/formLogin";
import LoginLayout from "@/app/layouts/login/loginLoyout";

export default function Login() {
    return (
        <LoginLayout>
            <div className="mt-[70px] py-2.5 h-[116px] flex flex-col justify-between lg:mt-0">
                <div className="flex gap-5 items-center">
                    <h2 className="font-[700] text-2xl">Bem-vindo de volta!</h2>
                </div>
                <p className="text-[14px] text-justify">
                    Acesse sua conta para acompanhar artigos exclusivos,
                    favoritar e muito mais.
                </p>
            </div>
            <FormLogin/>
        </LoginLayout>
    );
}
