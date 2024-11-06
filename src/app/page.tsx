export default function Home() {
  return (
    <div className="flex items-center justify-center gap-10 px-10">
      <section className="flex flex-col gap-y-6">
        <h1 className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.orange.600),theme(colors.orange.600),theme(colors.orange.600),theme(colors.zinc.600),theme(colors.slate.100),theme(colors.orange.600),theme(colors.orange.600))] bg-[length:200%_auto] animate-gradient">
          Alves Jhonata
        </h1>
        <div>
          <strong className="text-sm md:text-2xl text-zinc-200">
            Desenvolvedor RPA | Front-end
          </strong>
          <p className="text-xs md:text-lg text-zinc-600">
            Desvendando problemas e criando soluções através da tecnologia
          </p>
        </div>
      </section>
    </div>
  )
}
