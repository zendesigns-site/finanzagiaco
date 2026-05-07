import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  CheckCircle2,
  TrendingUp,
  LineChart,
  PieChart,
  Briefcase,
  XCircle,
  CheckCircle
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { CTAButton } from '../components/ui/CTAButton';

export default function Investments() {
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
      <Section className="min-h-[70vh] flex items-center bg-surface relative overflow-hidden xl:min-h-[60vh]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="order-2 md:order-1 space-y-8 h-full flex flex-col justify-center">
             <h1 className="text-5xl lg:text-[64px] lg:leading-[1.1] font-medium text-primary font-bold">
              Gestione investimenti<br/>indipendente
            </h1>
            <p className="text-2xl text-primary font-medium leading-relaxed max-w-lg">
              Investimenti efficienti, trasparenti, e<br/>sempre sotto il tuo controllo.
            </p>
            <CTAButton>Prenota una call conoscitiva</CTAButton>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-end"
          >
             <div className="relative aspect-[4/3] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-slate-300">
               <img 
                 src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000" 
                 alt="Gestione Investimenti" 
                 className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
             </div>
          </motion.div>
        </div>
      </Section>

      {/* 2. IL PROBLEMA */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-medium text-primary leading-tight font-bold">
              Cosa succede quando gli investimenti non funzionano?
            </h2>
            <div className="p-8 bg-surface rounded-3xl border border-slate-100 hidden lg:block">
              <PieChart size={64} className="text-icon opacity-50" />
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-6 text-lg text-primary leading-relaxed">
            <p>
              In molti casi, i piccoli investitori investono<br/>
              attraverso le loro banche o consulenti<br/>
              affiliati ad istituti di credito.
            </p>
            <p>
              Il risultato è spesso un portafoglio costruito<br/>
              non per loro, ma per le commissioni della<br/>
              banca.
            </p>
             <p className="font-bold text-link">
              Prodotti costosi, inefficienti, non trasparenti.
            </p>
            <p>
              In altre parole... Non sanno neanche cosa<br/>
              posseggono davvero, perchè lo<br/>
              posseggono, o cosa li aspettano in termini<br/>
              di rendimento realistico.
            </p>
            <p className="font-bold text-social">
              Questo crea due problemi: investimenti<br/>
              che non crescono come dovrebbero, e una<br/>
              mancanza totale di fiducia.
            </p>
            <p>
              Non sai se stai guadagnando o se stai<br/>
              alimentando il sistema finanziario.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 3. DEFINIZIONE OBIETTIVI */}
      <Section className="bg-surface relative">
        <div className="max-w-4xl mx-auto space-y-12">
           <motion.div {...fadeInUp} className="text-center space-y-4">
             <h2 className="text-4xl md:text-5xl font-medium text-primary font-bold">
               Quali sono i tuoi veri obiettivi di investimento?
             </h2>
             <p className="text-2xl text-link font-bold">
               Consulenza indipendente su investimenti
             </p>
           </motion.div>
           
           <motion.div {...fadeInUp} className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6 text-lg text-primary leading-relaxed text-center">
              <p>
                La gestione indipendente degli investimenti inizia da una<br/>
                domanda semplice...
              </p>
              <p className="font-serif text-2xl italic font-medium">
                Quali sono i tuoi veri obiettivi, il tuo orizzonte temporale, e la<br/>
                tua tolleranza al rischio?
              </p>
              <p className="font-bold">
                E' questo che analizziamo, in primis, durante la<br/>
                pianificazione finanziaria...
              </p>
              <p className="font-bold">
                Tutto ciò riduce al minimo la possibilità di commettere<br/>
                errori nelle scelte operative degli strumenti, in quanto<br/>
                abbiamo già chiaro il tuo status nei prossimi 5, 10, 20 o 50<br/>
                anni.
              </p>
              <p className="text-social mt-8">
                Niente commissioni nascoste, niente prodotti strutturati che<br/>
                nessuno capisce.
              </p>
              <p className="text-xl font-bold font-serif text-link">
                Solo investimenti che funzionano davvero.
              </p>
           </motion.div>
        </div>
      </Section>

      {/* 4. I 4 BOX DI VALORE */}
      <Section className="bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {[
            "Elimina sprechi e commissioni nascoste",
            "Investimenti costruiti su dati e obiettivi tuoi",
            "Portafoglio trasparente che puoi seguire",
            "Performance reali, non dietro costi inutili"
          ].map((text, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="p-8 bg-surface rounded-2xl border border-slate-100 text-center flex items-center justify-center min-h-[140px] hover:border-link transition-colors group"
            >
              <p className="font-bold text-primary group-hover:text-link transition-colors">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 5. ESEMPIO PRATICO */}
      <Section className="bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-icon/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.div {...fadeInUp} className="text-center">
             <h2 className="text-4xl text-primary font-bold font-serif mb-12">Ecco un esempio chiaro...</h2>
          </motion.div>
          
          <motion.div {...fadeInUp} className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-slate-100 space-y-8 relative">
            <h3 className="text-2xl font-bold text-primary mb-6">Francesco, 45 anni</h3>
            <div className="space-y-4 text-primary leading-relaxed">
               <p>
                 Gestisce i suoi investimenti presso la banca con cui ha il conto corrente.<br/>
               </p>
               <p>
                 Nel portafoglio ci sono fondi comuni con costi del 3% annuo, azioni consigliate dal suo promotore<br/>
                 finanziario, e una polizza unit-linked che non capisce bene.
               </p>
               <p>
                 Non sa se il portafoglio è efficiente, quanto sta costando davvero, o se è coerente con i suoi obiettivi di<br/>
                 pensionamento tra 15 anni.
               </p>
            </div>
            
            <div className="pt-8 space-y-6">
               <div className="flex gap-4 items-start p-6 bg-red-50 rounded-2xl border border-red-100">
                  <XCircle className="text-red-500 shrink-0 mt-1" />
                  <p className="text-primary font-medium">
                    <span className="font-bold">Risultato:</span> paga più del necessario in commissioni, il portafoglio non è diversificato, non<br/>
                    sa quale dovrebbe essere il suo rendimento realistico atteso.
                  </p>
               </div>
               <div className="flex gap-4 items-start p-6 bg-green-50 rounded-2xl border border-green-100">
                  <CheckCircle className="text-green-600 shrink-0 mt-1" />
                  <div>
                    <p className="text-primary font-medium mb-4">
                      <span className="font-bold">Con la consulenza indipendente,</span> abbiamo analizzato tutto il suo portafoglio, identificato<br/>
                      le inefficienze, e ricostruito un mix di asset classes calibrato su dati e studi accademici.
                    </p>
                    <p className="text-primary font-bold">
                      Stessi obiettivi, costi ridotti del 50%, trasparenza totale, e una chiara roadmap verso la<br/>
                      pensione che vuole.
                    </p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 6. STRATEGIA DI PIANIFICAZIONE */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-primary font-bold">Cosa include la nostra strategia di pianificazione finanziaria?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-primary">
          {[
            {
              title: "Analisi dello stato attuale",
              p: "Facciamo una fotografia\ncompleta di cosa possiedi\noggi, dove, a che costi, con\nquali performance.\nIdentifichiamo subito le\ninefficienze."
            },
            {
              title: "Profilazione del rischio",
              p: "Non usiamo questionari\ngenerici. Parliamo con te dei\ntuoi veri obiettivi, della tua\nsituazione personale, di\nquanto rischio puoi davvero\ntollerare."
            },
            {
              title: "Costruzione del portafoglio",
              p: "Disegniamo un mix di asset\nclasses (azioni, obbligazioni,\nimmobili, etc.) calibrato su\ndati, non su intuizioni. Ti\nspieghiamo ogni scelta."
            },
            {
              title: "Implementazione intelligente",
              p: "Non vendiamo, offriamo\nconsulenza pura. Tu decidi\ndove mantenere i tuoi\ninvestimenti e come\nimplementare le\nraccomandazioni."
            },
            {
              title: "Monitoraggio e rebalancing",
              p: "Controlliamo periodicamente\nil portafoglio, assicuriamo\nche rimanga allineato ai tuoi\nobiettivi, e facciamo\naggiustamenti quando\nnecessario."
            },
            {
              title: "Reporting trasparente",
              p: "Ricevi report chiari che ti\nmostrano esattamente cosa\npossiedi, perchè lo possiedi,\ncome sta performando, e\ncosa succede in scenari\ndiversi."
            }
          ].map((item, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="p-8 bg-surface rounded-2xl border border-slate-100 hover:border-link transition-colors group">
              <h4 className="text-xl font-bold mb-4 group-hover:text-link transition-colors">{item.title}</h4>
              <p className="whitespace-pre-line leading-relaxed">{item.p}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
           <CTAButton>Prenota una consulenza sui tuoi investimenti</CTAButton>
        </div>
      </Section>

      {/* 7. METODO GIACOMELLI */}
      <Section className="bg-surface">
        <div className="text-center mb-16 space-y-4">
           <p className="text-2xl text-link font-serif font-medium">Il percorso inizia sempre da te, non dai numeri.</p>
           <h2 className="text-4xl md:text-5xl font-medium text-primary font-bold">Come funziona il Metodo Giacomelli?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Analisi Completa",
              text: "Mappiamo tutto: cosa\npossiedi, dove, a che costi,\ncon quali performance."
            },
            {
              title: "Diagnosi",
              text: "Ti mostriamo le inefficienze,\nle opportunità perse, e i\nrischi scoperti. Tutto usando\nun linguaggio comprensibile\nanche per i \"non addetti ai\nlavori\"."
            },
            {
              title: "Progettazione",
              text: "Costruiamo il portafoglio\nideale per te, basato su dati\ne studi finanziari mirati.\nDurante il percorso, ti\nspieghiamo ogni scelta."
            },
            {
              title: "Scelta illimitata",
              text: "Possiamo selezionare\nqualsiasi strumento\npresente sul mercato.\nMigliaia di strumenti\ndisponibili, selezioniamo\nsolo il meglio per te"
            },
            {
              title: "Implementazione",
              text: "Ti aiutiamo a mettere in\npratica, con il tuo ritmo e\nsenza pressioni. Noi ti\naffianchiamo e ti guidiamo,\ntu rimani sempre al\ncomando."
            },
            {
              title: "Monitoraggio continuo",
              text: "Controlliamo\nperiodicamente,\nassicuriamo allineamento\ncon gli obiettivi, e facciamo\naggiustamenti quando\nnecessario."
            }
          ].map((item, i) => (
             <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
               <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
               <p className="text-primary whitespace-pre-line leading-relaxed">{item.text}</p>
             </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
           <CTAButton>Prenota una call conoscitiva</CTAButton>
        </div>
      </Section>

      {/* 8. I 3 PILASTRI E CONCLUSIONE */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
           <motion.div {...fadeInUp} className="space-y-8">
              <h2 className="text-4xl text-primary font-bold text-center">I 3 pilastri della nostra strategia di pianificazione finanziaria</h2>
              <ul className="space-y-6">
                {[
                  "Abbiamo a disposizione un'ampia scelta - quasi illimitata - di strumenti finanziari, i\nmigliori sul mercato, non essendoci vincoli dovuti a cataloghi di prodotti (come per\nBanche, assicurazioni e reti vendita)",
                  "La scelta dei singoli strumenti finanziari è sempre coerente con il piano finanziario\ncostruito inizialmente: per questo è sempre l'ultima attività realizzata nel processo\ndi pianificazione olistica / integrata; Nessuna soluzione standard, solo scelte\nperfezionate per le singole esigenze",
                  "I nostri clienti sono sereni anche quando i mercati sperimentano movimenti avversi,\ncrolli e scenari negativi. Il portafoglio, infatti, è creato tenendo conto già in anticipo\ndi queste potenziali avversità. Niente previsioni \"magiche\" ma operazioni create ad\narte per affrontare eventuali imprevisti."
                ].map((text, i) => (
                  <li key={i} className="flex gap-6 items-start p-6 bg-surface rounded-2xl border border-slate-100">
                    <div className="font-bold text-xl text-link w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm">{i+1})</div>
                    <p className="text-primary leading-relaxed whitespace-pre-line pt-1">{text}</p>
                  </li>
                ))}
              </ul>
           </motion.div>

           <motion.div {...fadeInUp} className="relative rounded-[3rem] overflow-hidden shadow-2xl mt-8">
              {/* Sfondo Astratto/Filigrana (crescita e sicurezza) */}
              <div className="absolute inset-0 bg-primary" />
              <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
                 alt="Crescita e Sicurezza" 
                 className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/40" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-12 p-10 lg:p-16 items-center">
                 <div className="lg:w-5/12 space-y-6">
                    <p className="text-link uppercase tracking-widest text-sm font-bold opacity-90">Gestione Investimenti Indipendente</p>
                    <h3 className="text-4xl md:text-5xl font-serif leading-tight text-white font-medium">Il servizio finanziario perfetto per chi...</h3>
                    <p className="text-white/70 text-lg leading-relaxed pt-4">Con il Metodo Giacomelli, la complessità scompare. I tuoi investimenti diventano uno strumento chiaro e affidabile al servizio dei tuoi obiettivi di vita.</p>
                 </div>
                 
                 <div className="lg:w-7/12 w-full">
                    <div className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                       <ul className="space-y-6">
                         {[
                           "Ha accumulato investimenti nel tempo e non sa se sono efficienti",
                           "Vuole sapere davvero cosa possiede e perchè",
                           "Desidera un portafoglio costruito su dati, non su intuizioni",
                           "Vuole ridurre i costi e migliorare i rendimenti",
                           "Cerca una consulenza indipendente, senza conflitti di interesse"
                         ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-start group">
                              <div className="p-1 rounded-full bg-link/10 shrink-0 mt-0.5 group-hover:bg-link/20 transition-colors">
                                <CheckCircle2 className="text-link" size={24} />
                              </div>
                              <span className="font-medium text-white/90 leading-relaxed text-lg">{item}</span>
                            </li>
                         ))}
                       </ul>
                       <div className="pt-10 flex justify-center lg:justify-start">
                         <CTAButton className="w-full text-center justify-center">Prenota una consulenza sui tuoi investimenti</CTAButton>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </Section>
    </div>
  );
}
