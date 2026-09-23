"use client";

import type { ComponentProps, MouseEvent } from "react";

const email = "contato@auditcontabilidadeonline.com";
const subject = "Contato pelo site - Audit Contabilidade";
const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;

type EmailLinkProps = Omit<ComponentProps<"a">, "href">;

export function EmailLink({ children, onClick, ...props }: EmailLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented) return;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      event.preventDefault();
      window.open(gmailHref, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <a href={mailtoHref} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
