import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">

      <h1 className="text-6xl text-pink-600 mb-6 drop-shadow-lg">
        Welcome
      </h1>

      <Image
        src="/hasnain.jpeg"
        alt="My Photo"
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />

      <h2 className="text-2xl font-semibold mt-4">
        Ali Hasnain
      </h2>

      <p className="text-gray-600 mt-2 text-center">
        Next.js Developer | Portfolio
      </p>

    </main>
  );
}
