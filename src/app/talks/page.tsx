import Image from "next/image";

export default function Projects() {
  return (
    <div className="h-full md:max-w-5xl w-full flex items-center md:items-start md:justify-start justify-center mx-auto pt-4 md:pt-20  font-[family-name:var(--font-geist-sans)]">
      <main className="h-[calc(100vh-104px)] md:h-[calc(100vh-192.34px)] flex flex-col items-center md:items-start gap-6 px-4">
        <h2 className="gap-4 text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.sky.100),theme(colors.sky.200),theme(colors.sky.400),theme(colors.sky.500),theme(colors.sky.100))] bg-[length:200%_auto] animate-gradient">
          Em construção
        </h2>
        <div className="flex items-center justify-center mx-auto w-full h-min">
          <Image
            className="w-[80%]"
            src="/construction.svg"
            alt="construction"
            width={500}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}
