import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Briefcase",
      title: "Консультации",
      description: "Профессиональная консультация по вашим вопросам"
    },
    {
      icon: "Users",
      title: "Персональный подход",
      description: "Индивидуальные решения для каждого клиента"
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "Высокие стандарты обслуживания"
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Быстрое решение ваших задач"
    }
  ];

  const prices = [
    {
      title: "Базовый",
      price: "от 5 000 ₽",
      features: ["Консультация", "Базовый анализ", "Рекомендации"]
    },
    {
      title: "Стандартный",
      price: "от 15 000 ₽",
      features: ["Полная консультация", "Детальный анализ", "План действий", "Поддержка 30 дней"],
      popular: true
    },
    {
      title: "Премиум",
      price: "от 35 000 ₽",
      features: ["VIP обслуживание", "Комплексный анализ", "Индивидуальная стратегия", "Поддержка 90 дней", "Личный менеджер"]
    }
  ];

  const reviews = [
    {
      name: "Александр М.",
      rating: 5,
      text: "Отличный специалист! Решил мою задачу быстро и качественно.",
      date: "2 недели назад"
    },
    {
      name: "Елена К.",
      rating: 5,
      text: "Профессиональный подход, все четко и по делу. Рекомендую!",
      date: "1 месяц назад"
    },
    {
      name: "Дмитрий В.",
      rating: 5,
      text: "Очень доволен результатом работы. Буду обращаться еще.",
      date: "2 месяца назад"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-secondary">Ваш Бизнес</div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection("prices")} className="text-foreground hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection("contacts")} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection("contacts")}>Связаться</Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Профессиональные услуги для вашего бизнеса
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Опыт, качество и индивидуальный подход к каждому клиенту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection("services")}>
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary" onClick={() => scrollToSection("contacts")}>
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Комплексные решения для вашего успеха</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий план</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} onClick={() => scrollToSection("contacts")}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="mb-4 text-foreground">{review.text}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="font-semibold">{review.name}</span>
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground text-lg">Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Опишите ваш вопрос или задачу"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                <div className="font-semibold">Телефон</div>
                <div className="text-muted-foreground">+7 (999) 123-45-67</div>
              </div>
              <div>
                <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">info@example.com</div>
              </div>
              <div>
                <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                <div className="font-semibold">Адрес</div>
                <div className="text-muted-foreground">Москва, Россия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Ваш Бизнес. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
