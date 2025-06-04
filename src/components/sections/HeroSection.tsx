import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-purple-600 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Технический Колледж
            <span className="block text-yellow-300">Будущего</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Современное образование для успешной карьеры в IT, инженерии и
            технических специальностях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
            >
              <Icon name="UserPlus" className="mr-2" />
              Подать документы
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8"
            >
              <Icon name="BookOpen" className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
