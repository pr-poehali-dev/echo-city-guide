import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все маршруты", icon: "Map" },
    { id: "detective", name: "Детективы", icon: "Search" },
    { id: "mystical", name: "Мистика", icon: "Ghost" },
    { id: "romantic", name: "Романтика", icon: "Heart" },
    { id: "historical", name: "История", icon: "Landmark" },
  ];

  const routes = [
    {
      id: 1,
      title: "Тайны Петроградской стороны",
      category: "detective",
      duration: "2 часа",
      distance: "3.5 км",
      price: "490₽",
      description: "Раскройте загадку исчезнувшего купца в дворах-колодцах",
      image: "https://cdn.poehali.dev/projects/a7fe407b-12e2-45cc-ae24-a1d41072b3dd/files/09a53bb2-c72c-4187-9e67-cb5a617383a1.jpg",
    },
    {
      id: 2,
      title: "Призраки Октябрьской набережной",
      category: "mystical",
      duration: "1.5 часа",
      distance: "2.8 км",
      price: "390₽",
      description: "Следуйте за шёпотом старого города через туманные улицы",
      image: "https://cdn.poehali.dev/projects/a7fe407b-12e2-45cc-ae24-a1d41072b3dd/files/dcf92603-1a70-40ab-9e5d-ce486333a713.jpg",
    },
    {
      id: 3,
      title: "Любовь сквозь века",
      category: "romantic",
      duration: "2.5 часа",
      distance: "4.2 км",
      price: "590₽",
      description: "Романтическая история на фоне архитектурных шедевров",
      image: "https://cdn.poehali.dev/projects/a7fe407b-12e2-45cc-ae24-a1d41072b3dd/files/9db9296e-3183-411e-9fee-415a300774a5.jpg",
    },
  ];

  const features = [
    {
      icon: "Headphones",
      title: "Иммерсивный звук",
      description: "Профессиональная озвучка актёрами, музыка и звуковые эффекты погружают в атмосферу",
    },
    {
      icon: "MapPin",
      title: "GPS-навигация",
      description: "История разворачивается автоматически, когда вы подходите к нужной точке",
    },
    {
      icon: "Gamepad2",
      title: "Интерактивность",
      description: "Ваши выборы влияют на развитие сюжета — каждый маршрут уникален",
    },
    {
      icon: "Clock",
      title: "В любое время",
      description: "Скачайте маршрут и проходите его когда удобно, без привязки к группе",
    },
  ];

  const steps = [
    { number: "01", text: "Скачайте приложение «Эхо города»" },
    { number: "02", text: "Выберите и купите маршрут" },
    { number: "03", text: "Наденьте наушники и отправляйтесь в точку старта" },
    { number: "04", text: "Следуйте голосу в наушниках и выполняйте задания" },
  ];

  const faqs = [
    {
      question: "Как работает приложение без интернета?",
      answer: "После покупки маршрут загружается на телефон со всеми аудиофайлами и картами. GPS работает без интернета.",
    },
    {
      question: "Можно ли проходить маршрут компанией?",
      answer: "Да! Рекомендуем использовать одни наушники с разветвителем или портативную колонку. Для больших групп есть корпоративные квесты.",
    },
    {
      question: "Сколько времени занимает маршрут?",
      answer: "От 1.5 до 3 часов в зависимости от выбранного квеста. Вы можете ставить историю на паузу в любой момент.",
    },
    {
      question: "Что делать, если я заблудился?",
      answer: "В приложении есть карта с вашим местоположением и следующей точкой. Голос в наушниках подскажет направление.",
    },
    {
      question: "Есть ли маршруты для детей?",
      answer: "Да, у нас есть специальные детские квесты для возраста 10-14 лет с образовательными элементами.",
    },
  ];

  const filteredRoutes = activeCategory === "all" 
    ? routes 
    : routes.filter(route => route.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Radio" size={32} className="text-secondary" />
            <span className="text-2xl font-cormorant font-bold">Эхо города</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#routes" className="text-sm hover:text-secondary transition-colors">Маршруты</a>
            <a href="#about" className="text-sm hover:text-secondary transition-colors">О проекте</a>
            <a href="#how" className="text-sm hover:text-secondary transition-colors">Как работает</a>
            <a href="#faq" className="text-sm hover:text-secondary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            Скачать приложение
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent">
                Персональные приключения в Вашем городе
              </Badge>
              <h1 className="text-5xl md:text-6xl font-cormorant font-bold mb-6 leading-tight">
                Услышьте истории, которые шепчет город
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Иммерсивные аудио-квесты превращают улицы в театральные декорации. 
                Станьте героем детектива, мистической легенды или романтической истории — 
                всё в ваших наушниках и под ногами.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать приложение
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть демо
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-cormorant font-bold text-secondary">12+</div>
                  <div className="text-sm text-muted-foreground">маршрутов</div>
                </div>
                <div>
                  <div className="text-3xl font-cormorant font-bold text-secondary">5000+</div>
                  <div className="text-sm text-muted-foreground">путешественников</div>
                </div>
                <div>
                  <div className="text-3xl font-cormorant font-bold text-secondary">4.9</div>
                  <div className="text-sm text-muted-foreground">рейтинг в App Store</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a7fe407b-12e2-45cc-ae24-a1d41072b3dd/files/dcf92603-1a70-40ab-9e5d-ce486333a713.jpg"
                alt="Аудио-квест в городе"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant font-bold mb-4">Выберите своё приключение</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый маршрут — это уникальная история с профессиональной озвучкой, 
              геймификацией и выбором сюжетных веток
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? "bg-secondary hover:bg-secondary/90" : ""}
              >
                <Icon name={cat.icon as any} size={16} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoutes.map((route) => (
              <Card key={route.id} className="overflow-hidden hover-lift border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={route.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-cormorant font-bold">{route.title}</h3>
                    <Badge variant="secondary">{route.price}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{route.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{route.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" size={16} />
                      <span>{route.distance}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/a7fe407b-12e2-45cc-ae24-a1d41072b3dd/files/09a53bb2-c72c-4187-9e67-cb5a617383a1.jpg"
                alt="Атмосферный город"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent">
                О проекте
              </Badge>
              <h2 className="text-4xl font-cormorant font-bold mb-6">
                Не экскурсия, а погружение в историю
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                «Эхо города» — это гибрид подкаста, видеоигры и театрального спектакля. 
                Мы превращаем знакомые улицы в декорации захватывающих историй, 
                где вы — главный герой.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Наша команда включает историков, сценаристов, профессиональных актёров 
                и звукорежиссёров. Каждый маршрут тщательно исследован и проработан 
                для создания максимального эффекта присутствия.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon name={feature.icon as any} size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant font-bold mb-4">Как это работает</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Всего четыре простых шага отделяют вас от незабываемого приключения
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-cormorant font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-lg">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Smartphone" size={20} className="mr-2" />
              Скачать для iOS и Android
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">
            Подарочные сертификаты
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Дарите впечатления! Подарочный сертификат на любой маршрут — 
            идеальный подарок для любителей приключений и истории
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Купить сертификат
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              <Icon name="Percent" size={20} className="mr-2" />
              Акции и скидки
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground">
              Ответы на самые популярные вопросы о наших аудио-квестах
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">Остались вопросы?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами в социальных сетях или напишите на почту. 
            Мы всегда рады помочь!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="lg">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Users" size={20} className="mr-2" />
              ВКонтакте
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Mail" size={20} className="mr-2" />
              info@echo-city.ru
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Radio" size={24} className="text-secondary" />
              <span className="font-cormorant font-bold">Эхо города</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Эхо города. Иммерсивные аудио-гиды и квесты
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm hover:text-secondary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-sm hover:text-secondary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;