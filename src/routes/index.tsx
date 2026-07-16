import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const FRESHA_URL =
  "https://www.fresha.com/book-now/dibi-milano-spa-and-aesthetics-y11fuptd/services?lid=290370&share&pId=96132";

const IMG = {
  hero: "/media/img_04_08_52.jpg",
  facial: "/media/img_04_08_53_2.jpg",
  ambient: "/media/img_04_08_53_1.jpg",
  incense: "/media/img_04_08_53.jpg",
  ambient2: "/media/img_04_09_19_1.jpg",
  incense2: "/media/img_04_09_19.jpg",
};
const VIDEOS = ["/media/vid_0.mp4", "/media/vid_1.mp4", "/media/vid_2.mp4", "/media/vid_3.mp4"];

const SERVICES = [
  {
    name: "Body Massage & Wellness",
    duration: "60 – 90 min",
    price: "from ₾ 180",
    body: "Deep tissue, Swedish, aromatherapy and lymphatic drainage — slow, deliberate pressure that unwinds every held-in day.",
  },
  {
    name: "DIBI Milano Facial",
    duration: "60 – 75 min",
    price: "from ₾ 220",
    body: "Italian ritual facials on DDP Professional and DIBI Milano protocols. Cleansing, treatment and face massage — no injections, pure craft.",
  },
  {
    name: "Body Aesthetic Treatments",
    duration: "60 – 120 min",
    price: "from ₾ 260",
    body: "Contouring, detox wraps and firming rituals for a body that feels — and looks — lighter than it arrived.",
  },
  {
    name: "Sauna · Steam · Infrared",
    duration: "45 min",
    price: "from ₾ 90",
    body: "Finnish sauna, aromatic steam and infrared cabins. Sweat out the week, then meet the therapist warm and open.",
  },
  {
    name: "Diode Laser Epilation",
    duration: "15 – 90 min",
    price: "from ₾ 60",
    body: "Medical-grade diode laser for women and men. Comfortable, precise, permanent — performed by certified specialists.",
  },
  {
    name: "Brow & Lash Studio",
    duration: "45 – 90 min",
    price: "from ₾ 80",
    body: "Lamination for brows and lashes, plus classic and volume eyelash extensions — quiet, precise, framing everything.",
  },
];

const REVIEWS = [
  { quote: "Taco's hands looked like waves — they took care of my body carefully.", name: "Maya Matueva", role: "Local Guide" },
  { quote: "I get facials every month at high-end spas in the US and have a very high bar. They did a great job.", name: "Sasha Hoffman", role: "Local Guide, USA" },
  { quote: "A true gem tucked away in Vake. Body scrub, wrap and massage — done with care and precision.", name: "Paul Dettman", role: "Visitor" },
  { quote: "Real relaxation and super quality in the heart of the city. Love the DIBI Milano products.", name: "Xatuna Japaridze", role: "Regular" },
];

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
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <WaveDivider />
      <Ritual />
      <Gallery />
      <WaveDivider flip />
      <Testimonials />
      <Booking />
      <Footer />
      <OceanSound />
      <FloatingCTA />
    </main>
  );
}

