import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 text-center bg-gray-50">
      <h1 className="mb-4 text-4xl font-bold">Создавай AI-контент за секунды</h1>
      <p className="mb-6 text-gray-600">Видео, изображения, голос и текст — всё в одном месте.</p>
      <Link
        href="/services"
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Начать сейчас
      </Link>
    </section>
  );
}
