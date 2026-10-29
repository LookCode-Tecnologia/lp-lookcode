import { motion } from 'motion/react'
import { Compass, Paintbrush, Code2, Smartphone, Layers, TrendingUp, Cpu, Shield, CreditCard, WalletCards, Truck, Sparkles, Circle } from 'lucide-react'
import { getContactUrl } from '../../data/contact'
import { services } from '../../data/content'
import ScrollReveal from '../ui/ScrollReveal'

const icons = { Compass, Paintbrush, Code2, Smartphone, Layers, TrendingUp, Cpu, Shield, CreditCard, WalletCards, Truck, Sparkles }

export default function ServicesGrid() {
  return (
    <section className="bg-surface-900 py-32 relative" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Nossas especialidades</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">Tecnologia que conecta.<br/>Sua operação avança.</h2>
          <p className="text-copy-900 text-lg leading-relaxed max-w-2xl mb-16">Receba pagamentos, acompanhe entregas e conecte seus sistemas. Desenvolvemos soluções para reduzir tarefas manuais e dar mais controle ao seu negócio.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(280px,auto)]">
          {services.map((service, i) => {
            const IconComponent = icons[service.icon] || Circle
            const isLarge = service.span === 'md:col-span-2' || service.span === 'md:col-span-3'

            return (
              <motion.a
                href={getContactUrl(`Olá! Tenho interesse em ${service.title.toLowerCase()}. Gostaria de conversar sobre minha operação.`)}
                target="_blank"
                rel="noopener noreferrer"
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`${service.span} bg-surface-800 border border-foreground/5 p-8 relative overflow-hidden group hover:border-signal/40 hover:scale-[1.01] transition-all duration-500 hover:bg-surface-800/80 flex flex-col justify-between`}
                data-cursor="hover"
              >
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 mb-8">
                  <div className="flex justify-between items-start w-full mb-8">
                    <span className="font-mono text-xs text-copy-900">{service.number}</span>
                    <div className="text-foreground/60 group-hover:text-foreground group-hover:scale-110 transition-all duration-300">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className={`font-display font-medium ${isLarge ? 'text-3xl lg:text-4xl' : 'text-2xl mt-4'} mb-3`}>
                    {service.title}
                  </h3>
                  <p className="text-copy-900 text-sm leading-relaxed max-w-xl">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 mt-auto pb-9">
                  {service.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] md:text-xs text-copy-700 bg-surface-900 border border-foreground/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover arrow slide-in */}
                <div className="absolute right-8 bottom-8 flex items-center gap-2 text-signal font-mono text-sm translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 transition-all duration-300">
                  <span className="hidden sm:inline">Conversar sobre a solução</span> &rarr;
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