function Nav() {
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
          <a href="#services" className="hover:text-cream transition-colors">Rituals</a>
          <a href="#ritual" className="hover:text-cream transition-colors">Philosophy</a>
          <a href="#gallery" className="hover:text-cream transition-colors">Sanctuary</a>
          <a href="#reviews" className="hover:text-cream transition-colors">Voices</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-cream text-xs uppercase tracking-[0.2em] overflow-hidden border border-ember/60 hover:border-transparent transition-all duration-500"
          >
            <span className="absolute inset-0 bg-[image:var(--gradient-ember)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Reserve</span>
            <span className="relative inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
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
      <div className="absolute inset-0 caustics" />
      <Bubbles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-40 w-full grain">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-ember/40 bg-background/40 backdrop-blur-md text-[10px] uppercase tracking-[0.3em] text-cream">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
            Vake, Tbilisi · Open until 11:30 pm
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-cream text-balance">
            The art of<br />
            <em className="text-gradient-ember font-light italic">drifting</em> away.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A sanctuary in Vake with the hush of a slow morning by the sea — DIBI Milano rituals, master therapists, and quiet Georgian hospitality. Nothing rushed. Nothing artificial.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={FRESHA_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground overflow-hidden shadow-glow transition-transform duration-500 hover:scale-[1.02]"
              style={{ background: "var(--gradient-ember)" }}
            >
              <span className="absolute inset-0 bg-cream/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />
              <span className="relative">Book your escape</span>
              <span className="relative transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-cream px-8 py-4 text-xs uppercase tracking-[0.25em] border border-cream/20 hover:border-ember hover:bg-cream/5 backdrop-blur-sm transition-all"
            >
              See services
            </a>
          </div>
          <div className="mt-5 text-[11px] uppercase tracking-[0.25em] text-cream/50">
            Rituals from ₾ 60 · Evenings fill first — reserve yours
          </div>

          <div className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <div>
              <div className="font-display text-4xl text-gradient-ember normal-case tracking-normal">4.7</div>
              <div className="mt-1">288 reviews</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-4xl text-cream normal-case tracking-normal">15+</div>
              <div className="mt-1">Years of craft</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-4xl text-cream normal-case tracking-normal">DIBI</div>
              <div className="mt-1">Milano protocols</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-cream/60 animate-float">
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ember to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 z-[5]">
        <WaveDivider bare />
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
    "Ocean Calm",
    "Golden-Hour Glow",
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
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-32 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
          <div data-reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
              01 — The Menu
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1]">
              Rituals for<br />the body you<br /><em className="text-gradient-ember italic">forgot</em> you had.
            </h2>
          </div>
          <p data-reveal className="text-muted-foreground text-lg leading-relaxed self-end max-w-lg">
            Every treatment begins the same way — a long exhale, warm oil in the therapist's palm, the room dimmed to candlelight, somewhere the hush of waves. What follows is unhurried, and yours alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((s, i) => (
            <a
              key={s.name}
              href={FRESHA_URL}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className="group relative block bg-background p-10 hover:bg-secondary/40 transition-all duration-500 cursor-pointer overflow-hidden"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ritual() {
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
              — Treatment Room · No. 3
            </div>
          </div>
        </div>

        <div data-reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
            02 — Philosophy
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1] mb-10">
            Nothing injected.<br />
            Nothing rushed.<br />
            <em className="text-gradient-ember italic">Only</em> hands, oil,<br />and time.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            For over a decade we've refused shortcuts. Our facials are built on DDP Professional and DIBI Milano protocols — result-driven Italian skincare performed by therapists who trained for years, not weekends.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every guest is greeted with a glass of tea. Some leave with a glass of red wine on the terrace. That's the pace.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-ember/20">
            {[
              { n: "01", t: "Consultation", d: "Skin & body read" },
              { n: "02", t: "The ritual", d: "Bespoke to you" },
              { n: "03", t: "The pause", d: "Tea on the terrace" },
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
  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
              03 — Sanctuary
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1] max-w-xl">
              A place that <em className="text-gradient-ember italic">breathes</em> like the tide.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Warm woods, ginger blooms, incense drifting between rooms like sea mist. Come as you are.
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
  return (
    <section id="reviews" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
            04 — Voices
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-cream leading-[1] text-balance">
            <em className="text-ember">288</em> guests.<br />One long exhale.
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2 text-ember">
            {[..."★★★★★"].map((s, i) => <span key={i} className="text-xl">{s}</span>)}
            <span className="ml-3 text-sm text-muted-foreground uppercase tracking-[0.2em]">4.7 on Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {REVIEWS.map((r) => (
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
  return (
    <section id="book" className="relative py-40 px-6 overflow-hidden">
      <img src={IMG.ambient2} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-heat)" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
          05 — Reserve
        </div>
        <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.95] text-balance">
          Catch the <em className="text-gradient-ember italic">calm</em><br />
          before it's gone.
        </h2>
        <p className="mt-8 max-w-lg mx-auto text-muted-foreground text-lg">
          Reservations open daily until 11:30 pm. Walk-ins welcome — but like the best spots on the sand, the good hours go first.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 text-xs uppercase tracking-[0.25em] text-primary-foreground overflow-hidden shadow-glow transition-transform duration-500 hover:scale-[1.02]"
            style={{ background: "var(--gradient-ember)" }}
          >
            <span className="absolute inset-0 bg-cream/20 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />
            <span className="relative">Book on Fresha</span>
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
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Address</div>
            <div className="font-display text-xl text-cream">22 Grigol Mukhadze St</div>
            <div className="text-sm text-muted-foreground mt-1">Tbilisi 0162, Vake</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Hours</div>
            <div className="font-display text-xl text-cream">Every day</div>
            <div className="text-sm text-muted-foreground mt-1">Until 11:30 pm</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Expertise</div>
            <div className="font-display text-xl text-cream">Certified Specialists</div>
            <div className="text-sm text-muted-foreground mt-1">Professional experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <div className="font-display normal-case tracking-widest text-cream text-lg">
          Premier<span className="text-gradient-ember px-0.5">·</span>Spa & Aesthetics
        </div>
        <div>© {new Date().getFullYear()} · Made in Tbilisi, tuned to the tide</div>
      </div>
    </footer>
  );
}

const WAVE_PATH =
  "M0,64 C266,96 533,32 800,64 C1066,96 1333,32 1600,64 L1600,100 L0,100 Z";

function WaveDivider({ flip = false, bare = false }: { flip?: boolean; bare?: boolean }) {
  return (
    <div
      aria-hidden
      className={`relative h-14 md:h-20 overflow-hidden pointer-events-none ${flip ? "rotate-180" : ""} ${bare ? "" : "-my-px"}`}
    >
      <svg
        className="wave-track"
        style={{ animationDuration: "22s" }}
        viewBox="0 0 1600 100"
        preserveAspectRatio="none"
      >
        <path d={WAVE_PATH} fill="oklch(0.68 0.17 195 / 0.08)" />
      </svg>
      <svg
        className="wave-track"
        style={{ animationDuration: "14s", animationDirection: "reverse" }}
        viewBox="0 0 1600 100"
        preserveAspectRatio="none"
      >
        <path d={WAVE_PATH} fill="oklch(0.60 0.16 215 / 0.12)" />
      </svg>
      <svg
        className="wave-track"
        style={{ animationDuration: "9s" }}
        viewBox="0 0 1600 100"
        preserveAspectRatio="none"
      >
        <path d={WAVE_PATH} fill="oklch(0.82 0.13 200 / 0.10)" />
      </svg>
    </div>
  );
}

const BUBBLES = Array.from({ length: 14 }, (_, i) => ({
  left: ((i * 7.3 + 4) % 96) + 2,
  size: 5 + ((i * 13) % 11),
  delay: (i * 1.9) % 16,
  duration: 12 + ((i * 5) % 9),
}));

function Bubbles() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function OceanSound() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<{ ctx: AudioContext; master: GainNode } | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.ctx.close().catch(() => {});
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) {
      const ctx = new AudioContext();
      // Loop of brown noise — the closest simple synthesis to breaking surf.
      const seconds = 6;
      const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let last = 0;
      for (let i = 0; i < data.length; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.5;
      }
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 650;
      // Slow LFO on gain makes the noise swell and retreat like waves.
      const swell = ctx.createGain();
      swell.gain.value = 0.55;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.09;
      const lfoDepth = ctx.createGain();
      lfoDepth.gain.value = 0.4;
      lfo.connect(lfoDepth);
      lfoDepth.connect(swell.gain);
      const master = ctx.createGain();
      master.gain.value = 0;
      src.connect(filter);
      filter.connect(swell);
      swell.connect(master);
      master.connect(ctx.destination);
      src.start();
      lfo.start();
      audioRef.current = { ctx, master };
    }
    const { ctx, master } = audioRef.current;
    if (on) {
      master.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
      setOn(false);
    } else {
      void ctx.resume();
      master.gain.setTargetAtTime(0.35, ctx.currentTime, 1.2);
      setOn(true);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Mute ocean sound" : "Play ocean sound"}
      className={`fixed bottom-6 left-6 z-40 inline-flex items-center gap-3 rounded-full border px-5 py-3 text-[10px] uppercase tracking-[0.25em] backdrop-blur-md transition-all duration-500 ${
        on
          ? "border-ember/70 bg-ember/15 text-cream shadow-glow"
          : "border-cream/20 bg-background/50 text-cream/70 hover:border-ember/50 hover:text-cream"
      }`}
    >
      <span className="flex items-end gap-[3px] h-3 text-ember">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="soundbar"
            style={{
              animationDelay: `${i * 0.18}s`,
              animationPlayState: on ? "running" : "paused",
              transform: on ? undefined : "scaleY(0.3)",
            }}
          />
        ))}
      </span>
      {on ? "Waves on" : "Hear the sea"}
    </button>
  );
}

function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={FRESHA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Book your ritual"
      className={`fixed bottom-6 right-6 z-40 group inline-flex items-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-glow rounded-full transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      style={{ background: "var(--gradient-ember)" }}
    >
      <span className="h-2 w-2 rounded-full bg-cream animate-pulse" />
      Book now
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
