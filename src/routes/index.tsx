import { createFileRoute } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const IMG = {
  hero: "/media/img_04_08_52.jpg",
  facial: "/media/img_04_08_53_2.jpg",
  ambient: "/media/img_04_08_53_1.jpg",
  incense: "/media/img_04_08_53.jpg",
  ambient2: "/media/img_04_09_19_1.jpg",
  incense2: "/media/img_04_09_19.jpg",
};
const VIDEOS = ["/media/vid_0.mp4", "/media/vid_1.mp4", "/media/vid_2.mp4", "/media/vid_3.mp4"];

type Lang = "en" | "ka";
type Dict = Record<Lang, string>;
const d = (en: string, ka: string): Dict => ({ en, ka });

const T = {
  navRituals: d("Rituals", "რიტუალები"),
  navPhilosophy: d("Philosophy", "ფილოსოფია"),
  navSanctuary: d("Sanctuary", "სივრცე"),
  navVoices: d("Voices", "შეფასებები"),
  reserve: d("Reserve", "დაჯავშნა"),
  heroBadge: d("Vake, Tbilisi · Open until 11:30 pm", "ვაკე, თბილისი · ღიაა 23:30-მდე"),
  heroTitleA: d("The art of", "ხელოვნება"),
  heroTitleB: d("slowing", "შენელების"),
  heroTitleC: d(" down.", "."),
  heroCopy: d(
    "A sanctuary in Vake where DIBI Milano rituals, master therapists and quiet Georgian hospitality meet. Nothing rushed. Nothing artificial.",
    "თავშესაფარი ვაკეში, სადაც DIBI Milano-ს რიტუალები, გამოცდილი თერაპევტები და ქართული სტუმართმოყვარეობა ერთდება. არაფერი აჩქარებული. არაფერი ხელოვნური."
  ),
  bookCta: d("Book your ritual", "დაჯავშნეთ რიტუალი"),
  seeMenu: d("See the menu", "იხილეთ მენიუ"),
  reviewsCount: d("288 reviews", "288 შეფასება"),
  yearsCraft: d("Years of craft", "წლიანი გამოცდილება"),
  milanoProto: d("Milano protocols", "მილანური პროტოკოლი"),
  scroll: d("Scroll", "ქვემოთ"),
  sec01: d("01 — The Menu", "01 — მენიუ"),
  servicesTitleA: d("Rituals for", "რიტუალები"),
  servicesTitleB: d("the body you", "სხეულისთვის,"),
  servicesTitleC: d("forgot", "რომელიც დაგავიწყდათ"),
  servicesTitleD: d(" you had.", "."),
  servicesIntro: d(
    "Every treatment begins the same way — a long exhale, warm oil in the therapist's palm, the room dimmed to candlelight. What follows is unhurried, and yours alone.",
    "ყოველი პროცედურა ერთნაირად იწყება — ღრმა ამოსუნთქვა, თბილი ზეთი თერაპევტის ხელში, სანთლის შუქი. ის რაც შემდეგ ხდება — არ ჩქარობს და მხოლოდ თქვენია."
  ),
  sec02: d("02 — Philosophy", "02 — ფილოსოფია"),
  philLine1: d("Nothing injected.", "არაფერი ინიექციური."),
  philLine2: d("Nothing rushed.", "არაფერი აჩქარებული."),
  philOnly: d("Only", "მხოლოდ"),
  philLine3b: d(" hands, oil,", " ხელი, ზეთი,"),
  philLine4: d("and time.", "და დრო."),
  phil1: d(
    "For over a decade we've refused shortcuts. Our facials are built on DDP Professional and DIBI Milano protocols — result-driven Italian skincare performed by therapists who trained for years, not weekends.",
    "ათ წელზე მეტია უარს ვამბობთ გამარტივებულ გზებზე. ჩვენი ფეისიალები DDP Professional-სა და DIBI Milano-ს პროტოკოლებზეა აგებული — შედეგზე ორიენტირებული იტალიური მოვლა, თერაპევტების ხელით, რომლებმაც წლები ისწავლეს, არა კვირაები."
  ),
  phil2: d(
    "Every guest is greeted with a glass of tea. Some leave with a glass of red wine on the terrace. That's the pace.",
    "ყოველ სტუმარს ჩაის ჭიქით ვხვდებით. ზოგი წითელი ღვინის ჭიქით ტოვებს ტერასას. ეს ჩვენი ტემპია."
  ),
  stepConsult: d("Consultation", "კონსულტაცია"),
  stepConsultD: d("Skin & body read", "კანისა და სხეულის დათვალიერება"),
  stepRitual: d("The ritual", "რიტუალი"),
  stepRitualD: d("Bespoke to you", "მორგებული თქვენზე"),
  stepPause: d("The pause", "პაუზა"),
  stepPauseD: d("Tea on the terrace", "ჩაი ტერასაზე"),
  treatmentRoom: d("— Treatment Room · No. 3", "— საპროცედურო ოთახი · N3"),
  sec03: d("03 — Sanctuary", "03 — სივრცე"),
  galleryTitleA: d("A place that", "სივრცე, რომელიც"),
  galleryTitleB: d("breathes", "სუნთქავს"),
  galleryTitleC: d(" for you.", " თქვენთვის."),
  galleryCopy: d(
    "Warm woods, ginger blooms, incense drifting between rooms. Come as you are.",
    "თბილი ხე, ჯანჯაფილის ყვავილები, საკმევლის სურნელი ოთახებში. მოდით ისე, როგორც ხართ."
  ),
  sec04: d("04 — Voices", "04 — შეფასებები"),
  voicesTitleA: d("288", "288"),
  voicesTitleB: d(" guests.", " სტუმარი."),
  voicesTitleC: d("One long exhale.", "ერთი ღრმა ამოსუნთქვა."),
  onGoogle: d("4.7 on Google", "4.7 Google-ზე"),
  sec05: d("05 — Reserve", "05 — დაჯავშნა"),
  bookTitleA: d("Your", "თქვენი"),
  bookTitleB: d("quietest", "ყველაზე წყნარი"),
  bookTitleC: d("hour is waiting.", "საათი გელოდებათ."),
  bookCopy: d(
    "Reservations open daily until 11:30 pm. Walk-ins welcome, but the good hours go quickly.",
    "ჯავშანი ხელმისაწვდომია ყოველდღე 23:30-მდე. ვხვდებით ჯავშნის გარეშეც, თუმცა კარგი საათები სწრაფად იკავებს."
  ),
  bookFresha: d("Book on Fresha", "დაჯავშნა Fresha-ზე"),
  address: d("Address", "მისამართი"),
  addressLine1: d("22 Grigol Mukhadze St", "გრიგოლ მუხაძის ქ. 22"),
  addressLine2: d("Tbilisi 0162, Vake", "თბილისი 0162, ვაკე"),
  hours: d("Hours", "სამუშაო საათები"),
  everyDay: d("Every day", "ყოველდღე"),
  untilLate: d("Until 11:30 pm", "23:30-მდე"),
  house: d("Expertise", "გამოცდილება"),
  certified: d("Certified Specialists", "სერტიფიცირებული სპეციალისტები"),
  proExperience: d("Professional experience", "პროფესიული გამოცდილება"),
  footerNote: d("Made in Tbilisi with slow hands", "შექმნილია თბილისში, აუჩქარებელი ხელით"),
  bookNow: d("Book now", "დაჯავშნა"),
};

