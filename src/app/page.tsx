import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <article className="max-w-md text-center space-y-6">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">VoxGPT</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam quo,
          numquam doloribus quae incidunt libero nulla officiis sequi expedita
          animi placeat ut perferendis nobis. Voluptates eveniet porro assumenda
          earuma.
        </p>
        <Link href={`/chat`} className="btn btn-primary">
          COMEÇAR
        </Link>
      </article>
    </section>
  );
}
