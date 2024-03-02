import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function Home() {
  return (
    <WavyBackground>
      <section className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-400 via-blue-600 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            VoxGPT
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            VoxGPT: Seu companheiro, guia turístico virtual e
            inesquecível. <br />
            Planeje sua próxima aventura com a ajuda da inteligência artificial!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/chat`}
              className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-blue-600 rounded-md text-white font-light transition duration-200 ease-linear"
            >
              Começar
            </Link>
          </div>
        </div>
      </section>
    </WavyBackground>
  );
}
