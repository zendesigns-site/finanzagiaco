import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  CheckCircle2,
  TrendingUp,
  Scale,
  Users,
  AlertCircle,
  PiggyBank,
  Landmark
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { CTAButton } from '../components/ui/CTAButton';

export default function Planning() {
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
      <Section className="pt-32 pb-20 bg-primary relative overflow-hidden xl:min-h-[70vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img 
             src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
             alt="Pianificazione Finanziaria" 
             className="w-full h-full object-cover opacity-10 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
           <motion.div {...fadeInUp} className="space-y-6">
             <div className="inline-block px-4 py-1.5 rounded-full border border-link/30 bg-link/10 text-link text-sm font-bold tracking-widest uppercase mb-4">
               Il quadro completo
             </div>
             <h1 className="text-5xl md:text-[80px] md:leading-[1.1] font-serif text-white whitespace-pre-line">
              Pianificazione{"\n"}finanziaria olistica
            </h1>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <p className="text-2xl text-white/80 font-medium leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
              Costruiamo un piano che protegge il tuo{"\n"}patrimonio, garantisce la tua serenità e cresce{"\n"}con te.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="pt-4">
            <CTAButton className="shadow-2xl shadow-link/20">Prenota una call conoscitiva</CTAButton>
          </motion.div>
        </div>
      </Section>

      {/* 2. IL PROBLEMA */}
      <Section className="bg-surface py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight whitespace-pre-line">
              Cosa succede quando l'approccio{"\n"}finanziario è frammentato?
            </h2>
            <div className="w-20 h-1 bg-link rounded-full" />
          </motion.div>
          
          <motion.div {...fadeInUp} className="lg:col-span-7">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8 text-xl text-primary/80 leading-relaxed font-medium">
              <p className="text-2xl text-primary font-serif italic whitespace-pre-line">
                Molte persone gestiscono il patrimonio per{"\n"}compartimenti stagni: investimenti da una{"\n"}parte, previdenza da un'altra, assicurazioni{"\n"}su un altro piano ancora.
              </p>
              <div className="h-px w-full bg-slate-100" />
              <p className="whitespace-pre-line">
                Ogni decisione viene presa isolatamente,{"\n"}senza vedere il quadro complessivo.
              </p>
               <div className="p-6 bg-red-50/50 border-l-4 border-red-400 rounded-r-xl">
                 <p className="font-bold text-red-900 whitespace-pre-line">
                  Il risultato? Inefficienze nascoste,{"\n"}opportunità perse, conflitti tra le varie scelte.
                </p>
              </div>
              <p className="whitespace-pre-line">
                Questo è semplicemente quello che accade{"\n"}quando le discipline finanziarie non{"\n"}dialogano tra loro.
              </p>
              <p className="font-bold text-link text-2xl whitespace-pre-line pt-4">
                E più il patrimonio cresce, più il costo di{"\n"}questa frammentazione aumenta.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. LA SOLUZIONE */}
      <Section className="bg-white py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto">
           <motion.div {...fadeInUp} className="space-y-16">
             <div className="space-y-6">
               <p className="text-lg text-link font-bold uppercase tracking-widest">
                 Pianificazione finanziaria olistica
               </p>
               <h2 className="text-5xl md:text-6xl font-serif text-primary">
                 Quali sono i tuoi obiettivi futuri?
               </h2>
             </div>
             
             <div className="grid md:grid-cols-2 gap-12 text-xl text-primary/80 leading-relaxed">
                <div className="space-y-8">
                  <p className="whitespace-pre-line">
                    La pianificazione finanziaria olistica parte da una{"\n"}domanda...
                  </p>
                  <div className="p-8 bg-link text-white rounded-3xl rounded-tr-none shadow-lg">
                    <p className="font-serif text-3xl leading-tight whitespace-pre-line">
                      Quali sono i tuoi obiettivi di vita nei prossimi 10-20 anni?
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8 md:pt-12">
                  <p className="whitespace-pre-line">
                    Da lì, costruiamo un piano integrato che coordina ogni{"\n"}aspetto del tuo patrimonio (investimenti, previdenza,{"\n"}protezione, fiscalità, successione) come un sistema{"\n"}unico.
                  </p>
                  <p className="font-bold text-3xl text-primary whitespace-pre-line font-serif italic">
                    Non separato. Non isolato. Unico.
                  </p>
                  <p className="whitespace-pre-line text-lg">
                    Ogni scelta è valutata per il suo impatto su tutte le altre: la{"\n"}decisione di un investimento impatta la tassazione,{"\n"}quella previdenziale influisce sulla tua liquidità futura.
                  </p>
                </div>
             </div>
           </motion.div>
        </div>
      </Section>

      {/* 4. COSA INCLUDE LA NOSTRA STRATEGIA (BENTO GRID) */}
      <section className="py-24 bg-surface text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Cosa include la nostra strategia?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
            {/* 1. Investimenti */}
            <motion.div {...fadeInUp} className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center">
              <TrendingUp className="text-[#C5A572] mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary">Investimenti</h3>
              <p className="text-primary/80 leading-relaxed text-lg">
                Costruiamo un portafoglio su misura, basato su dati e studi accademici, non su prodotti da spingere. Ogni asset è scelto per come si integra nel tuo piano complessivo.
              </p>
            </motion.div>
            
            {/* 2. Pianificazione previdenziale */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center">
              <PiggyBank className="text-[#C5A572] mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary">Pianificazione previdenziale</h3>
              <p className="text-primary/80 leading-relaxed text-lg">
                Mappiamo la tua posizione pensionistica (INPS, casse, fondi, TFR), identifichiamo il gap tra quello che riceverai e quello che ti servirà davvero, e costruiamo un piano di integrazione realistica e sostenibile.
              </p>
            </motion.div>

            {/* 3. Protezione patrimoniale */}
            <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center">
              <ShieldCheck className="text-[#C5A572] mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary">Protezione patrimoniale</h3>
              <p className="text-primary/80 leading-relaxed text-lg">
                Analizziamo i tuoi rischi reali (invalidità, premorienza, contenzioso professionale) e costruiamo una rete di protezione assicurativa e legale. Non polizze inutili: solo coperture con vero valore.
              </p>
            </motion.div>

            {/* 4. Ottimizzazione fiscale */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center">
              <Scale className="text-[#C5A572] mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary">Ottimizzazione fiscale</h3>
              <p className="text-primary/80 leading-relaxed text-lg">
                Riduciamo il carico fiscale sugli investimenti, sulla previdenza e sul patrimonio attraverso strategie legali, trasparenti e integrate nel piano.
              </p>
            </motion.div>

            {/* 5. Architettura patrimoniale e protezione */}
            <motion.div {...fadeInUp} className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center">
              <Landmark className="text-[#C5A572] mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary">Architettura patrimoniale e protezione</h3>
              <p className="text-primary/80 leading-relaxed text-lg">
                Quando necessario, progettiamo un'architettura legale su misura (Trust, Affidamento Fiduciario, holding, fondi patrimoniali) per segregare i beni dai rischi e garantire un passaggio generazionale ordinato.
              </p>
            </motion.div>

            {/* 6. Passaggio generazionale */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-center">
              <Users className="text-[#C5A572] mb-6" size={36} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-4 font-serif text-primary">Passaggio generazionale</h3>
              <p className="text-primary/80 leading-relaxed text-lg">
                Analizziamo l'asse ereditario, le quote di riserva, le donazioni già effettuate e gli strumenti in essere, costruendo una strategia che sia fiscalmente efficiente, giuridicamente solida e coerente con le tue volontà.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. IL METODO GIACOMELLI (PERCORSO VERTICALE) */}
      <Section className="bg-primary text-white py-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-[#000510] opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10 px-4 md:px-0">
          <div className="mb-24 space-y-6">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-3xl leading-tight">Il percorso inizia sempre da te, non dai numeri. Come funziona il Metodo Giacomelli?</h2>
          </div>
          
          <div className="relative">
            {/* Linea verticale */}
            <div className="absolute left-[23px] md:left-[50px] top-8 bottom-8 w-px bg-gradient-to-b from-[#C5A572]/0 via-[#C5A572]/40 to-[#C5A572]/0 z-0" />
            
            <div className="space-y-12">
              {[
                {
                  title: "Ascolto profondo",
                  text: "Incontri dedicati per capire la tua storia, i tuoi valori, i tuoi obiettivi di vita, le tue paure. Questo non è un questionario: è un dialogo."
                },
                {
                  title: "Analisi completa",
                  text: "Mappiamo tutto: investimenti, previdenza, immobili, debiti, rischi operativi e professionali. Vediamo quello che funziona e quello che non funziona."
                },
                {
                  title: "Diagnosi",
                  text: "Ti mostriamo le inefficienze, le opportunità perse, i rischi scoperti. Tutto in linguaggio semplice, senza tecnicismi."
                },
                {
                  title: "Progettazione",
                  text: "Costruiamo il piano integrato, coordinando ogni aspetto. Ti spieghiamo ogni scelta e il motivo per cui ha senso per la tua situazione."
                },
                {
                  title: "Implementazione",
                  text: "Ti aiutiamo a mettere in pratica, con il tuo ritmo e senza pressioni. Non gestiamo il denaro direttamente: tu rimani sempre al comando."
                },
                {
                  title: "Monitoraggio continuo",
                  text: "Aggiorniamo il piano quando la tua vita cambia, quando i mercati evolvono, quando i tuoi obiettivi si trasformano."
                }
              ].map((item, i) => (
                 <motion.div key={i} {...fadeInUp} transition={{ delay: 0.1 }} className="relative flex gap-6 md:gap-16 items-start">
                   {/* Nodo circolare con numero */}
                   <div className="w-[48px] md:w-[100px] shrink-0 flex justify-center relative mt-2 z-10">
                      <div className="w-12 h-12 rounded-full bg-[#C5A572]/20 border border-[#C5A572] flex items-center justify-center text-[#C5A572] font-serif text-xl ring-8 ring-primary shadow-[0_0_15px_rgba(197,165,114,0.4)]">
                        {i+1}
                      </div>
                   </div>
                   
                   {/* Contenuto step */}
                   <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-10 rounded-3xl hover:bg-white/10 transition-colors mt-0">
                      <h4 className="text-3xl font-serif text-white mb-4">{item.title}</h4>
                      <p className="text-white/80 leading-relaxed text-lg">{item.text}</p>
                   </div>
                 </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 6. CONCLUSIONE */}
      <Section className="bg-white py-32">
        <div className="max-w-5xl mx-auto space-y-16">
           <motion.div {...fadeInUp} className="bg-surface border border-slate-200 rounded-[3rem] overflow-hidden shadow-xl">
              <div className="flex flex-col lg:flex-row">
                 <div className="lg:w-5/12 p-12 lg:p-16 flex flex-col justify-center bg-link text-white">
                    <div className="mb-6 border-b border-white/20 pb-4 inline-block self-start">
                      <p className="uppercase tracking-widest text-sm font-bold opacity-80">Giacomelli - Pianificazione finanziaria olistica</p>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif leading-tight">La nostra guida alla pianificazione finanziaria è perfetto per chi...</h3>
                 </div>
                 
                 <div className="lg:w-7/12 p-10 lg:p-16">
                     <ul className="space-y-8">
                       {[
                         "Ha un patrimonio complesso e sente che non è gestito al meglio.",
                         "Vuole proteggersi dai rischi che contano davvero.",
                         "Desidera una visione chiara di come investimenti, tasse e pensione si parlano tra loro.",
                         "Vuole un consulente indipendente che faccia gli interessi della famiglia e non della banca."
                       ].map((item, i) => (
                          <li key={i} className="flex gap-6 items-start group">
                            <div className="p-2 rounded-full bg-link/10 shrink-0 mt-1 shadow-sm">
                              <CheckCircle2 className="text-link" size={24} />
                            </div>
                            <span className="font-medium text-primary leading-relaxed text-xl">{item}</span>
                          </li>
                       ))}
                     </ul>
                 </div>
              </div>
           </motion.div>
        </div>
      </Section>

      {/* 7. CTA FINALE */}
      <Section className="bg-surface py-24">
        <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto space-y-8">
           <h2 className="text-4xl font-serif text-primary font-bold">Prenota una call conoscitiva. Capiamo insieme come coordinare le tue scelte.</h2>
           <div className="flex justify-center pt-4">
             <CTAButton>Prenota una call conoscitiva</CTAButton>
           </div>
        </motion.div>
      </Section>
    </div>
  );
}
