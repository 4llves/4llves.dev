'use client'
import { Lordicon } from '@/components/Lordicon'
import { Player } from '@lordicon/react'
import { useEffect, useRef } from 'react'

import Image from 'next/image'
import avatar from '../../assets/avatar.json'

import Headers from '@/components/Headers'
import Alvesimg from '../../assets/4llvescontrastr.jpg'

export default function About() {
  const playerRef = useRef<Player>(null)

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  return (
    <div className="px-5">
      <div className="flex gap-6 items-center mb-10">
        <Headers name="Sobre mim" size={['7xl']} />
        <Lordicon icon={avatar} size={38} />
      </div>
      {/* <header className="flex gap-6 items-center mb-10">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
          Sobre mim
        </h1>

        <Lordicon icon={avatar} />
      </header> */}

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
