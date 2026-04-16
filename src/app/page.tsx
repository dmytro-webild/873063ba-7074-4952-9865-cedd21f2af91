"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

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
          name: "Home",
          id: "hero",
        },
        {
          name: "Servizi",
          id: "servizi",
        },
        {
          name: "Chi Siamo",
          id: "about",
        },
        {
          name: "Contatti",
          id: "contact",
        },
      ]}
      brandName="L’Angolo delle Fotocopie"
      button={{
        text: "Chiama Ora",
        href: "tel:0957158946",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Stampe e fotocopie rapide a Catania"
      description="Servizi veloci, prezzi accessibili e massima disponibilità per studenti e professionisti. Il tuo punto di riferimento a Catania."
      buttons={[
        {
          text: "Chiama ora",
          href: "tel:0957158946",
        },
        {
          text: "Indicazioni",
          href: "https://maps.google.com",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/white-3d-glasses-corner-blue-background_23-2148188142.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-vibrant-bent-paper-sheets_23-2148428696.jpg",
          alt: "Cliente soddisfatto",
        },
        {
          src: "http://img.b2bpic.net/free-photo/colorful-paper-sheets-background_23-2148632494.jpg",
          alt: "Studente",
        },
        {
          src: "http://img.b2bpic.net/free-photo/3d-geometric-abstract-twist-background_1048-17489.jpg",
          alt: "Professionista",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-vibrant-bent-paper-sheets-with-copy-space_23-2148428701.jpg",
          alt: "Studente universitario",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-friends-traveling-together_23-2149512421.jpg",
          alt: "Cliente abituale",
        },
      ]}
      avatarText="Scelto ogni giorno da oltre 500 clienti a Catania"
      marqueeItems={[
        {
          type: "text",
          text: "Stampe Laser",
        },
        {
          type: "text",
          text: "Rilegature Professionali",
        },
        {
          type: "text",
          text: "Servizio Veloce",
        },
        {
          type: "text",
          text: "Qualità Garantita",
        },
        {
          type: "text",
          text: "Prezzi Studenti",
        },
      ]}
    />
  </div>

  <div id="servizi" data-section="servizi">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Fotocopie",
          tags: [
            "Rapide",
            "Bianco/Nero",
            "Colore",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/printer-icon-front-side_187299-39561.jpg",
        },
        {
          id: "f2",
          title: "Stampe da file",
          tags: [
            "PDF",
            "Email",
            "Chiavetta",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/creative-devices-25-outline-icon-pack-such-as-gadget-computers-hardware-printer-gadget_1142-21282.jpg",
        },
        {
          id: "f3",
          title: "Rilegature tesi",
          tags: [
            "Tesi",
            "Documenti",
            "Professionali",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-ring-binder_23-2149568970.jpg",
        },
      ]}
      title="I nostri servizi"
      description="Soluzioni complete per ogni tua esigenza di stampa e rilegatura."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Da anni punto di riferimento a Catania per studenti e professionisti.",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/trans-couple-taking-walk-city-streets_23-2149304568.jpg",
        },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Giulia R.",
          imageSrc: "http://img.b2bpic.net/free-psd/camera-outline-logo-design_23-2151263993.jpg",
        },
        {
          id: "t2",
          name: "Marco S.",
          imageSrc: "http://img.b2bpic.net/free-vector/website-settings-icon-collection_1051-1715.jpg",
        },
        {
          id: "t3",
          name: "Elena L.",
          imageSrc: "http://img.b2bpic.net/free-photo/book-icon-front-side_187299-39430.jpg",
        },
        {
          id: "t4",
          name: "Luca M.",
          imageSrc: "http://img.b2bpic.net/free-vector/printing-industry-illustration_23-2148880434.jpg",
        },
        {
          id: "t5",
          name: "Sofia V.",
          imageSrc: "http://img.b2bpic.net/free-vector/20-printing-blue-color-icon-pack-like-colors-ink-color-color-swatch_1142-24366.jpg",
        },
      ]}
      cardTitle="Cosa dicono i nostri clienti"
      cardTag="Recensioni"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Dove vi trovate?",
          content: "Siamo in Via Lago di Nicito, 34/A, 95124 Catania.",
        },
        {
          id: "q2",
          title: "Quali sono gli orari?",
          content: "Siamo aperti dal lunedì al venerdì dalle 07:00 alle 18:30.",
        },
        {
          id: "q3",
          title: "Accettate file da email?",
          content: "Certamente, puoi inviarci i tuoi file e passare a ritirarli.",
        },
      ]}
      title="Domande frequenti"
      description="Tutto quello che devi sapere prima di passare in negozio."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "150+",
          title: "Recensioni",
          items: [
            "Clienti soddisfatti",
            "Valutazione alta",
          ],
        },
        {
          id: "m2",
          value: "4.4/5",
          title: "Rating",
          items: [
            "Qualità garantita",
            "Personale esperto",
          ],
        },
        {
          id: "m3",
          value: "Anni",
          title: "Esperienza",
          items: [
            "Servizio puntuale",
            "Affidabilità",
          ],
        },
      ]}
      title="I nostri numeri"
      description="La tua soddisfazione è la nostra priorità."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Contatti"
      title="Passa a trovarci"
      description="Siamo aperti dal lunedì al venerdì. Passa in Via Lago di Nicito, 34/A per le tue stampe."
      imageSrc="http://img.b2bpic.net/free-photo/quebec-city-canada-sep-10-old-street-night-september-10-2012-quebec-city-canada-as-capital-canadian-province-quebec-it-is-one-oldest-cities-north-america_649448-2201.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Contatti",
          items: [
            {
              label: "Via Lago di Nicito, 34/A",
              href: "#",
            },
            {
              label: "095 715 8946",
              href: "tel:0957158946",
            },
          ],
        },
        {
          title: "Servizi",
          items: [
            {
              label: "Fotocopie",
              href: "#servizi",
            },
            {
              label: "Rilegature",
              href: "#servizi",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 L’Angolo delle Fotocopie"
      bottomRightText="Tutti i diritti riservati"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
