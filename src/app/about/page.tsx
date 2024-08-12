'use client'

import Image from 'next/image'

import Alvesimg from '../../assets/4llvescontrastr.jpg'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center px-0 md:px-5">
      <div className="flex items-center md:items-start justify-center md:justify-start">
        <p
          className={
            'text-2xl py-10 md:py-0 font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient'
          }
          // className={
          //   'text-2xl md:text-sm font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient'
          // }
        >
          Sobre mim
        </p>
      </div>

      <main className="">
        <section className="w-60 h-60">
          <Image
            className="shadow-person rounded-sm"
            src={Alvesimg}
            alt="imagem de Alves"
            width={360}
          />
        </section>

        <section className="max-w-xl">
          <p className="text-justify text-sm md:text-2xl leading-relaxed">
            <strong>Faaala galerinhaaaaaa...</strong> Tudo bem por ai? 😁 <br />
            <br />
            Sou <strong>Jhonata Alves</strong> um jovem do interior do Pará que
            se interessou por tecnologia bem novo. Comecei na área como Tecnico
            em Manutenção de Computadores em 2010. Agora em 2024, sou criador de
            robôs. Tenho 27 anos, nasci, cresci e moro em Goianésia do Pará -
            PA, Brasil. Gosto de tocar violão, cajon e ler mangás.
          </p>
        </section>
      </main>
    </div>
  )
}
