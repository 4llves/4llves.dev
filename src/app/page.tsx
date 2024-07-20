import { Quantico } from 'next/font/google'
// import Image from 'next/image'

const quantico = Quantico({
  subsets: ['latin'],
  weight: '700',
})

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-10 px-10">
      <section className="flex flex-col gap-y-6">
        <h1
          className={`${quantico.className} text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.red.600),theme(colors.red.600),theme(colors.rose.600),theme(colors.zinc.600),theme(colors.slate.100),theme(colors.red.600),theme(colors.rose.600))] bg-[length:200%_auto] animate-gradient`}
        >
          Alves Jhonata
        </h1>
        <div>
          <strong className="text-xl">Desenvolvedor RPA | Front-end</strong>
          <p className="text-lg">
            Desvendando problemas e criando soluções através da tecnologia
          </p>
        </div>

        <p className={`${quantico.className} text- font-bold`}>
          Pressione{' '}
          <button className="bg-slate-100 text-blue-700 px-1 rounded-sm">
            Ctrl + K
          </button>{' '}
          para Iniciar
        </p>
      </section>
      {/* <section className="">
        <Image
          className="shadow-person rounded-lg"
          src="https://github.com/4llves.png"
          alt="my photo"
          width={250}
          height={250}
        />
      </section> */}
    </div>
  )
}
