import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  PieChart, 
  Briefcase, 
  TrendingUp, 
  Scale, 
  LineChart,
  Calendar,
  CheckCircle2,
  Stethoscope,
  Users
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { CTAButton } from '../components/ui/CTAButton';

export default function Home() {
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
    <>     {/* 1. HERO SECTION */}
      <section className="bg-white py-20 lg:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <p className="text-xl font-bold text-brand-blue uppercase tracking-widest">
                  Organizza il tuo patrimonio.
                </p>
                <h1 className="text-[64px] font-bold text-brand-navy leading-tight tracking-tight">
                  Prendi decisioni finanziarie più consapevoli e vincenti.
                </h1>
              </div>
              <p className="text-xl text-brand-navy font-semibold">
                Studio Giacomelli (o Giacofin).
              </p>
              <p className="text-lg text-brand-slate leading-relaxed">
                Lo Studio Giacomelli affianca privati e famiglie nella gestione di investimenti, fiscalità e previdenza, con un approccio indipendente e integrato. Perché le scelte finanziarie funzionano davvero solo quando sono coordinate tra loro.
              </p>
              <CTAButton>Prenota una call conoscitiva</CTAButton>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Studio Giacomelli" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IL PROBLEMA */}
      <Section id="problema" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div {...fadeInUp} className="space-y-6">
            <div className="p-10 border-l-4 border-link bg-surface/50 rounded-r-2xl">
              <p className="text-xl text-primary mb-4">Molte persone arrivano con una sensazione precisa…</p>
              <h2 className="text-4xl lg:text-5xl font-medium leading-tight text-primary">
                Avere fatto tante scelte finanziarie in passato <span className="underline decoration-link underline-offset-8 font-bold">senza una vera direzione</span>.
              </h2>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-6 pt-6">
            <p className="text-xl text-primary font-medium tracking-tight">
              La domanda che si pongono tutti è <span className="text-link font-bold">“Sto facendo le scelte giuste?”</span>
            </p>
            <p className="text-lg leading-relaxed text-primary">
              Il problema non è la mancanza di strumenti o di opportunità. È la mancanza di una visione d'insieme.
            </p>
            <p className="text-lg leading-relaxed text-primary font-bold uppercase tracking-widest text-sm">
              Senza un coordinamento, anche decisioni corrette possono portare a risultati inefficienti.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {[
            { 
              icon: <TrendingUp className="text-icon" />, 
              title: "Investimenti", 
              text: "Investimenti aperti in momenti diversi, spesso con logiche differenti e contrarie tra di loro." 
            },
            { 
              icon: <ShieldCheck className="text-icon" />, 
              title: "Polizze", 
              text: "Polizze sottoscritte senza sapere esattamente cosa coprono e quali sono i reali benefici." 
            },
            { 
              icon: <Briefcase className="text-icon" />, 
              title: "Previdenza", 
              text: "Contributi previdenziali distribuiti su più gestioni, versati più per abitudine che per consapevolezza." 
            }
          ].map((box, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="p-10 bg-surface rounded-2xl border border-slate-100 hover:border-link/30 transition-all group"
            >
              <div className="mb-6 p-4 bg-white rounded-xl w-fit group-hover:scale-110 transition-transform shadow-sm">
                {box.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-primary font-bold">{box.title}</h3>
              <p className="text-primary leading-relaxed">{box.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 3. LA SOLUZIONE */}
      <Section className="bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-link/5 -skew-x-12 transform translate-x-1/2" />
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <p className="text-link font-medium tracking-widest uppercase text-sm">Oltre la singola scelta</p>
          <h2 className="text-4xl md:text-6xl font-medium leading-tight">
            Il vero obiettivo non è ottimizzare una singola scelta… <br/>
            <span className="text-link block font-bold mt-4">È mettere in relazione tutte le decisioni finanziarie.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mb-12">
          {[
            "Come investire meglio?", "Quale prodotto scegliere?", "Come pagare meno tasse?",
            "Il tuo patrimonio è al sicuro?", "Cosa lasci ai tuoi figli?", "Basta davvero un testamento?"
          ].map((q, i) => (
            <motion.div 
              key={i} 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-12 text-center flex items-center justify-center min-h-[160px]"
            >
              <span className="text-xl font-serif text-white/90">{q}</span>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-2xl text-link font-bold">Sono tutte domande legittime. Ma prese da sole, non risolvono il problema.</p>
          <div className="grid md:grid-cols-3 gap-12 pt-8 text-primary">
            <div className="p-8 glass rounded-2xl">
              <p className="font-medium leading-relaxed">"Un investimento ha un impatto fiscale."</p>
            </div>
            <div className="p-8 glass rounded-2xl">
              <p className="font-medium leading-relaxed">"Una decisione previdenziale influisce sul tuo futuro finanziario."</p>
            </div>
            <div className="p-8 glass rounded-2xl">
              <p className="font-medium leading-relaxed">"Una polizza può essere utile… oppure completamente inutile."</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* 4. FOCUS PROTEZIONE */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <motion.div {...fadeInUp} className="space-y-4">
              <span className="text-link font-bold tracking-widest uppercase text-sm">Curare chi ami</span>
              <h2 className="text-4xl md:text-5xl font-medium text-primary">
                Proteggere il patrimonio è il <span className="font-bold">primo atto di cura verso chi ami.</span>
              </h2>
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="mt-1 p-2 bg-surface rounded-lg shrink-0"><CheckCircle2 className="text-icon" /></div>
                <p className="text-lg text-primary leading-relaxed">
                  Senza pianificazione della successione, <span className="text-primary font-bold">decide lo Stato al posto tuo</span>.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="mt-1 p-2 bg-surface rounded-lg shrink-0"><CheckCircle2 className="text-icon" /></div>
                <p className="text-lg text-primary leading-relaxed">
                  Proteggere oggi il patrimonio evita conflitti tra eredi domani.
                </p>
              </div>
              <div className="p-8 bg-primary text-white rounded-2xl border-l-8 border-link">
                 <p className="text-lg font-medium">Senza un approccio coordinato, il rischio è quello di costruire nel tempo un sistema disorganizzato.</p>
              </div>
            </motion.div>
          </div>
          <motion.div 
            {...fadeInUp}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Protezione Patrimonio" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-10 bg-link text-white rounded-2xl shadow-xl max-w-xs">
              <h4 className="text-xl font-serif mb-2 font-bold">Piano di Sicurezza</h4>
              <p className="text-sm opacity-90 leading-relaxed uppercase tracking-widest text-[10px]">Le quattro dimensioni della pianificazione patrimoniale.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 5. APPROCCIO OLISTICO */}
      <Section className="bg-surface relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative order-2 md:order-1 h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1000" 
              alt="Approccio Olistico" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-overlay" />
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-8 order-1 md:order-2">
            <h2 className="text-5xl font-medium text-primary leading-tight">Il nostro approccio <br/> <span className="font-bold">olistico e integrato.</span></h2>
            <div className="space-y-6 text-lg text-primary leading-relaxed">
              <p>
                Lo Studio Giacomelli nasce proprio per dare struttura e coerenza a queste situazioni. 
                Operiamo come pianificatori e <span className="text-link font-bold">consulenti finanziari indipendenti</span>, 
                senza prodotti da collocare e senza commissioni legate alle scelte del cliente.
              </p>
              <div className="p-6 bg-white rounded-xl border-l-4 border-link">
                 <p className="text-xl text-primary font-bold">In parole semplici, le decisioni vengono prese esclusivamente nel tuo interesse.</p>
              </div>
              <p>
                Ma il vero valore non è solo l'indipendenza. È <span className="text-link font-bold underline decoration-link underline-offset-4">l'approccio, olistico ed integrato</span>. 
                Ogni attività viene inserita all'interno di una pianificazione finanziaria e patrimoniale integrata.
              </p>
              <p>
                Investimenti, fiscalità, previdenza e protezione non sono ambiti separati. Sono parti di un unico sistema. 
                <span className="text-primary font-bold"> E solo se funzionano insieme, funzionano davvero.</span>
              </p>
            </div>
            <CTAButton>Prenota una call conoscitiva</CTAButton>
          </motion.div>
        </div>
      </Section>

      {/* 6. OBIETTIVI CONCRETI */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div {...fadeInUp} className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-medium text-primary leading-tight">Il nostro obiettivo in concreto?</h2>
            <p className="text-2xl md:text-4xl text-link font-bold tracking-tight">
              Dare forma alle tue esigenze finanziarie, ai tuoi sogni ed alla tua vita.
            </p>
            <div className="space-y-4 max-w-2xl mx-auto text-lg text-primary leading-relaxed">
              <p>Non si tratta di fare “la scelta perfetta”. Si tratta di costruire un sistema che funziona nel lungo periodo.</p>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Significa eliminare inefficienze, ridurre errori e costruire una struttura sostenibile nel tempo.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="bg-surface rounded-3xl p-12 border border-slate-100 shadow-sm"
          >
            <h3 className="text-3xl font-serif font-bold text-center mb-10 text-primary">Insieme possiamo analizzare…</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Dove sei oggi", "Dove vuoi arrivare", 
                "Quali decisioni hanno davvero un impatto", "Quali invece puoi evitare"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="p-8 bg-white rounded-2xl shadow-sm text-center flex flex-col items-center justify-center group hover:bg-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10 text-icon font-bold">
                    0{i+1}
                  </div>
                  <p className="font-serif text-primary group-hover:text-white font-bold leading-tight">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="flex justify-center">
            <CTAButton>Prenota una call conoscitiva</CTAButton>
          </div>
        </div>
      </Section>

      {/* 7. I SERVIZI OFFERTI */}
      <Section id="servizi" className="bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-link to-transparent opacity-30" />
        <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-medium text-primary font-bold tracking-tight">I servizi offerti.</h2>
          <p className="text-xl text-primary">Lo Studio Giacomelli rappresenta un punto di riferimento unico per la gestione del patrimonio.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: <PieChart size={32} />, 
              title: "Pianificazione finanziaria", 
              body: "Il cuore del lavoro. Costruiamo un piano che tiene insieme tutte le tue scelte finanziarie e patrimoniali." 
            },
            { 
              icon: <LineChart size={32} />, 
              title: "Gestione degli investimenti", 
              body: "Portafogli costruiti su criteri oggettivi, senza logiche commerciali o prodotti da collocare." 
            },
            { 
              icon: <Calendar size={32} />, 
              title: "Pianificazione previdenziale", 
              body: "Analisi della tua posizione e definizione di strategie sostenibili per il futuro." 
            },
            { 
              icon: <Stethoscope size={32} />, 
              title: "Protezione del patrimonio con strumenti giuridici", 
              body: "Trust, fondi patrimoniali, vincoli di destinazione. Strumenti concreti per proteggere ciò che hai costruito." 
            },
            { 
              icon: <Scale size={32} />, 
              title: "Ottimizzazione fiscale", 
              body: "Ridurre l'impatto complessivo di ogni decisione. Ogni scelta viene analizzata anche dal punto di vista fiscale." 
            },
            { 
              icon: <Users size={32} />, 
              title: "Passaggio generazionale", 
              body: "Trasmissione del patrimonio chiara ed efficiente. Strutturiamo la trasmissione in modo armonico." 
            }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="group p-10 bg-white rounded-3xl border border-transparent hover:border-link hover:shadow-xl transition-all h-full"
            >
              <div className="text-icon mb-6 bg-surface p-4 w-fit rounded-xl group-hover:scale-110 transition-transform">{s.icon}</div>
              <h4 className="text-2xl font-serif mb-4 text-primary font-bold leading-tight">{s.title}</h4>
              <p className="text-primary leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp} className="mt-20 flex flex-wrap justify-center gap-6">
          <CTAButton primary={false} className="text-sm font-bold uppercase tracking-widest">Scopri tutti i servizi per Privati</CTAButton>
          <CTAButton primary={false} className="text-sm font-bold uppercase tracking-widest">Scopri tutti i servizi per Aziende</CTAButton>
        </motion.div>
      </Section>

      {/* 8. IL VALORE DELL'INDIPENDENZA */}
      <Section id="valore" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-medium text-primary leading-tight">Perché scegliere professionisti <br/><span className="font-bold underline decoration-link decoration-wavy underline-offset-8">indipendenti?</span></h2>
            <div className="space-y-6 text-lg text-primary leading-relaxed">
              <p>Nel sistema tradizionale, spesso chi ti consiglia ha anche interesse a venderti qualcosa. <span className="text-primary font-bold">Questo crea un conflitto</span>, che anche quando non è evidente, influisce sulle scelte.</p>
              <p>Lo Studio Giacomelli lavora in modo diverso:</p>
              <ul className="space-y-4">
                {[
                  "Nessun prodotto da collocare", "Nessuna commissione legata agli strumenti", "Nessun vincolo con intermediari"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center font-bold text-primary">
                    <div className="w-2 h-2 bg-link rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>L'integrazione tra consulenza finanziaria e competenze fiscali, giuridiche e previdenziali sono le quattro dimensioni di una pianificazione patrimoniale davvero completa.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="p-12 bg-primary rounded-[3rem] text-white space-y-8 shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-icon rounded-full flex items-center justify-center font-serif font-bold text-primary">Unico</div>
            <h3 className="text-3xl font-serif font-medium leading-tight">Il nostro obiettivo è costruire <span className="text-link font-bold leading-snug underline block mt-2 underline-offset-4">soluzioni utili per te.</span></h3>
            <p className="text-xl font-light leading-relaxed opacity-80">Questo permette di valutare ogni decisione in modo più completo. Perché il valore non è solo l'indipendenza, ma l'integrazione delle competenze.</p>
            <div className="pt-8 border-t border-white/20">
              <div className="flex gap-10">
                 <div className="text-center">
                    <div className="text-4xl font-serif mb-1 font-bold">100%</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-60">Indipendenza</div>
                 </div>
                 <div className="text-center">
                    <div className="text-4xl font-serif mb-1 font-bold">20+</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-60">Anni di Exp</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 9. TARGET E BENEFICI */}
      <Section className="bg-surface relative overflow-hidden">
        <div className="text-center mb-20 space-y-6 relative z-10">
          <h2 className="text-5xl font-medium text-primary font-bold">Per chi è il nostro approccio?</h2>
          <p className="text-xl text-primary font-medium tracking-tight uppercase tracking-widest text-sm">Non è necessario avere grandi patrimoni. È necessario voler gestire meglio quello che si ha.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid md:grid-cols-2 gap-6">
            {[
              "ha accumulato investimenti/polizze diverse", "vuole fare ordine", 
              "cerca un riferimento unico indipendente", "desidera decisioni consapevoli", 
              "vuole un patrimonio solido", "ha famiglia/impresa da proteggere"
            ].map((target, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-link">
                 <p className="font-serif text-primary group-hover:text-link font-bold leading-tight">{target}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8 bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-50">
            <h3 className="text-3xl font-serif text-primary font-bold underline decoration-link underline-offset-8">I Benefici Concreti:</h3>
            <ul className="grid md:grid-cols-2 gap-8 pt-4 text-social">
              {[
                { t: "Maggiore chiarezza", b: "Per capire davvero cosa stai facendo." },
                { t: "Maggiore controllo", b: "Sul tuo futuro finanziario." },
                { t: "Riduzione degli errori", b: "Eliminando inefficienze e costi inutili." },
                { t: "Una strategia coerente", b: "Dove tutto è messo in relazione." },
                { t: "Tranquillità nelle scelte", b: "Sapendo di avere un partner affidabile." }
              ].map((b, i) => (
                <li key={i} className="space-y-2">
                  <div className="flex items-center gap-3 text-icon font-bold">
                    <CheckCircle2 size={20} />
                    <span className="text-primary font-bold">{b.t}</span>
                  </div>
                  <p className="text-sm text-primary pl-8">{b.b}</p>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-slate-100 flex justify-center">
               <CTAButton>Capiamo insieme i tuoi benefici</CTAButton>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 10. TESTIMONIANZE E CHIUSURA */}
      <Section id="testimonianze" className="bg-white">
        <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-medium text-primary font-bold">Le storie dei nostri clienti</h2>
          <p className="text-xl text-primary max-w-2xl mx-auto">Molti clienti arrivano con una situazione complessa e poco chiara. Nel tempo la trasformiamo in una struttura ordinata e comprensibile.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {/* Salvatore */}
          <motion.div {...fadeInUp} className="flex flex-col bg-surface p-12 rounded-3xl border border-slate-100 relative group h-full">
            <div className="absolute top-8 right-8 text-icon opacity-20 group-hover:opacity-100 transition-opacity">“</div>
            <div className="space-y-6 flex-grow">
              <p className="text-2xl font-serif text-social font-bold mb-6 leading-tight">“Ero in conflitto con la banca per un investimento sbagliato: non mi sentivo più solo.”</p>
              <p className="text-social text-sm leading-relaxed">
                “Stavo affrontando una controversia complessa e stressante con la banca per un prodotto di investimento che mi aveva causato perdite importanti. Mi sentivo impotente. L’incontro con Giacomelli è stato un punto di svolta. Ha analizzato in profondità il mio caso, individuato le criticità e mi ha accompagnato passo dopo passo nel percorso di contestazione. Siamo riusciti a risolvere la disputa e a recuperare una parte consistente delle perdite. Ho trovato competenza, ma anche un supporto umano che ha fatto la differenza.”
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="font-serif font-bold text-primary">Salvatore</p>
              <p className="text-xs uppercase tracking-widest text-primary mt-1 font-bold">Manager</p>
            </div>
          </motion.div>

          {/* Roberto e Chiara */}
          <motion.div {...fadeInUp} className="flex flex-col bg-primary text-white p-12 rounded-3xl border border-primary relative group h-full">
             <div className="absolute top-8 right-8 text-icon opacity-20 group-hover:opacity-100 transition-opacity">“</div>
            <div className="space-y-6 flex-grow">
              <p className="text-2xl font-serif text-icon font-bold mb-6 leading-tight">“Volevamo aiutare nostra figlia con la prima casa, ma senza metterla a rischio.”</p>
              <p className="text-white/80 text-sm leading-relaxed">
                “Quando abbiamo deciso di aiutare nostra figlia ad acquistare la sua prima casa, volevamo che questo patrimonio fosse tutelato da qualunque imprevisto. Giacomelli ci ha guidato con sensibilità e professionalità, spiegandoci le soluzioni migliori per proteggere l’immobile. Oggi siamo sereni sapendo che la casa di nostra figlia è al sicuro, qualunque cosa accada. È una tranquillità che non ha prezzo.”
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="font-serif font-bold text-icon">Roberto e Chiara</p>
              <p className="text-xs uppercase tracking-widest text-white/60 mt-1 font-bold">Impiegato - Casalinga</p>
            </div>
          </motion.div>

          {/* Lapo e Marina */}
          <motion.div {...fadeInUp} className="flex flex-col bg-surface p-12 rounded-3xl border border-slate-100 relative group h-full">
             <div className="absolute top-8 right-8 text-icon opacity-20 group-hover:opacity-100 transition-opacity">“</div>
            <div className="space-y-6 flex-grow">
              <p className="text-2xl font-serif text-social font-bold mb-6 leading-tight">“Le nostre finanze erano un caos, oggi abbiamo una direzione chiara.”</p>
              <p className="text-social text-sm leading-relaxed">
                “Prima di iniziare a lavorare con Giacomelli, le nostre finanze ci sembravano caotiche e faticavamo a collegare i nostri sogni a lungo termine con le spese quotidiane. Il suo approccio olistico ci ha aiutato a vedere il quadro generale e a trasformare i nostri obiettivi di vita in un piano finanziario chiaro e gestibile. Ora ci sentiamo organizzati, sicuri e in grado di prendere decisioni che sostengono davvero il futuro della nostra famiglia. Non si tratta solo di soldi, ma di vivere con più consapevolezza.”
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="font-serif font-bold text-primary">Lapo e Marina</p>
              <p className="text-xs uppercase tracking-widest text-primary mt-1 font-bold">Architetto - Dipendente Pubblico</p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-primary shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-16 space-y-12">
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-5xl font-serif text-white leading-tight">Fai il tuo primo passo, <br/><span className="text-link underline underline-offset-8">senza impegno.</span></h3>
              <p className="text-2xl text-white/90 font-bold leading-tight">Capiamo insieme se stai facendo le scelte giuste.</p>
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>Non serve partire da decisioni complesse. Spesso basta un primo confronto per fare chiarezza sulla tua situazione, individuare eventuali criticità e capire se c’è spazio per migliorare.</p>
              <p className="text-white font-bold">Il primo colloquio conoscitivo è un momento di analisi e dialogo, senza obblighi e senza pressioni. Un modo semplice per iniziare a mettere ordine.</p>
              <p className="text-link text-xl font-bold leading-relaxed">Affidati allo Studio Giacomelli per guardare al tuo futuro con maggiore chiarezza.</p>
            </motion.div>
            <CTAButton>Prenota una call conoscitiva</CTAButton>
          </div>
          <div className="md:w-1/2 relative bg-slate-200">
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
               alt="Final CTA" 
               className="w-full h-full object-cover grayscale mix-blend-overlay opacity-50"
             />
             <div className="absolute inset-0 bg-primary/30" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 glass rounded-full w-64 h-64 flex items-center justify-center text-center">
                <p className="text-primary font-serif font-bold leading-tight uppercase tracking-widest text-xs">Capacità di decidere, <br/>meglio.</p>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
}
