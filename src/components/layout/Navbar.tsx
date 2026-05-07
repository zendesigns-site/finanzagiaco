import { Link } from 'react-router-dom';
import { CTAButton } from '../ui/CTAButton';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50 py-4 px-6 md:px-12 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded text-white font-serif font-bold text-xl">SG</div>
        <span className="font-serif text-xl tracking-tight font-semibold text-primary">Studio Giacomelli</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-secondary">
        <Link to="/" className="hover:text-link transition-colors">Home</Link>
        <Link to="/chi-sono" className="hover:text-link transition-colors">Chi Sono</Link>
        <Link to="/gestione-investimenti" className="hover:text-link transition-colors">Investimenti</Link>
        <a href="/#servizi" className="hover:text-link transition-colors">Servizi</a>
        <a href="/#testimonianze" className="hover:text-link transition-colors">Storie</a>
      </div>
      <CTAButton className="scale-90 md:scale-100 !py-2 !px-4">Contatti</CTAButton>
    </nav>
  );
};
