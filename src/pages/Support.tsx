
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  Users, 
  Clock, 
  CheckCircle, 
  HelpCircle 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
        variant: "default",
      });
      setIsSubmitting(false);
      // Сброс формы
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-20 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-primary">Поддержка и связь с нами</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              У вас есть вопросы или предложения? Мы всегда рады помочь вам и услышать ваше мнение.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ContactCard 
              icon={<Phone className="h-6 w-6 text-primary" />}
              title="Телефон"
              description="Наша горячая линия работает ежедневно с 9:00 до 21:00"
              contactInfo="+7 (922) 624-11-46"
              cta={{
                text: "Позвонить нам",
                action: "tel:+79226241146"
              }}
            />
            <ContactCard 
              icon={<Mail className="h-6 w-6 text-primary" />}
              title="Электронная почта"
              description="Напишите нам на почту с любыми вопросами"
              contactInfo="support@yourtime.coffee"
              cta={{
                text: "Написать письмо",
                action: "mailto:support@yourtime.coffee"
              }}
            />
            <ContactCard 
              icon={<MessageCircle className="h-6 w-6 text-primary" />}
              title="Чат поддержки"
              description="Мгновенные ответы через чат на нашем сайте"
              contactInfo="Среднее время ответа: 5 минут"
              cta={{
                text: "Начать чат",
                action: "#contact-form"
              }}
            />
          </div>

          <Separator className="my-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Как мы можем помочь?</h2>
              <div className="space-y-6">
                <SupportItem 
                  icon={<HelpCircle />}
                  title="Часто задаваемые вопросы"
                  description="Ответы на наиболее распространенные вопросы о нашей продукции и услугах."
                />
                <SupportItem 
                  icon={<Clock />}
                  title="Время обработки запросов"
                  description="Мы отвечаем на запросы в течение 24 часов в будние дни и 48 часов в выходные."
                />
                <SupportItem 
                  icon={<Users />}
                  title="Командная поддержка"
                  description="Наша команда профессионалов готова помочь вам с любыми вопросами о кофе и нашей продукции."
                />
                <SupportItem 
                  icon={<CheckCircle />}
                  title="Гарантия качества"
                  description="Мы гарантируем качество нашей продукции и предоставляем полную поддержку по всем вопросам."
                />
              </div>
            </div>

            <div id="contact-form" className="scroll-mt-24">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы ответим вам в кратчайшие сроки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Ваше имя
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Введите ваше имя"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Электронная почта
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="example@domain.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Тема
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Тема вашего сообщения"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Подробно опишите ваш вопрос или предложение..."
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <>Отправка...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" /> Отправить сообщение
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="mt-16 p-6 rounded-lg bg-muted text-center">
            <h2 className="text-2xl font-bold mb-4">У вас срочный вопрос?</h2>
            <p className="text-muted-foreground mb-6">
              Позвоните нам прямо сейчас, и мы поможем вам решить любую проблему
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+79226241146" className="text-lg">
                <Phone className="mr-2 h-5 w-5" /> +7 (922) 624-11-46
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contactInfo: string;
  cta: {
    text: string;
    action: string;
  };
}

const ContactCard = ({ icon, title, description, contactInfo, cta }: ContactCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <p className="text-lg font-medium mb-4">{contactInfo}</p>
        <Button asChild variant="outline" className="w-full">
          <a href={cta.action}>{cta.text}</a>
        </Button>
      </CardContent>
    </Card>
  );
};

interface SupportItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SupportItem = ({ icon, title, description }: SupportItemProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Support;
