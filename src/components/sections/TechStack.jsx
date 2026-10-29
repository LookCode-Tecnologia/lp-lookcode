import { motion } from 'motion/react'
import ScrollReveal from '../ui/ScrollReveal'

export default function TechStack() {
  const stack = [
    { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Motion', 'React Native'] },
    { cat: 'Backend', items: ['Node.js', 'Python', 'NestJS', 'PostgreSQL', 'Redis'] },
    { cat: 'Cloud', items: ['AWS', 'Vercel', 'Docker', 'Kubernetes'] },
    { cat: 'Design', items: ['Figma', 'Prototipagem', 'UI/UX'] },
    { cat: 'AI/ML', items: ['OpenAI', 'Langchain', 'Pinecone', 'HuggingFace'] }
  ]

  return (
    <section className="bg-surface-900 py-32 border-t border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Nossa stack.</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {stack.map((category, i) => (
            <div key={category.cat} className="flex flex-col">
              <h3 className="font-mono text-xs text-signal uppercase tracking-widest mb-6 border-b border-foreground/5 pb-4">
                {category.cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.05, backgroundColor: '#00D9FF', color: '#04040a', borderColor: '#00D9FF' }}
                    className="font-mono text-xs md:text-sm px-4 py-2 rounded-full border border-foreground/10 text-copy-500 cursor-default transition-colors"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
