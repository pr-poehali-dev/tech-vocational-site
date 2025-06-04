import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const stats = [
  { number: "2500+", label: "Выпускников", icon: "GraduationCap" },
  { number: "25", label: "Лет опыта", icon: "Award" },
  { number: "95%", label: "Трудоустройство", icon: "TrendingUp" },
  { number: "50+", label: "Партнеров", icon: "Handshake" },
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 font-montserrat">
              О нашем техникуме
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы готовим квалифицированных специалистов для современной
              экономики уже более 25 лет. Наш техникум сочетает фундаментальные
              знания с практическими навыками, необходимыми в реальной работе.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Современное оборудование, опытные преподаватели и тесное
              сотрудничество с ведущими предприятиями региона обеспечивают
              высокое качество образования и успешное трудоустройство наших
              выпускников.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-4 border-0 bg-gradient-to-br from-blue-50 to-purple-50"
                >
                  <CardContent className="p-0">
                    <Icon
                      name={stat.icon as any}
                      size={32}
                      className="mx-auto mb-2 text-blue-600"
                    />
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="Студенты техникума"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Аккредитация
                  </div>
                  <div className="text-sm text-gray-600">Гос. лицензия</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
