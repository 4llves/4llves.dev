"use client";
import { ClipPathImg } from "@/components/clip-path-img";
import { Separator } from "@/components/ui/separator";
import {
  AppWindowIcon,
  Baby,
  Guitar,
  MapPin,
  NotebookText,
} from "lucide-react";

type CareerProps = {
  office: string;
  enterprise: string;
  city: string;
  start: string;
  end: string;
};

const career: CareerProps[] = [
  {
    office: "CEO - 4bits Norte Tecnologia",
    enterprise: "4bits Norte Tecnologia",
    city: "Goianésia do Pará - PA",
    start: "Set 2025",
    end: "Present",
  },
  {
    office: "Consultor de Licitação",
    enterprise: "Autonomo",
    city: "Goianésia do Pará - PA",
    start: "Jan 2025",
    end: "Present",
  },
  {
    office: "Dev Frontend",
    enterprise: "Autonomo",
    city: "Goianésia do Pará - PA",
    start: "Jul 2024",
    end: "Present",
  },
  {
    office: "Dev RPA",
    enterprise: "Autonomo",
    city: "Goianésia do Pará - PA",
    start: "Apr 2019",
    end: "Present",
  },
  {
    office: "Assistente Administrativo",
    enterprise: "Prefeitura Municipal de Goianésia do Pará",
    city: "Goianésia do Pará - PA",
    start: "Feb 2019",
    end: "Dec 2024",
  },
  {
    office: "Assistente Administrativo",
    enterprise: "CERTEC",
    city: "Goianésia do Pará - PA",
    start: "May 2017",
    end: "May 2018",
  },
  {
    office: "Manutenção de Computadores",
    enterprise: "Autonomo",
    city: "Goianésia do Pará - PA",
    start: "Jan 2010",
    end: "Present",
  },
  {
    office: "Instrutor de Informática",
    enterprise: "Hábil Informática",
    city: "Goianésia do Pará - PA",
    start: "Oct 2009",
    end: "Dec 2010",
  },
];

export default function About() {
  return (
    <div className="md:max-w-5xl w-full flex items-center justify-center mx-auto h-full min-h-screen py-8 px-4 md:px-2 pb-20 gap-16 md:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 h-max row-start-2 items-center md:items-start px-4">
        <h2 className="gap-4 text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.sky.100),theme(colors.sky.200),theme(colors.sky.400),theme(colors.sky.500),theme(colors.sky.100))] bg-[length:200%_auto] animate-gradient">
          Sobre
        </h2>
        <div className="flex flex-col gap-4 md:flex-row items-center">
          <div>
            <ClipPathImg img="4llves.jpg" alt="Alves image" svg="insignia" />
          </div>

          <div className="flex flex-col gap-4 md:h-full md:w-full md:pt-9">
            <div className="flex flex-col gap-4 md:h-full md:w-full">
              <h3 className="text-2xl md:text-3xl text-primary text-center font-bold">
                Olá, Sou Alves Jhonata 👋
              </h3>
              <p className="text-center text-base md:text-xl md:text-start">
                Com mais de uma década na área de tecnologia, transformei minha
                paixão por inovação em soluções tangíveis. Como especialista em
                Front-end e RPA, crio interfaces intuitivas e automatizo
                processos complexos, otimizando operações e elevando a
                experiência do usuário. Minhas habilidades em React, Next.js,
                Tailwind CSS e Python me permitem entregar projetos de alta
                qualidade e escalabilidade.
              </p>
            </div>

            <Separator color="primary" />

            <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-evenly items-center">
              <div className="flex md:text-lg col-span-2 gap-2 justify-center items-center p-2 border border-primary rounded-lg w-full">
                <MapPin size={24} /> Goianésia do Pará
              </div>

              <div className="flex md:text-lg col-span-1 gap-2 justify-center items-center p-2 border border-primary rounded-lg w-full">
                <Baby size={24} /> 29 Anos
              </div>

              <div className="flex md:text-lg col-span-1 gap-2 justify-center items-center p-2 border border-primary rounded-lg w-full">
                <Guitar size={24} /> Músico
              </div>

              <div className="flex md:text-lg col-span-1 gap-2 justify-center items-center p-2 border border-primary rounded-lg w-full">
                <NotebookText size={24} /> Leitor
              </div>

              <div className="flex md:text-lg col-span-1 gap-2 justify-center items-center p-2 border border-primary rounded-lg w-full">
                <AppWindowIcon size={24} /> Linux
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl md:text-3xl text-primary text-start">
            Carreira
          </h3>

          <div>
            {career.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-1 flex-col w-full h-full border-b-1 border-dashed border-primary py-4"
                >
                  <span className="font-bold md:text-xl">{item.office}</span>
                  <div className="flex text-lg">
                    <span className="underline text-muted-foreground">
                      {item.enterprise}
                    </span>
                    <p>&ensp;•&ensp;</p>
                    <span>{item.city}</span>
                  </div>
                  <div className="flex text-lg">
                    <span>{item.start}</span>
                    <p>&ensp;à&ensp;</p>
                    <span>{item.end}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
