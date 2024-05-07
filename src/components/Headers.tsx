interface NameType {
  name: string
  size?: ['3xl' | '4xl' | '6xl' | '7xl' | '8xl']
}

export default function Headers({ name, size = ['4xl'] }: NameType) {
  return (
    <h1
      className={`text-${size} md:text-${size} font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient`}
    >
      {name}
    </h1>
  )
}
