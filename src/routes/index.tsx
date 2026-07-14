import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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

const services = [
  {
    name: "Signature Deep Tissue",
    duration: "90 min",
    price: "₾ 220",
    body: "Slow, deliberate pressure that unwinds every held-in day. Warm oils, long strokes, breath work.",
  },
  {
    name: "DIBI Milano Facial",
    duration: "75 min",
    price: "₾ 260",
    body: "Italian ritual facial built on DDP Professional and DIBI Milano protocols. No injections — pure craft.",
  },
  {
    name: "Detox Body Ritual",
    duration: "120 min",
    price: "₾ 340",
    body: "Dry brushing, mineral scrub, warming wrap and lymphatic massage. You leave lighter than you arrived.",
  },
  {
    name: "Sauna + Massage Escape",
    duration: "45 + 90 min",
    price: "₾ 290",
    body: "Forty-five minutes in the steam sauna, then ninety in the hands of a master therapist.",
  },
  {
    name: "Couples Retreat",
    duration: "2 hours",
    price: "₾ 520",
    body: "Side by side in candlelight, ending on the terrace with a glass of Georgian red.",
  },
  {
    name: "Salt Wrap & Bodywork",
    duration: "2 hours",
    price: "₾ 360",
    body: "Full salt wrap followed by deep tissue. Exhilarating, grounding, restorative.",
  },
];

const reviews = [
  {
    quote: "Taco's hands looked like waves — they took care of my body carefully.",
    name: "Maya Matueva",
    role: "Local Guide",
  },
  {
    quote: "I get facials every month at high-end spas in the US and have a very high bar. They did a great job.",
    name: "Sasha Hoffman",
    role: "Local Guide, USA",
  },
  {
    quote: "A true gem tucked away in Vake. Body scrub, wrap and massage — done with care and precision.",
    name: "Paul Dettman",
    role: "Visitor",
  },
  {
    quote: "Real relaxation and super quality in the heart of the city. Love the DIBI Milano products.",
    name: "Xatuna Japaridze",
    role: "Regular",
  },
];

function Index() {
  return (
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
          ? "bg-background/80 backdrop-blur-xl border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-widest text-cream uppercase">
          Premier<span className="text-ember">·</span>Spa
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#services" className="hover:text-cream transition-colors">Rituals</a>
          <a href="#ritual" className="hover:text-cream transition-colors">Philosophy</a>
          <a href="#gallery" className="hover:text-cream transition-colors">Sanctuary</a>
          <a href="#reviews" className="hover:text-cream transition-colors">Voices</a>
        </nav>
        <a
          href="#book"
          className="group inline-flex items-center gap-2 px-5 py-2.5 border border-ember/60 text-cream text-xs uppercase tracking-[0.2em] hover:bg-ember hover:border-ember transition-all duration-500"
        >
          Reserve
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-40 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.3em] text-ember">
            <span className="h-px w-10 bg-ember" />
            Tbilisi · Est. since a very long time
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-cream text-balance">
            The art of<br />
            <em className="text-ember font-light">slowing</em> down.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A women-owned sanctuary in Vake where DIBI Milano rituals, master therapists
            and quiet Georgian hospitality meet. Nothing rushed. Nothing artificial.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="group inline-flex items-center gap-3 bg-ember text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-cream hover:text-background transition-all duration-500"
            >
              Book your ritual
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-cream px-8 py-4 text-xs uppercase tracking-[0.25em] border border-border hover:border-ember transition-colors"
            >
              See the menu
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <div>
              <div className="font-display text-3xl text-cream normal-case tracking-normal">4.7</div>
              <div className="mt-1">288 reviews</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-cream normal-case tracking-normal">15+</div>
              <div className="mt-1">Years of craft</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-cream normal-case tracking-normal">DIBI</div>
              <div className="mt-1">Milano protocols</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 text-[10px] uppercase tracking-[0.3em] text-cream/50 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
        Open · Closes 11:30 pm
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
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
              01 — The Menu
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1]">
              Rituals for<br />the body you<br /><em className="text-ember">forgot</em> you had.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed self-end max-w-lg">
            Every treatment begins the same way — a long exhale, warm oil in the therapist's palm,
            the room dimmed to candlelight. What follows is unhurried, and yours alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <article
              key={s.name}
              className="group relative bg-background p-10 hover:bg-secondary/50 transition-all duration-500 cursor-pointer"
            >
              <div className="text-xs text-ember/60 tracking-[0.3em] uppercase mb-8">
                0{i + 1}
              </div>
              <h3 className="font-display text-3xl text-cream mb-4 leading-tight">
                {s.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 min-h-[4.5rem]">
                {s.body}
              </p>
              <div className="flex items-baseline justify-between pt-6 border-t border-border">
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {s.duration}
                </span>
                <span className="font-display text-2xl text-ember">{s.price}</span>
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
  return (
    <section id="ritual" className="relative py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
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
          <div className="absolute bottom-8 left-8 right-8">
            <div className="text-xs uppercase tracking-[0.3em] text-cream/70">
              — Treatment Room · No. 3
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
            02 — Philosophy
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1] mb-10">
            Nothing injected.<br />
            Nothing rushed.<br />
            <em className="text-ember">Only</em> hands, oil,<br />and time.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            For over a decade we've refused shortcuts. Our facials are built on
            DDP Professional and DIBI Milano protocols — result-driven Italian skincare
            performed by therapists who trained for years, not weekends.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every guest is greeted with a glass of tea. Some leave with a glass of red wine
            on the terrace. That's the pace.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            {[
              { n: "01", t: "Consultation", d: "Skin & body read" },
              { n: "02", t: "The ritual", d: "Bespoke to you" },
              { n: "03", t: "The pause", d: "Tea on the terrace" },
            ].map((step) => (
              <div key={step.n}>
                <div className="text-ember text-xs tracking-[0.3em] mb-3">{step.n}</div>
                <div className="font-display text-xl text-cream mb-1">{step.t}</div>
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
              A place that <em className="text-ember">breathes</em> for you.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Warm woods, ginger blooms, incense drifting between rooms. Come as you are.
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
  return (
    <section id="book" className="relative py-40 px-6 overflow-hidden">
      <img src={IMG.ambient} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-ember mb-6">
          05 — Reserve
        </div>
        <h2 className="font-display text-6xl md:text-8xl text-cream leading-[0.95] text-balance">
          Your <em className="text-ember">quietest</em><br />
          hour is waiting.
        </h2>
        <p className="mt-8 max-w-lg mx-auto text-muted-foreground text-lg">
          Reservations open daily until 11:30 pm. Walk-ins welcome, but the good hours go quickly.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://fresha.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-ember text-primary-foreground px-10 py-5 text-xs uppercase tracking-[0.25em] hover:bg-cream hover:text-background transition-all duration-500"
          >
            Book on Fresha
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="tel:+995599553407"
            className="inline-flex items-center gap-3 border border-ember/60 text-cream px-10 py-5 text-xs uppercase tracking-[0.25em] hover:bg-ember/10 transition-all"
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
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">House</div>
            <div className="font-display text-xl text-cream">Women-owned</div>
            <div className="text-sm text-muted-foreground mt-1">LGBTQ+ friendly</div>
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
          Premier<span className="text-ember">·</span>Spa & Aesthetics
        </div>
        <div>© {new Date().getFullYear()} · Made in Tbilisi with slow hands</div>
      </div>
    </footer>
  );
}
