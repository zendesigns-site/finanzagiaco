import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  CheckCircle2,
  Award,
  BookOpen,
  Scale,
  Users,
  Compass,
  Heart,
  Eye,
  TrendingUp,
  LineChart,
  PieChart,
  Briefcase
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { CTAButton } from '../components/ui/CTAButton';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <Section className="min-h-[70vh] flex items-center bg-surface relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1 space-y-8 h-full flex flex-col justify-center">
            <h1 className="text-5xl lg:text-[64px] lg:leading-[1.1] font-medium text-primary uppercase tracking-tight">
              CHI SONO <span className="block border-b-4 border-link w-24 my-6"></span>
            </h1>
            <p className="text-2xl text-social font-bold leading-tight">
              Uno studio di pianificazione finanziaria e patrimoniale che lavora per te, non per chi ti vuole vendere servizi ad ogni costo.
            </p>
            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-primary font-bold">Alessandro Giacomelli</h2>
              <p className="text-lg text-primary leading-relaxed">
                Sono Alessandro Giacomelli, Consulente Finanziario Autonomo, Dottore Commercialista Pianificatore Finanziario CFP®. Ho fondato lo Studio Giacomelli per affiancare privati e famiglie nella gestione consapevole del proprio patrimonio, con un approccio indipendente e integrato. Non mi occupo solo di investimenti.
              </p>
              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm border-l-4 border-link">
                 <p className="text-lg text-primary font-bold">
                   Il mio lavoro è aiutarti a prendere decisioni finanziarie corrette considerando tutto ciò che conta davvero: previdenza, protezione patrimoniale, fiscalità, passaggio generazionale. 
                 </p>
                 <p className="text-lg text-primary mt-4">
                   Perché le scelte finanziarie non esistono mai isolate. E senza una visione d'insieme, anche una buona decisione può diventare inefficiente.
                 </p>
              </div>
            </div>
            <CTAButton>Prenota una call conoscitiva</CTAButton>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-primary/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
              alt="Alessandro Giacomelli" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* 2. LA MIA STORIA */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-medium text-primary">
              LA MIA STORIA. <span className="block text-link font-bold mt-2">Perché ho scelto di portare la Consulenza Finanziaria Indipendente anche a privati e famiglie.</span>
            </h2>
          </motion.div>
          <motion.div {...fadeInUp} className="grid md:grid-cols-5 gap-12 items-start">
             <div className="md:col-span-3 space-y-6 text-lg text-primary leading-relaxed">
                <p>
                  Il mio percorso inizia come dottore commercialista specializzato in finanza d'impresa. Lavorando a stretto contatto con il sistema finanziario mi sono reso conto che c’era un enorme bisogno di chiarezza e trasparenza per le persone fisiche.
                </p>
                <p>
                  Spesso le persone prendono decisioni importanti senza avere una reale consapevolezza dei costi e dei rischi. Ho scelto l'indipendenza per essere libero di dire sempre la verità tecnica, senza dover vendere prodotti.
                </p>
                <p>
                  Il mio obiettivo è aiutarti a prendere le decisioni finanziarie giuste per la tua vita. L'esperienza maturata nel mondo aziendale mi ha permesso di sviluppare una sensibilità particolare per l'ottimizzazione e la protezione del valore, concetti che oggi porto nella pianificazione per le famiglie.
                </p>
             </div>
             <div className="md:col-span-2 space-y-8">
                <div className="p-10 bg-surface rounded-3xl border border-slate-100 flex flex-col justify-center items-center text-center">
                   <p className="text-2xl text-social font-bold leading-tight underline decoration-icon decoration-4 underline-offset-8">
                     "I soldi non sono l'obiettivo. Sono il mezzo per avere la vita che sogni."
                   </p>
                   <p className="mt-8 text-primary font-bold uppercase tracking-widest text-[10px]">La domanda da cui parto è sempre una sola...</p>
                   <p className="text-xl text-link font-bold uppercase mt-2 italic">Cosa desideri veramente?</p>
                </div>
             </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. CREDENZIALI E FORMAZIONE */}
      <Section className="bg-surface">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-medium text-primary font-bold">Pianificazione finanziaria, economica e giuridica integrate.</h2>
          <p className="text-xl text-primary font-medium">Lo Studio Giacomelli nasce dall'integrazione di competenze che raramente si trovano insieme.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             {
               icon: <ShieldCheck className="text-icon" />,
               title: "Consulente finanziario autonomo",
               text: "Iscritto all'Albo OCF, sezione Consulenti Finanziari Autonomi. Vigilato da CONSOB. La sezione più alta dell'albo in termini di indipendenza."
             },
             {
               icon: <Award className="text-icon" />,
               title: "Dottore commercialista",
               text: "Iscritto all'Ordine dei Dottori Commercialisti di Firenze. Abilitato alla revisione legale dei conti."
             },
             {
               icon: <BookOpen className="text-icon" />,
               title: "Consulente del giudice",
               text: "Tribunale di Firenze. Incarichi di consulenza tecnica in materia finanziaria, assicurativa e previdenziale."
             }
           ].map((box, i) => (
             <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:border-link transition-all h-full">
                <div className="mb-6 p-4 bg-surface rounded-xl w-fit group-hover:scale-110 transition-transform">{box.icon}</div>
                <h3 className="text-2xl font-serif text-primary font-bold mb-4 leading-tight">{box.title}</h3>
                <p className="text-primary text-sm leading-relaxed">{box.text}</p>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* 4. LO STUDIO E IL NETWORK */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-primary text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full" />
          <div className="shrink-0 w-24 h-24 bg-link rounded-full flex items-center justify-center text-white">
             <Users size={40} />
          </div>
          <div className="space-y-4">
             <h3 className="text-3xl font-serif font-bold">Una rete di professionisti, sempre al tuo fianco.</h3>
             <p className="text-lg opacity-80 leading-relaxed italic">
                Accanto alla guida di Alessandro Giacomelli opera un network di professionisti e collaboratori specializzati: legali, esperti tributari e periti assicurativi. Un unico punto di riferimento, con dietro una struttura competente che garantisce un monitoraggio costante e una risposta rapida a qualsiasi complessità.
             </p>
          </div>
        </div>
      </Section>

      {/* 5. LE AREE DI COMPETENZA */}
      <Section className="bg-surface">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-medium text-primary font-bold tracking-tight">Un unico punto di riferimento in ambito finanziario.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: "Investimenti", icon: <TrendingUp className="text-icon" />, text: "Costruzione di portafogli efficienti basati su dati oggettivi, costi minimi e massima diversificazione." },
             { title: "Pianificazione previdenziale", icon: <PieChart className="text-icon" />, text: "Analisi della posizione contributiva e strategia per il mantenimento del tenore di vita futuro." },
             { title: "Coperture rischi", icon: <ShieldCheck className="text-icon" />, text: "Protezione della persona, del patrimonio e dell'attività professionale da eventi imprevisti." },
             { title: "Ottimizzazione fiscale", icon: <Scale className="text-icon" />, text: "Analisi del carico tributario per ogni scelta finanziaria e patrimoniale, per ridurre le inefficienze." },
             { title: "Passaggio generazionale", icon: <Users className="text-icon" />, text: "Trasmissione del patrimonio agli eredi in modo sereno, efficiente e fiscalmente corretto." },
             { title: "Wealth planning", icon: <LineChart className="text-icon" />, text: "Consulenza strategica globale per patrimoni complessi che richiedono una gestione strutturata." }
           ].map((area, i) => (
             <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-link group transition-all">
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 bg-surface rounded-lg group-hover:bg-link/10 transition-colors">{area.icon}</div>
                   <h4 className="text-xl font-serif text-primary font-bold leading-tight">{area.title}</h4>
                </div>
                <p className="text-primary text-sm leading-relaxed">{area.text}</p>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* 6. IL MIO APPROCCIO */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-5xl font-medium text-primary leading-tight">Priorità ai tuoi obiettivi, ai tuoi sogni, <br/><span className="text-link font-bold underline decoration-link underline-offset-8">alla tua vita.</span></h2>
            <div className="space-y-6 text-lg text-primary leading-relaxed">
              <p className="text-xl font-bold text-social">I numeri vengono dopo.</p>
              <p>
                Il mio approccio è focalizzato al 100% sugli interessi del cliente. Parto da te, dalla tua storia e da ciò che desideri realizzare. Ogni piano finanziario è un vestito su misura che si adatta alle tue necessità e si aggiorna quando la tua vita cambia.
              </p>
              <div className="p-8 bg-surface rounded-3xl border-l-8 border-link">
                 <p className="font-bold text-primary italic leading-relaxed">
                   Non gestisco il tuo denaro direttamente. Non ti chiedo di cambiare banca. Fornisco raccomandazioni indipendenti che possiamo attuare dove (e se) vuoi.
                 </p>
              </div>
            </div>
          </motion.div>
          <div className="space-y-6">
             {[
               { title: "Ascolto", text: "Ogni percorso parte da una comprensione profonda della tua situazione attuale e delle tue ambizioni future." },
               { title: "Chiarezza", text: "Nessun tecnicismo superfluo. Traduco la finanza complessa in un linguaggio semplice e decisioni concrete." },
               { title: "Continuità", text: "Ti accompagno nel tempo, monitorando i risultati e adattando la strategia ad ogni fase della tua vita." }
             ].map((point, i) => (
               <motion.div key={i} {...fadeInUp} className="p-8 bg-surface rounded-2xl border border-slate-100 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-link opacity-20 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-2xl font-serif text-primary font-bold mb-2">{point.title}</h4>
                  <p className="text-primary leading-relaxed opacity-80">{point.text}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </Section>

      {/* 7. COSA DICONO I CLIENTI */}
      <Section className="bg-surface relative overflow-hidden">
         <div className="text-center mb-16">
            <h2 className="text-5xl font-medium text-primary font-bold italic">Dicono di noi</h2>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Lorenzo", 
                text: "Ho trovato in Alessandro una persona competente ma soprattutto onesta. Mi ha aiutato a rimettere ordine nei miei investimenti che erano sparsi in diverse banche senza una logica." 
              },
              { 
                name: "Ingegnere di Firenze", 
                text: "La sua consulenza tecnica è stata fondamentale per risolvere una questione assicurativa complessa che durava da anni. Consiglio lo studio per la professionalità e l'approccio integrato." 
              },
              { 
                name: "Nicola e Marina", 
                text: "Grazie allo studio ora sappiamo esattamente come si muove il nostro patrimonio e abbiamo un piano chiaro per il futuro dei nostri figli. L'indipendenza di Alessandro è la sua vera forza." 
              }
            ].map((review, i) => (
              <motion.div key={i} {...fadeInUp} className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between italic text-social">
                 <p className="leading-relaxed mb-6 font-bold">“{review.text}”</p>
                 <div className="pt-6 border-t border-slate-50">
                    <p className="text-primary font-bold uppercase tracking-widest text-[10px]">{review.name}</p>
                 </div>
              </motion.div>
            ))}
         </div>
      </Section>

      {/* 8. FOOTER / CHIUSURA */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden bg-primary shadow-2xl relative">
          <div className="p-16 text-center space-y-12">
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">Richiedi una prima analisi <br/><span className="text-link underline underline-offset-8">senza impegno.</span></h3>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto italic">
                Se vuoi capire se posso esserti utile, basta una semplice consulenza per iniziare. Nessuna pressione, nessun impegno.
              </p>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
               <CTAButton>Prenota una call conoscitiva</CTAButton>
               <CTAButton primary={false} className="!text-white border-white/20 hover:bg-white/5">
                 Inviaci un'email e raccontaci i tuoi obiettivi
               </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
