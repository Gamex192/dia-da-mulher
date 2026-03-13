import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Zap, Microscope, Calendar, Users, Award } from "lucide-react";

/**
 * Design Philosophy: Elegant Classicism with Modern Touches
 * - Rose gold + warm beige for coziness
 * - Dark gray + white for formality
 * - Playfair Display for elegant typography
 * - Decorative lines and botanical elements
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            8 de Março
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#historia" className="hover:text-primary transition-colors">História</a>
            <a href="#doencas" className="hover:text-primary transition-colors">Doenças</a>
            <a href="#equipamentos" className="hover:text-primary transition-colors">Equipamentos</a>
            <a href="#prevencao" className="hover:text-primary transition-colors">Prevenção</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432200787/HoDgxUAv7AJiv78UeTJ4Lo/hero-banner-hrf2vAwVNM8J8BYPfXYbte.webp)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Dia Internacional da Mulher
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
            Celebrando história, saúde e empoderamento
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            Descubra Mais
          </Button>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      {/* History Section */}
      <section id="historia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground">
            A História do 8 de Março
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                O Dia Internacional da Mulher tem suas raízes nos movimentos feministas e trabalhistas do final do século XIX. Em 1908, 15 mil mulheres marcharam pelas ruas de Nova York exigindo jornadas de trabalho mais curtas, melhores salários e o direito ao voto.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Em 1910, Clara Zetkin, ativista comunista e defensora dos direitos das mulheres, propôs tornar a data internacional em uma conferência socialista. Desde então, o dia 8 de março tornou-se símbolo de luta pela igualdade.
              </p>
            </div>
            <div 
              className="h-96 rounded-lg shadow-lg bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432200787/HoDgxUAv7AJiv78UeTJ4Lo/history-timeline-bg-bLZYsBfqAaN2ffgzcD8URw.webp)',
              }}
            ></div>
          </div>

          {/* Timeline */}
          <div className="bg-secondary/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Marcos Históricos</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-foreground">1908</h4>
                  <p className="text-foreground/70">15 mil mulheres marcham em Nova York por direitos trabalhistas e voto</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-foreground">1910</h4>
                  <p className="text-foreground/70">Clara Zetkin propõe o Dia Internacional da Mulher</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-foreground">1932</h4>
                  <p className="text-foreground/70">Brasil conquista o direito ao voto feminino</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-foreground">1975</h4>
                  <p className="text-foreground/70">ONU institui oficialmente o Dia Internacional da Mulher em 8 de março</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-foreground/80 text-center">
            Hoje, o 8 de março continua sendo um símbolo de luta pela igualdade de direitos, celebrando as conquistas das mulheres e reafirmando o compromisso com a justiça social.
          </p>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      {/* Diseases Section */}
      <section id="doencas" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground">
            Principais Doenças Femininas
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <p className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Conhecer as principais condições de saúde que afetam as mulheres é fundamental para a prevenção e tratamento precoce.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Câncer de Mama",
                description: "A neoplasia mais comum entre mulheres. Detecção precoce aumenta significativamente as chances de cura.",
                icon: Heart,
              },
              {
                title: "Síndrome do Ovário Policístico",
                description: "Desequilíbrio hormonal que afeta fertilidade, metabolismo e ciclo menstrual.",
                icon: Zap,
              },
              {
                title: "Osteoporose",
                description: "Fragilidade óssea mais comum em mulheres pós-menopausa. Requer acompanhamento preventivo.",
                icon: Award,
              },
              {
                title: "Fibromialgia",
                description: "Dor crônica generalizada que afeta mais mulheres que homens. Afeta qualidade de vida.",
                icon: Users,
              },
              {
                title: "Infecções Urinárias",
                description: "Muito mais frequentes em mulheres devido à anatomia. Prevenção é essencial.",
                icon: Microscope,
              },
              {
                title: "Endometriose",
                description: "Crescimento anormal do tecido endometrial. Causa dor e pode afetar fertilidade.",
                icon: Calendar,
              },
            ].map((disease, idx) => {
              const Icon = disease.icon;
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{disease.title}</h3>
                  <p className="text-foreground/70">{disease.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      {/* Equipment Section */}
      <section id="equipamentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground">
            Tecnologias e Equipamentos Médicos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div 
              className="h-96 rounded-lg shadow-lg bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432200787/HoDgxUAv7AJiv78UeTJ4Lo/equipment-showcase-nyQ8od4iXjpnkaV5wTPswF.webp)',
              }}
            ></div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Diagnóstico Avançado</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg text-foreground mb-2">Mamografia</h4>
                  <p className="text-foreground/70">Desenvolvida em 1913, a mamografia revolucionou a detecção do câncer de mama. Utiliza raios-X para capturar imagens do tecido mamário com alta precisão.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg text-foreground mb-2">Ultrassom</h4>
                  <p className="text-foreground/70">Complementa a mamografia, especialmente em mamas densas. Oferece imagens em tempo real sem radiação, com tecnologia 3D avançada.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg text-foreground mb-2">HIFU (Ultrassom Focalizado)</h4>
                  <p className="text-foreground/70">Tecnologia não-invasiva para lifting facial e corporal. Utiliza ondas ultrassônicas para estimular colágeno e rejuvenescimento.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg text-foreground mb-2">Ressonância Magnética</h4>
                  <p className="text-foreground/70">Imagens de alta resolução sem radiação. Complementa diagnóstico em casos complexos com precisão excepcional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      {/* Prevention Section */}
      <section id="prevencao" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground">
            Prevenção e Cuidados
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Exames Preventivos Essenciais</h3>
              
              <div className="space-y-4">
                {[
                  "Mamografia anual ou a cada 2 anos (a partir dos 40 anos)",
                  "Papanicolau para detectar alterações no colo do útero",
                  "Ultrassom pélvico para avaliação ginecológica",
                  "Densitometria óssea para rastreio de osteoporose",
                  "Exames de sangue para avaliar saúde hormonal",
                  "Consultas regulares com ginecologista",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="h-96 rounded-lg shadow-lg bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432200787/HoDgxUAv7AJiv78UeTJ4Lo/health-section-bg-47xmfJkZzY2FMncekMEWTJ.webp)',
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div 
          className="relative py-20 rounded-lg overflow-hidden"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663432200787/HoDgxUAv7AJiv78UeTJ4Lo/cta-section-bg-bPbuwZuBU833eAdv8fm4HG.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Sua Saúde é Prioridade
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agende seus exames preventivos e cuide de você. A detecção precoce salva vidas.
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-bold"
            >
              Agende uma Consulta
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Sobre</h4>
              <p className="text-white/80">Informações sobre saúde feminina e a história do Dia Internacional da Mulher.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#historia" className="hover:text-white transition-colors">História</a></li>
                <li><a href="#doencas" className="hover:text-white transition-colors">Doenças</a></li>
                <li><a href="#equipamentos" className="hover:text-white transition-colors">Equipamentos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <p className="text-white/80">Para mais informações sobre saúde feminina, consulte um profissional médico.</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2026 Dia Internacional da Mulher. Celebrando história, saúde e empoderamento.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
