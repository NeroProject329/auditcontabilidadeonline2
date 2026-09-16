"use client";

import { useWhatsapp } from "@/hooks/use-whatsapp";
import { SiteHeader } from "@/components/home/site-header";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { FeaturesSection } from "@/components/home/features-section";
import { ProcessSection } from "@/components/home/process-section";
import { SiteFooter } from "@/components/home/site-footer";
import { FloatingWhatsappButton } from "@/components/home/floating-whatsapp-button";
import { CookieBanner } from "@/components/home/cookie-banner";
import { ConditionsNotice } from "@/components/home/conditions-notice";
const WHATSAPP_MESSAGE = "Olá! Gostaria de consultar minha situação.";

export default function Home() {
  // Uma única consulta e um estado de carregamento compartilhado entre os CTAs.
  const { loading: whatsappLoading, openWhatsapp } = useWhatsapp();

  function handleWhatsapp() {
    openWhatsapp(WHATSAPP_MESSAGE);
  }

  const whatsappAction = {
    onWhatsappClick: handleWhatsapp,
    whatsappLoading,
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader {...whatsappAction} />
      <HeroSection {...whatsappAction} />
      <HighlightsSection />
      <FeaturesSection />
      <ProcessSection />
      <ConditionsNotice {...whatsappAction} />
      <SiteFooter />
      <FloatingWhatsappButton {...whatsappAction} />
      <CookieBanner />
    </main>
  );
}
