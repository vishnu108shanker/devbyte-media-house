import React from "react";

export interface SocialConfig {
  githubProject?: string;
  githubProfile?: string;
  linkedin?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
}

export const DEFAULT_SOCIALS: SocialConfig = {
  githubProject: "https://github.com/vishnu108shanker/Devbyte-Engine.git",
  githubProfile: "https://github.com/vishnu108shanker",
  linkedin: "https://www.linkedin.com/in/vishnu-shanker-mishra-0b2403310",
  youtube: "https://www.youtube.com/@devlarhq",
  instagram: "https://www.facebook.com/profile.php?id=61594599453197",
  facebook: "https://www.facebook.com/profile.php?id=61594599453197",
};

export function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function SocialLinks({
  socials = DEFAULT_SOCIALS,
  size = "md",
  showLabels = false,
  className = "",
}: {
  socials?: SocialConfig;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  className?: string;
}) {
  const iconSizeClass =
    size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
  const btnSizeClass =
    size === "sm" ? "p-1.5" : size === "lg" ? "px-3.5 py-2" : "p-2";

  const links = [
    socials.githubProject
      ? {
          name: "GitHub Engine",
          href: socials.githubProject,
          icon: <GitHubIcon className={iconSizeClass} />,
          hoverColor: "hover:text-white hover:bg-zinc-800 hover:border-zinc-700",
          ariaLabel: "View Devbyte Engine GitHub Repository (opens in new tab)",
        }
      : null,
    socials.githubProfile
      ? {
          name: "GitHub Profile",
          href: socials.githubProfile,
          icon: <GitHubIcon className={iconSizeClass} />,
          hoverColor: "hover:text-white hover:bg-zinc-800 hover:border-zinc-700",
          ariaLabel: "View Vishnu's GitHub Profile (opens in new tab)",
        }
      : null,
    socials.linkedin
      ? {
          name: "LinkedIn",
          href: socials.linkedin,
          icon: <LinkedInIcon className={iconSizeClass} />,
          hoverColor: "hover:text-[#0a66c2] hover:bg-[#0a66c2]/10 hover:border-[#0a66c2]/40",
          ariaLabel: "Connect with Vishnu on LinkedIn (opens in new tab)",
        }
      : null,
    socials.youtube
      ? {
          name: "YouTube",
          href: socials.youtube,
          icon: <YouTubeIcon className={iconSizeClass} />,
          hoverColor: "hover:text-[#ff0000] hover:bg-[#ff0000]/10 hover:border-[#ff0000]/40",
          ariaLabel: "Watch DEVLAR on YouTube Shorts (opens in new tab)",
        }
      : null,
    socials.instagram
      ? {
          name: "Instagram",
          href: socials.instagram,
          icon: <InstagramIcon className={iconSizeClass} />,
          hoverColor: "hover:text-[#e4405f] hover:bg-[#e4405f]/10 hover:border-[#e4405f]/40",
          ariaLabel: "View DEVLAR on Instagram Reels (opens in new tab)",
        }
      : null,
    socials.facebook
      ? {
          name: "Facebook",
          href: socials.facebook,
          icon: <FacebookIcon className={iconSizeClass} />,
          hoverColor: "hover:text-[#1877f2] hover:bg-[#1877f2]/10 hover:border-[#1877f2]/40",
          ariaLabel: "View DEVLAR on Facebook (opens in new tab)",
        }
      : null,
  ].filter(Boolean);

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link!.name}
          href={link!.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link!.ariaLabel}
          title={link!.ariaLabel}
          className={`inline-flex items-center gap-2 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] text-[var(--text-muted)] transition duration-200 transform hover:-translate-y-0.5 shadow-sm ${link!.hoverColor} ${btnSizeClass}`}
        >
          {link!.icon}
          {showLabels && (
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              {link!.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
