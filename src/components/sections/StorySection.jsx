import { motion } from "motion/react";

export default function StorySection() {
  const chapters = [
    {
      num: "01",
      title: "Seu negócio merece mais do que soluções genéricas.",
      p1: "Sistemas desconectados, processos manuais e ferramentas que não acompanham o crescimento tornam o dia a dia mais difícil do que deveria ser.",
      p2: "Desde 2014, a Look Code transforma desafios de negócio em soluções tecnológicas. Entendemos sua operação para construir o que faz diferença.",
      align: "left",
    },
    {
      num: "02",
      title: "Tecnologia que funciona. Experiências que fazem sentido.",
      p1: "Seu produto deve trabalhar a favor do seu negócio. Com interfaces intuitivas, integrações bem pensadas e uma base técnica preparada para evoluir.",
      p2: "Unimos design e engenharia para entregar produtos robustos, acessíveis e preparados para crescer com você.",
      align: "right",
    },
    {
      num: "03",
      title: "Seu próximo passo começa aqui.",
      p1: "Trabalhamos lado a lado com sua equipe, da primeira conversa à evolução contínua. Com clareza, colaboração e foco no seu desafio.",
      p2: "De sistemas complexos a aplicativos móveis, conectamos estratégia, experiência e desenvolvimento para transformar sua ideia em realidade.",
      align: "center",
    },
  ];

  const Art01 = () => (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center pointer-events-none">
      <div className="absolute w-64 h-64 bg-signal mix-blend-difference rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
      <div className="absolute w-40 h-40 bg-ember rounded-tr-full rounded-bl-full rotate-45 transform mix-blend-overlay"></div>
      <div className="absolute w-48 h-48 bg-surface-600 rounded-sm clip-diagonal"></div>
      <div
        className="absolute inset-0 border-[1px] border-foreground/10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>
  );

  const Art02 = () => (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center pointer-events-none group">
      <div className="w-1 h-3/4 bg-foreground/20 mx-4"></div>
      <div className="w-16 h-1/2 bg-signal/80 mx-4 transition-transform group-hover:scale-y-110"></div>
      <div className="w-1 h-2/3 bg-foreground/20 mx-4"></div>
      <div className="w-1 h-1/4 bg-foreground/10 mx-4"></div>
      <div className="w-8 h-8 bg-ember rounded-full mx-4 absolute right-1/4 top-1/4 animate-bounce"></div>
    </div>
  );

  return (
    <section
      className="bg-surface-950 py-32 md:py-48 relative overflow-hidden text-copy-100"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col pt-12">
        {chapters.map((chapter, i) => (
          <div key={i} className="mb-24 md:mb-48 relative last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center ${chapter.align === "right" ? "md:flex-row-reverse" : ""} ${chapter.align === "center" ? "md:grid-cols-1 md:w-3/4 mx-auto text-center" : ""}`}
            >
              {/* Text Side */}
              <div
                className={`relative z-10 ${chapter.align === "right" ? "md:col-start-2 md:row-start-1" : ""}`}
              >
                <div className="absolute -top-16 md:-top-32 -left-8 md:-left-16 font-display text-[15rem] md:text-[20rem] text-foreground/[0.02] leading-none select-none pointer-events-none font-bold">
                  {chapter.num}
                </div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-8">
                  {chapter.title}
                </h2>

                <div
                  className={`flex flex-col gap-6 text-copy-900 text-lg leading-relaxed ${chapter.align === "center" ? "items-center" : ""}`}
                >
                  <p>{chapter.p1}</p>
                  <p>{chapter.p2}</p>
                </div>

                {chapter.align === "center" && (
                  <div className="mt-12">
                    <a
                      href="#team"
                      className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-signal hover:text-foreground transition-colors"
                      data-cursor="hover"
                    >
                      Conheça nossa abordagem →
                    </a>
                  </div>
                )}
              </div>

              {/* Visual Side */}
              {chapter.align !== "center" && (
                <div
                  className={`relative z-0 ${chapter.align === "right" ? "md:col-start-1 md:row-start-1" : ""}`}
                >
                  {i === 0 ? <Art01 /> : <Art02 />}
                </div>
              )}
            </motion.div>

            {/* Capítulo dividers */}
            {i < chapters.length - 1 && (
              <div className="my-24 md:my-48 relative flex justify-center items-center">
                <hr className="w-full border-foreground/5 absolute" />
                <span className="bg-surface-950 px-4 font-mono text-xs text-foreground/20 relative">
                  Capítulo {chapters[i + 1].num}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
