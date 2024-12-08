import { Link2 } from "lucide-react";
import Link from "next/link";

const links = [
  {
    link: "https://psicologamonique.com/",
    bgImage: "psico",
  },
  {
    link: "https://gporto.vercel.app/",
    bgImage: "gporto",
  },
];

export default function Projects() {
  return (
    <div className="h-full md:max-w-5xl w-full flex items-center md:items-start md:justify-start justify-center mx-auto pt-4 md:pt-20  font-[family-name:var(--font-geist-sans)]">
      <main className="h-[calc(100vh-104px)] md:h-[calc(100vh-192.34px)] flex flex-col items-center md:items-start gap-6">
        <h2 className="gap-4 text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.sky.100),theme(colors.sky.200),theme(colors.sky.400),theme(colors.sky.500),theme(colors.sky.100))] bg-[length:200%_auto] animate-gradient">
          Projetos e Freelas
        </h2>

        <div className="mx-auto w-full md:max-w-5xl gap-8 md:gap-20 items-center justify-between flex flex-col md:grid md:grid-cols-2">
          {links.map((card, i) => {
            return (
              <div
                key={i}
                className={`flex items-center justify-center h-56 w-80 bg-${card.bgImage} bg-cover bg-no-repeat bg-center rounded-xl border border-primary border-dashed shadow-md`}
              >
                <Link
                  className="text-transparent hover:text-primary transition-shadow duration-300 flex items-center justify-center w-full h-full gap-2 rounded-xl hover:bg-primary/20"
                  href={card.link}
                  target="_blank"
                >
                  <Link2 />
                  Acessar
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
