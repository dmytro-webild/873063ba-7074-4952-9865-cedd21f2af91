"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Star } from "lucide-react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Servizi",          id: "servizi"},
        {
          name: "Chi Siamo",          id: "about"},
        {
          name: "Contatti",          id: "contact"},
      ]}
      brandName="L’Angolo delle Fotocopie"
      button={{
        text: "Chiama Ora",        href: "tel:0957158946"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars"}}
      title="Stampe e fotocopie rapide a Catania"
      description="Servizi veloci, prezzi accessibili e massima disponibilità per studenti e professionisti. Il tuo punto di riferimento a Catania."
      buttons={[
        {
          text: "Chiama ora",          href: "tel:0957158946"},
        {
          text: "Indicazioni",          href: "https://maps.google.com"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/white-3d-glasses-corner-blue-background_23-2148188142.jpg"
      mediaAnimation="slide-up"
      avatarText="Scelto ogni giorno da oltre 500 clienti a Catania"
    />
  </div>

  <div id="servizi" data-section="servizi">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Fotocopie",          tags: ["Rapide", "Bianco/Nero", "Colore"],
          imageSrc: "http://img.b2bpic.net/free-photo/printer-icon-front-side_187299-39561.jpg"},
        {
          id: "f2",          title: "Stampe da file",          tags: ["PDF", "Email", "Chiavetta"],
          imageSrc: "http://img.b2bpic.net/free-vector/creative-devices-25-outline-icon-pack-such-as-gadget-computers-hardware-printer-gadget_1142-21282.jpg"},
        {
          id: "f3",          title: "Rilegature tesi",          tags: ["Tesi", "Documenti", "Professionali"],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-ring-binder_23-2149568970.jpg"},
      ]}
      title="I nostri servizi"
      description="Soluzioni complete per ogni tua esigenza di stampa e rilegatura."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        { type: "text", content: "Da anni punto di riferimento a Catania per studenti e professionisti." },
        { type: "image", src: "http://img.b2bpic.net/free-photo/trans-couple-taking-walk-city-streets_23-2149304568.jpg" },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Cosa dicono i nostri clienti"
      description="Valutazione media basata sulle esperienze dei nostri clienti."
      tag="4.4/5 Rating"
      tagIcon={Star}
      testimonials={[
        { id: "t1", name: "Giulia R.", handle: "@giulia_r", testimonial: "Servizio impeccabile e velocissimo. Consigliatissimo per la tesi!" },
        { id: "t2", name: "Marco S.", handle: "@marco_s", testimonial: "Prezzi ottimi e grande disponibilità anche con file complessi." },
        { id: "t3", name: "Elena L.", handle: "@elena_l", testimonial: "Il posto perfetto per stampe di qualità nel centro di Catania." },
        { id: "t4", name: "Luca M.", handle: "@luca_m", testimonial: "Staff molto cortese, mi hanno aiutato a risolvere un problema col formato." }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Dove vi trovate?", content: "Siamo in Via Lago di Nicito, 34/A, 95124 Catania." },
        { id: "q2", title: "Quali sono gli orari?", content: "Lunedì - Venerdì: 07:00 - 18:30. Sabato e Domenica: Chiuso." },
        { id: "q3", title: "Accettate file da email?", content: "Certamente, inviaci i tuoi file e ti avviseremo quando sono pronti." },
      ]}
      title="Domande frequenti"
      description="Tutto quello che devi sapere prima di passare in negozio."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      tag="Contatti"
      title="Passa a trovarci"
      description="Siamo aperti dal lunedì al venerdì. Passa in Via Lago di Nicito, 34/A per le tue stampe."
      background={{ variant: "animated-grid" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      logoText="L’Angolo delle Fotocopie"
      imageSrc="http://img.b2bpic.net/free-photo/vibrant-abstract-geometry-background_23-2148428711.jpg"
      columns={[
        {
          title: "Dove Siamo",          items: [
            { label: "Via Lago di Nicito, 34/A", href: "#" },
            { label: "Catania, CT", href: "#" },
          ],
        },
        {
          title: "Info",          items: [
            { label: "Tel: 095 715 8946", href: "tel:0957158946" },
            { label: "Privacy", href: "#" },
          ],
        },
      ]}
      copyrightText="© 2025 L’Angolo delle Fotocopie. Professionalità al tuo servizio."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
