import Hero from '../../components/Hero.tsx';
import Navbar from '../../components/Navbar.tsx';
import ServiceCard from '../../components/ServiceCard.tsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          title="Генерация видео"
          description="Создавай уникальные AI-видео за секунды."
          link="/services/video"
        />
        <ServiceCard
          title="Генерация голоса"
          description="Синтезируй реалистичный голос для проектов."
          link="/services/voice"
        />
        <ServiceCard
          title="Генерация изображений"
          description="Создавай картинки любой тематики."
          link="/services/image"
        />
        <ServiceCard
          title="Генерация текста"
          description="Пиши статьи, описания и тексты с AI."
          link="/services/text"
        />
      </section>
    </div>
  );
}
