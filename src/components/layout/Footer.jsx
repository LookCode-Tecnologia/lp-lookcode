import { Link } from 'react-router-dom'
import { ArrowUpRight, MessageCircle, Phone, Code2 } from 'lucide-react'
import { contactUrl } from '../../data/contact'
import BrandLogo from '../ui/BrandLogo'
export default function Footer() {
 return <footer id="contact" className="bg-surface-950 border-t border-foreground/5 pt-24 pb-8">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
   <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
    <div className="md:border-r md:border-foreground/5 pr-8"><a href="#" aria-label="Look Code — início" className="inline-block w-full max-w-56 py-2"><BrandLogo className="w-full" /></a><p className="text-copy-900 text-sm my-6 leading-relaxed">Transformamos ideias.<br/>Conectamos possibilidades.</p><div className="flex gap-2 text-copy-900"><a href={contactUrl} aria-label="Conversar pelo WhatsApp" className="p-3 hover:text-signal"><MessageCircle size={20}/></a><a href="tel:+5511933043152" aria-label="Ligar para a Look Code" className="p-3 hover:text-signal"><Phone size={20}/></a><a href="#services" aria-label="Conhecer os serviços" className="p-3 hover:text-signal"><Code2 size={20}/></a></div></div>
    <div><h3 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Serviços</h3><ul className="flex flex-col gap-4 text-sm text-copy-500">{['Integração de pagamentos','Plataformas de pagamentos','Sistemas logísticos','Sistemas sob medida','Aplicações móveis','Telecom & CRM','IA aplicada ao negócio'].map(x=><li key={x}><a href="#services" className="hover:text-signal">{x}</a></li>)}</ul></div>
    <div><h3 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Look Code</h3><ul className="flex flex-col gap-4 text-sm text-copy-500">{[['Nossa história','about'],['Nosso processo','process'],['Nossa abordagem','team'],['Tecnologia na prática','blog'],['Perguntas frequentes','faq']].map(([label,id])=><li key={id}><a href={`#${id}`} className="hover:text-signal">{label}</a></li>)}</ul></div>
    <div><h3 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Contato</h3><div className="flex flex-col gap-4 text-sm text-copy-500"><a href={contactUrl} className="hover:text-signal">Fale pelo WhatsApp</a><a href="tel:+5511933043152" className="hover:text-signal">+55 11 93304-3152</a><p className="mt-4 text-copy-700 leading-relaxed">Soluções tecnológicas<br/>para o seu próximo passo.</p><a href={contactUrl} target="_blank" rel="noopener noreferrer" className="text-signal flex gap-2 items-center mt-2">Conte sua ideia <ArrowUpRight size={16}/></a></div></div>
   </div>
   <div className="border-t border-foreground/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-copy-900"><p>© {new Date().getFullYear()} Look Code. Todos os direitos reservados.</p><p>Design & engenharia, desde 2014.</p><div className="flex gap-4"><Link to="/privacy-policy" className="hover:text-foreground">Privacidade</Link><span>·</span><Link to="/terms-of-service" className="hover:text-foreground">Termos de uso</Link></div></div>
  </div>
 </footer>
}
