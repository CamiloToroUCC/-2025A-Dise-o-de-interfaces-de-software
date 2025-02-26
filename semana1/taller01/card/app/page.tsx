import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <section className="bg-white p-6 rounded-lg shadow-lg w-80 text-center border-2 border-red-400 ">
      <Image src="/imagen.jpg" alt="Red Heaven Banner" width={500} height={380} layout="responsive"/>
        <h1 className="text-xl font-bold text-gray-900 text-left">Red Heaven</h1>
        <p className="text-gray-600 text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
          Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <span className="bg-orange-600 px-3 py-1 rounded-full text-left">#tailwind</span>
          <span className="bg-orange-600  px-3 py-1 rounded-full text-left">#frontendeverything</span>
        </div>
      </section>
    </main>
  );
}
