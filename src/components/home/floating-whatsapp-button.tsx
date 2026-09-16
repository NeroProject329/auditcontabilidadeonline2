"use client";

import { IconWhatsapp } from "./icons";
import type { WhatsappActionProps } from "./types";

export function FloatingWhatsappButton({
  onWhatsappClick,
  whatsappLoading,
}: WhatsappActionProps) {
  return (
    <button
      type="button"
      onClick={onWhatsappClick}
      disabled={whatsappLoading}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-2xl shadow-green-500/30 transition hover:scale-110 disabled:cursor-wait disabled:opacity-70"
    >
      <IconWhatsapp />
    </button>
  );
}
