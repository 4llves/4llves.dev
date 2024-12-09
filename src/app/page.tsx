"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full md:max-w-5xl w-full flex items-center md:items-start md:justify-start justify-center mx-auto px-4 md:pt-20  font-[family-name:var(--font-geist-sans)]">
      <main className="h-[calc(100vh-88px)] md:h-[calc(100vh-192.34px)] flex flex-col items-center pt-60 md:pt-0 md:justify-center mx-auto md:items-start gap-6">
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
        <div className="absolute bottom-0 md:bottom-5 left-0 md:left-5 px-4">
          <Image
            className="opacity-50 w-48 xl:w-8/12"
            src="/christmas-one.svg"
            alt="construction"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute top-[88px] md:top-[113px] right-0 px-4">
          <Image
            className="opacity-50 w-48 xl:w-9/12"
            src="/snow-game.svg"
            alt="construction"
            width={300}
            height={300}
          />
        </div>
      </main>
    </div>
  );
}
