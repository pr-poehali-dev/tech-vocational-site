import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Поступай к нам!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Приемная комиссия работает с понедельника по пятницу
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={28} />
              </div>
              <CardTitle>Адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300">
                ул. Техническая, 15
                <br />
                г. Новосибирск, 630000
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={28} />
              </div>
              <CardTitle>Телефон</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300">
                +7 (383) 123-45-67
                <br />
                +7 (383) 123-45-68
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={28} />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300">
                info@techcollege.ru
                <br />
                admission@techcollege.ru
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 text-lg"
          >
            <Icon name="FileText" className="mr-2" />
            Скачать документы для поступления
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