type Ctx = { lang: Lang; t: (k: Dict) => string; toggle: () => void };
const LangCtx = createContext<Ctx>({ lang: "en", t: (k) => k.en, toggle: () => {} });
const useLang = () => useContext(LangCtx);

function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Lang | null;
    if (stored === "en" || stored === "ka") setLang(stored);
  }, []);
  const toggle = () => {
    setLang((l) => {
      const next: Lang = l === "en" ? "ka" : "en";
      if (typeof window !== "undefined") window.localStorage.setItem("lang", next);
      return next;
    });
  };
  const t = (k: Dict) => k[lang];
  return <LangCtx.Provider value={{ lang, t, toggle }}>{children}</LangCtx.Provider>;
}

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className={`inline-flex items-center gap-1 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] border border-ember/40 text-cream hover:border-ember hover:bg-ember/10 backdrop-blur-md transition-all ${className}`}
    >
      <span className={lang === "en" ? "text-gradient-ember" : "text-muted-foreground"}>EN</span>
      <span className="text-ember/50">/</span>
      <span className={lang === "ka" ? "text-gradient-ember" : "text-muted-foreground"}>KA</span>
    </button>
  );
}

function useServices() {
  const { t } = useLang();
  return [
    { name: t(d("Signature Deep Tissue", "ღრმა მასაჟი")), duration: t(d("90 min", "90 წთ")), price: "₾ 220",
      body: t(d("Slow, deliberate pressure that unwinds every held-in day. Warm oils, long strokes, breath work.",
        "ნელი, გააზრებული წნევა, რომელიც ხსნის დაძაბულ დღეს. თბილი ზეთი, გრძელი მოძრაობა, სუნთქვა.")) },
    { name: t(d("DIBI Milano Facial", "DIBI Milano ფეისიალი")), duration: t(d("75 min", "75 წთ")), price: "₾ 260",
      body: t(d("Italian ritual facial built on DDP Professional and DIBI Milano protocols. No injections — pure craft.",
        "იტალიური რიტუალური ფეისიალი DDP Professional-სა და DIBI Milano-ს პროტოკოლებით. ინიექციების გარეშე — მხოლოდ ოსტატობა.")) },
    { name: t(d("Detox Body Ritual", "დეტოქს რიტუალი")), duration: t(d("120 min", "120 წთ")), price: "₾ 340",
      body: t(d("Dry brushing, mineral scrub, warming wrap and lymphatic massage. You leave lighter than you arrived.",
        "მშრალი ჯაგრისი, მინერალური სკრაბი, გამათბობელი შემოსახვევი და ლიმფური მასაჟი. ხართ უფრო მსუბუქი, ვიდრე შემოხვედით.")) },
    { name: t(d("Sauna + Massage Escape", "საუნა + მასაჟი")), duration: t(d("45 + 90 min", "45 + 90 წთ")), price: "₾ 290",
      body: t(d("Forty-five minutes in the steam sauna, then ninety in the hands of a master therapist.",
        "45 წუთი ორთქლის საუნაში, შემდეგ 90 წუთი ოსტატი თერაპევტის ხელში.")) },
    { name: t(d("Couples Retreat", "წყვილების რიტუალი")), duration: t(d("2 hours", "2 საათი")), price: "₾ 520",
      body: t(d("Side by side in candlelight, ending on the terrace with a glass of Georgian red.",
        "ერთმანეთის გვერდით სანთლის შუქზე, ტერასაზე ქართული წითელი ღვინის ჭიქით.")) },
    { name: t(d("Salt Wrap & Bodywork", "მარილის შემოსახვევი")), duration: t(d("2 hours", "2 საათი")), price: "₾ 360",
      body: t(d("Full salt wrap followed by deep tissue. Exhilarating, grounding, restorative.",
        "სრული მარილის შემოსახვევი და ღრმა მასაჟი. მაინტონიზირებელი, დამამშვიდებელი, აღმდგენი.")) },
  ];
}

