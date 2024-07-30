'use client'

import Image from 'next/image'

import Headers from '@/components/Headers'
import Alvesimg from '../../assets/4llvescontrastr.jpg'

export default function About() {
  return (
    <div className="px-5">
      <div className="flex gap-6 items-center mb-10">
        <Headers name="Sobre mim" size={['7xl']} />
      </div>

      <div className="flex gap-20">
        <section className="">
          <Image
            className="shadow-person rounded-lg"
            src={Alvesimg}
            alt="imagem de Alves"
            width={360}
          />
        </section>

        <section className="max-w-xl">
          <p className="text-justify text-2xl leading-relaxed">
            <strong>Faaala galerinhaaaaaa...</strong> Tudo bem por ai? 😁 <br />
            <br />
            Sou <strong>Jhonata Alves</strong> um jovem do interior do Pará que
            se interessou por tecnologia bem novo. Comecei na área como Tecnico
            em Manutenção de Computadores em 2010. Agora em 2024, sou criador de
            robôs. Tenho 27 anos, nasci, cresci e moro em Goianésia do Pará -
            PA, Brasil. Gosto de tocar violão, cajon e ler mangás.
          </p>
        </section>
      </div>
    </div>
  )
}
