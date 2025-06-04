import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const specialties = [
  {
    title: "Информационные технологии",
    description:
      "Программирование, веб-разработка, системное администрирование",
    icon: "Code",
    duration: "3 года 10 месяцев",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Машиностроение",
    description: "Проектирование и производство машин и механизмов",
    icon: "Settings",
    duration: "3 года 10 месяцев",
    color: "from-gray-600 to-gray-400",
  },
  {
    title: "Электротехника",
    description: "Электрические системы, автоматика и управление",
    icon: "Zap",
    duration: "3 года 10 месяцев",
    color: "from-yellow-500 to-orange-400",
  },
  {
    title: "Строительство",
    description: "Промышленное и гражданское строительство",
    icon: "Building",
    duration: "3 года 10 месяцев",
    color: "from-green-500 to-emerald-400",
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Наши Специальности
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите направление, которое откроет двери в успешное будущее
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${specialty.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${specialty.color} flex items-center justify-center`}
                >
                  <Icon
                    name={specialty.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {specialty.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {specialty.description}
                </CardDescription>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Icon name="Clock" size={16} className="mr-1" />
                  {specialty.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
