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

const ICONS = {
  Instagram: InstagramIcon,
  X: XIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
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
