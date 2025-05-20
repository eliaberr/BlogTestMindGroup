<section className="w-[303px] mx-auto">
      <div className="mt-[70px] py-2.5 h-[116px] flex flex-col justify-between">
        <h2 className="font-[700] text-2xl">Bem-vindo de volta!</h2>
        <p className="text-[14px] ">Acesse sua conta para acompanhar artigos exclusivos, favoritar e muito mais.</p>
      </div>
      <form onSubmit={test} className="flex flex-col justify-around h-[250px] mt-[70px]">
        <Input
            placeholder="Email"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailUser(e.target.value)}
            required
        />
        <Input
            placeholder="Senha"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordUser(e.target.value)}
            required
        />
        <span className="text-[10px] flex justify-end">
            Esqueceu a Senha?
        </span>
        <Button type="submit">
            Login
        </Button>
        <span className="text-[10px] flex justify-center">
            Novo usuário? Clique aqui
        </span>
      </form>
    </section>