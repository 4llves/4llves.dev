"use client";
export default function Home() {
  return (
    <div className="h-full  w-full flex items-center md:items-start md:justify-start justify-center mx-auto px-4 md:pt-20  font-[family-name:var(--font-geist-sans)] bg-snow-globe-mobile md:bg-snow-globe">
      <main className="h-[calc(100vh-88px)] md:h-[calc(100vh-192.34px)] md:max-w-5xl flex flex-col items-center pt-60 md:pt-0 md:justify-center mx-auto md:items-start gap-6">
        <div className="relative">
          <h1 className="gap-4 text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.sky.100),theme(colors.sky.200),theme(colors.sky.400),theme(colors.sky.500),theme(colors.sky.100))] bg-[length:200%_auto] animate-gradient">
            Alves Jhonata
          </h1>
          <div>
            <strong className="text-sm md:text-2xl text-primary">
              Desenvolvedor RPA | Front-end
            </strong>
            <p className="text-xs md:text-lg text-foreground">
              Desvendando problemas e criando soluções através da tecnologia
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