function useReviews() {
  const { t } = useLang();
  return [
    { quote: t(d("Taco's hands looked like waves — they took care of my body carefully.",
        "ტაკოს ხელი ტალღას ჰგავდა — ჩემს სხეულს ფაქიზად უვლიდნენ.")),
      name: "Maya Matueva", role: t(d("Local Guide", "ადგილობრივი გიდი")) },
    { quote: t(d("I get facials every month at high-end spas in the US and have a very high bar. They did a great job.",
        "ყოველთვიურად ვიკეთებ ფეისიალს აშშ-ის მაღალი კლასის სპებში. აქ შესანიშნავად გაართვეს თავი.")),
      name: "Sasha Hoffman", role: t(d("Local Guide, USA", "ადგილობრივი გიდი, აშშ")) },
    { quote: t(d("A true gem tucked away in Vake. Body scrub, wrap and massage — done with care and precision.",
        "ნამდვილი აღმოჩენა ვაკეში. სკრაბი, შემოსახვევი და მასაჟი — სიფრთხილითა და სიზუსტით.")),
      name: "Paul Dettman", role: t(d("Visitor", "სტუმარი")) },
    { quote: t(d("Real relaxation and super quality in the heart of the city. Love the DIBI Milano products.",
        "ნამდვილი დასვენება და მაღალი ხარისხი ქალაქის ცენტრში. DIBI Milano მიყვარს.")),
      name: "Xatuna Japaridze", role: t(d("Regular", "მუდმივი სტუმარი")) },
  ];
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((n) => {
      n.classList.add("reveal");
      io.observe(n);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  return (
    <LangProvider>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Nav />
        <Hero />
        <Marquee />
        <Services />
        <Ritual />
        <Gallery />
        <Testimonials />
        <Booking />
        <Footer />
        <FloatingCTA />
      </main>
    </LangProvider>
  );
}

function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-ember/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-[0.2em] text-cream uppercase flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_12px_var(--ember)] animate-pulse" />
          Premier<span className="text-gradient-ember px-0.5">·</span>Spa
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#services" className="hover:text-cream transition-colors">{t(T.navRituals)}</a>
          <a href="#ritual" className="hover:text-cream transition-colors">{t(T.navPhilosophy)}</a>
          <a href="#gallery" className="hover:text-cream transition-colors">{t(T.navSanctuary)}</a>
          <a href="#reviews" className="hover:text-cream transition-colors">{t(T.navVoices)}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href="#book"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-cream text-xs uppercase tracking-[0.2em] overflow-hidden border border-ember/60 hover:border-transparent transition-all duration-500"
          >
            <span className="absolute inset-0 bg-[image:var(--gradient-ember)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">{t(T.reserve)}</span>
            <span className="relative inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 animate-kenburns">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMG.hero}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEOS[0]} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/10 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-heat)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-40 w-full grain">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-ember/40 bg-background/40 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] text-cream">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
            {t(T.heroBadge)}
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-cream text-balance">
            {t(T.heroTitleA)}<br />
            <em className="text-gradient-ember font-light italic">{t(T.heroTitleB)}</em>{t(T.heroTitleC)}
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {t(T.heroCopy)}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground overflow-hidden shadow-glow transition-transform duration-500 hover:scale-[1.02]"
              style={{ background: "var(--gradient-ember)" }}
            >
              <span className="absolute inset-0 bg-cream/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />
              <span className="relative">{t(T.bookCta)}</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-cream px-8 py-4 text-xs uppercase tracking-[0.25em] border border-cream/20 hover:border-ember hover:bg-cream/5 backdrop-blur-sm transition-all"
            >
              {t(T.seeMenu)}
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <div>
              <div className="font-display text-4xl text-gradient-ember normal-case tracking-normal">4.7</div>
              <div className="mt-1">{t(T.reviewsCount)}</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-4xl text-cream normal-case tracking-normal">15+</div>
              <div className="mt-1">{t(T.yearsCraft)}</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-4xl text-cream normal-case tracking-normal">DIBI</div>
              <div className="mt-1">{t(T.milanoProto)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-cream/60 animate-float">
        <span>{t(T.scroll)}</span>
        <span className="h-10 w-px bg-gradient-to-b from-ember to-transparent" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "DIBI Milano",
    "DDP Professional",
    "Deep Tissue",
    "Lymphatic Drainage",
    "Detox Wraps",
    "Aromatherapy",
    "Sauna & Steam",
    "Couples Retreat",
  ];
  return (
    <section className="border-y border-border py-6 overflow-hidden bg-secondary/40">
      <div className="flex gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} className="flex items-center gap-16">
            {s}
            <span className="text-ember">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </section>
  );
}

