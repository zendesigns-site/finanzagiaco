import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-20 bg-primary text-white px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded text-primary font-serif font-bold text-lg">SG</div>
            <span className="font-serif text-xl tracking-tight font-semibold">Studio Giacomelli</span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed">Consulenza finanziaria e patrimoniale indipendente. L'approccio olistico che mette in relazione le tue decisioni.</p>
        </div>
        <div className="space-y-6">
           <h5 className="text-accent uppercase tracking-widest text-xs font-bold">Contatti</h5>
           <ul className="space-y-4 text-sm opacity-80 font-bold">
              <li className="flex gap-3"><MapPin size={16} className="text-icon" /> Via Roma 1, 00100 Roma (RM)</li>
              <li className="flex gap-3"><Phone size={16} className="text-icon" /> +39 012 345678</li>
              <li className="flex gap-3"><Mail size={16} className="text-icon" /> info@studiogiacomelli.it</li>
           </ul>
        </div>
        <div className="space-y-6">
           <h5 className="text-accent uppercase tracking-widest text-xs font-bold">Link Rapidi</h5>
           <ul className="space-y-4 text-sm opacity-80">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/chi-sono" className="hover:text-accent transition-colors">Chi Sono</Link></li>
              <li><Link to="/gestione-investimenti" className="hover:text-accent transition-colors">Gestione Investimenti</Link></li>
              <li><a href="/#servizi" className="hover:text-accent transition-colors">Servizi</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
           </ul>
        </div>
        <div className="space-y-6">
           <h5 className="text-accent uppercase tracking-widest text-xs font-bold">Newsletter</h5>
           <p className="text-xs opacity-60 font-bold">Ricevi aggiornamenti sulla pianificazione finanziaria indipendente.</p>
           <div className="flex gap-2">
              <input type="text" placeholder="Email" className="bg-white/10 border border-white/20 rounded px-4 py-2 text-sm w-full outline-none focus:border-accent" />
              <button className="bg-accent px-4 py-2 rounded text-sm hover:bg-amber-700 font-bold">Invia</button>
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-40">
         <p>© 2026 Studio Giacomelli. Tutti i diritti riservati. P.IVA 01234567890</p>
         <div className="flex gap-6">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
         </div>
      </div>
    </footer>
  );
};
