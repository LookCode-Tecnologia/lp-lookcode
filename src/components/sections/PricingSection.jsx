import { Check } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import ScrollReveal from '../ui/ScrollReveal'

export default function PricingSection() {
  const plans = [
    {
        "name": "Essencial",
        "price": "Seu MVP",
        "desc": "Para tirar uma ideia do papel",
        "features": [
            "Diagnóstico do negócio",
            "Definição de escopo",
            "Experiência responsiva",
            "Desenvolvimento sob medida",
            "Plano de lançamento"
        ],
        "timeline": "Definido em proposta",
        "btnText": "Conversar sobre minha ideia",
        "btnClass": "bg-signal text-ink-950",
        "borderClass": "border-foreground/10"
    },
    {
        "name": "Crescimento",
        "price": "Seu produto",
        "desc": "Para ampliar sua operação",
        "features": [
            "Arquitetura de software",
            "Aplicações web e mobile",
            "Pagamentos integrados ao seu sistema",
            "Experiência de uso",
            "Evolução contínua",
            "Plano de suporte"
        ],
        "timeline": "Definido em proposta",
        "btnText": "Planejar meu projeto",
        "btnClass": "bg-signal text-ink-950",
        "borderClass": "border-signal/50",
        "popular": true
    },
    {
        "name": "Sob medida",
        "price": "Sua operação",
        "desc": "Para desafios complexos",
        "features": [
            "Diagnóstico técnico",
            "Plataformas de pagamentos sob medida",
            "Sistemas logísticos e regras de negócio",
            "Integração com provedores e APIs",
            "Cloud e escalabilidade",
            "Suporte alinhado ao negócio"
        ],
        "timeline": "Definido em proposta",
        "btnText": "Falar com especialistas",
        "btnClass": "border border-ember text-ember hover:bg-ember hover:text-white",
        "borderClass": "border-ember/30"
    }
]

  return (
    <section className="bg-surface-950 py-32" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-20 md:mb-24">
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Como podemos trabalhar</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Escopo transparente.<br/>Parceria de verdade.</h2>
          <p className="text-copy-900 max-w-lg mx-auto">Cada projeto tem seu contexto. Definimos a proposta a partir dos seus objetivos, com entregas e etapas claras.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1} className="h-full">
              <div
                className={`relative bg-surface-900 border ${plan.borderClass} p-8 lg:p-10 rounded-sm flex flex-col h-full group transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${plan.popular ? 'shadow-[0_0_30px_rgba(0,217,255,0.06)]' : ''}`}
                data-cursor="hover"
              >
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-signal/10 text-signal border border-signal/30 font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                      Para evoluir
                    </span>
                  </div>
                )}

                <h3 className="font-display text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="font-display text-4xl lg:text-5xl leading-[1.1] font-bold mb-4 lg:min-h-[2.2em]">{plan.price}</div>
                <p className="font-mono text-xs leading-relaxed text-copy-700 mb-8 pb-8 border-b border-foreground/5 lg:min-h-[5.9em]">{plan.desc}</p>

                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className="text-signal mt-1 shrink-0" size={16} strokeWidth={3} />
                      <span className="text-sm text-copy-500">{feat}</span>
                    </li>
                  ))}
                </ul>

                  <div className="flex items-start gap-3 mb-8 pt-6 border-t border-foreground/5 border-dashed">
                    <span className="text-signal mt-1 shrink-0 font-mono text-[10px]">&rarr;</span>
                    <span className="text-xs font-mono text-copy-700">Prazo: {plan.timeline}</span>
                  </div>

                <MagneticButton className={`w-full min-h-20 px-4 py-4 rounded-full font-display font-medium text-base lg:text-lg leading-snug transition-all ${plan.btnClass}`}>
                  {plan.btnText}
                </MagneticButton>

                <p className="font-mono text-[10px] text-copy-900 text-center mt-6">
                  Proposta alinhada ao seu contexto.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