function Services() {
  const { t } = useLang();
  const services = useServices();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
          <div data-reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
              {t(T.sec01)}
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1]">
              {t(T.servicesTitleA)}<br />{t(T.servicesTitleB)}<br /><em className="text-gradient-ember italic">{t(T.servicesTitleC)}</em>{t(T.servicesTitleD)}
            </h2>
          </div>
          <p data-reveal className="text-muted-foreground text-lg leading-relaxed self-end max-w-lg">
            {t(T.servicesIntro)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <article
              key={s.name}
              data-reveal
              className="group relative bg-background p-10 hover:bg-secondary/40 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" style={{ background: "var(--gradient-ember)" }} />
              <div className="text-xs text-ember/60 tracking-[0.3em] uppercase mb-8">
                0{i + 1}
              </div>
              <h3 className="relative font-display text-3xl text-cream mb-4 leading-tight group-hover:text-gradient-ember transition-colors">
                {s.name}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed mb-8 min-h-[4.5rem]">
                {s.body}
              </p>
              <div className="relative flex items-baseline justify-between pt-6 border-t border-border">
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.duration}
                </span>
                <span className="font-display text-3xl text-gradient-ember">{s.price}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ritual() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="ritual" className="relative py-32 px-6 bg-secondary/30">
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-heat)" }} />
      <div ref={ref} className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div data-reveal className="relative aspect-[4/5] overflow-hidden shadow-glow">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={IMG.facial}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={VIDEOS[2]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-ember/20" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="text-xs uppercase tracking-[0.3em] text-cream/70">
              {t(T.treatmentRoom)}
            </div>
          </div>
        </div>

        <div data-reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
            {t(T.sec02)}
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1] mb-10">
            {t(T.philLine1)}<br />
            {t(T.philLine2)}<br />
            <em className="text-gradient-ember italic">{t(T.philOnly)}</em>{t(T.philLine3b)}<br />{t(T.philLine4)}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {t(T.phil1)}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t(T.phil2)}
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-ember/20">
            {[
              { n: "01", t: t(T.stepConsult), d: t(T.stepConsultD) },
              { n: "02", t: t(T.stepRitual), d: t(T.stepRitualD) },
              { n: "03", t: t(T.stepPause), d: t(T.stepPauseD) },
            ].map((step) => (
              <div key={step.n} className="group">
                <div className="text-ember text-xs tracking-[0.3em] mb-3">{step.n}</div>
                <div className="font-display text-xl text-cream mb-1 group-hover:text-gradient-ember transition-colors">{step.t}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLang();
  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
              {t(T.sec03)}
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1] max-w-xl">
              {t(T.galleryTitleA)} <em className="text-gradient-ember italic">{t(T.galleryTitleB)}</em>{t(T.galleryTitleC)}
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            {t(T.galleryCopy)}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden group">
            <video autoPlay muted loop playsInline poster={IMG.ambient} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]">
              <source src={VIDEOS[1]} type="video/mp4" />
            </video>
          </div>
          <div className="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden group">
            <img src={IMG.facial} alt="Facial ritual at Premier Spa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden group">
            <img src={IMG.incense} alt="Incense and calm at Premier Spa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
          </div>
          <div className="col-span-12 md:col-span-4 aspect-[4/5] overflow-hidden group">
            <img src={IMG.ambient2} alt="Ginger bloom and treatment room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
          </div>
          <div className="col-span-12 md:col-span-4 aspect-[4/5] overflow-hidden group">
            <video autoPlay muted loop playsInline poster={IMG.incense2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]">
              <source src={VIDEOS[3]} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useLang();
  const reviews = useReviews();
  return (
    <section id="reviews" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
            {t(T.sec04)}
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-cream leading-[1] text-balance">
            <em className="text-ember">{t(T.voicesTitleA)}</em>{t(T.voicesTitleB)}<br />{t(T.voicesTitleC)}
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2 text-ember">
            {[..."★★★★★"].map((s, i) => <span key={i} className="text-xl">{s}</span>)}
            <span className="ml-3 text-sm text-muted-foreground uppercase tracking-[0.2em]">{t(T.onGoogle)}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {reviews.map((r) => (
            <blockquote key={r.name} className="bg-background p-12">
              <div className="text-ember text-3xl font-display leading-none mb-6">"</div>
              <p className="font-display text-2xl text-cream leading-snug mb-8 text-balance">
                {r.quote}
              </p>
              <footer className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {r.name} <span className="text-ember/60">— {r.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const { t } = useLang();
  return (
    <section id="book" className="relative py-40 px-6 overflow-hidden">
      <img src={IMG.ambient2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-heat)" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
          {t(T.sec05)}
        </div>
        <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.95] text-balance">
          {t(T.bookTitleA)} <em className="text-gradient-ember italic">{t(T.bookTitleB)}</em><br />
          {t(T.bookTitleC)}
        </h2>
        <p className="mt-8 max-w-lg mx-auto text-muted-foreground text-lg">
          {t(T.bookCopy)}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://fresha.com"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 text-xs uppercase tracking-[0.25em] text-primary-foreground overflow-hidden shadow-glow transition-transform duration-500 hover:scale-[1.02]"
            style={{ background: "var(--gradient-ember)" }}
          >
            <span className="absolute inset-0 bg-cream/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />
            <span className="relative">{t(T.bookFresha)}</span>
            <span className="relative transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="tel:+995599553407"
            className="inline-flex items-center gap-3 border border-ember/60 text-cream px-10 py-5 text-xs uppercase tracking-[0.25em] hover:bg-ember/10 backdrop-blur-sm transition-all"
          >
            +995 599 55 34 07
          </a>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-10 text-left border-t border-border pt-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">{t(T.address)}</div>
            <div className="font-display text-xl text-cream">{t(T.addressLine1)}</div>
            <div className="text-sm text-muted-foreground mt-1">{t(T.addressLine2)}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">{t(T.hours)}</div>
            <div className="font-display text-xl text-cream">{t(T.everyDay)}</div>
            <div className="text-sm text-muted-foreground mt-1">{t(T.untilLate)}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">{t(T.house)}</div>
            <div className="font-display text-xl text-cream">{t(T.certified)}</div>
            <div className="text-sm text-muted-foreground mt-1">{t(T.proExperience)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <div className="font-display normal-case tracking-widest text-cream text-lg">
          Premier<span className="text-gradient-ember px-0.5">·</span>Spa & Aesthetics
        </div>
        <div>© {new Date().getFullYear()} · {t(T.footerNote)}</div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#book"
      aria-label="Book your ritual"
      className={`fixed bottom-6 right-6 z-40 group inline-flex items-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-glow rounded-full transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      style={{ background: "var(--gradient-ember)" }}
    >
      <span className="h-2 w-2 rounded-full bg-cream animate-pulse" />
      {t(T.bookNow)}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
