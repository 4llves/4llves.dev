import { Card } from "@/components/card";

export default function Projects() {
  return (
    <div className="md:max-w-5xl w-full flex justify-center mx-auto h-full min-h-screen py-8 px-4 md:px-2 pb-20 gap-16 md:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full flex-col gap-8 h-max row-start-2 items-center md:items-start px-4">
        <h2 className="gap-4 text-center md:text-start text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.sky.100),theme(colors.sky.200),theme(colors.sky.400),theme(colors.sky.500),theme(colors.sky.100))] bg-[length:200%_auto] animate-gradient">
          Projetos e Freelas
        </h2>

        <Card />
      </main>
    </div>
  );
}
