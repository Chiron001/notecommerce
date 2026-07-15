type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25H4.7V23H.24V8.25ZM8.24 8.25h4.28v2.01h.06c.6-1.12 2.06-2.3 4.24-2.3 4.53 0 5.37 2.98 5.37 6.86V23h-4.46v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23H8.24V8.25Z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.4h2.8l.42-3.27h-3.22V8.24c0-.95.26-1.6 1.63-1.6h1.74V3.71C16.55 3.65 15.49 3.5 14.25 3.5c-2.6 0-4.38 1.58-4.38 4.49v2.34H7.06v3.27H9.87V22h3.63Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.68 1.44 5.27L2 22l4.94-1.53a9.9 9.9 0 0 0 5.1 1.4h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm0 1.67c2.25 0 4.35.87 5.94 2.46a8.23 8.23 0 0 1 2.42 5.85c0 4.56-3.71 8.27-8.28 8.27h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.13.97.97-3.05-.2-.32a8.2 8.2 0 0 1-1.27-4.4c0-4.56 3.72-8.27 8.28-8.27ZM9.2 7.24c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.6 4.17 3.64.58.25 1.04.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42Z" />
    </svg>
  );
}

const ICONS = {
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
};

export default function SocialIcon({
  name,
  className,
}: {
  name: keyof typeof ICONS;
  className?: string;
}) {
  const Icon = ICONS[name];
  return <Icon className={className} />;
}
