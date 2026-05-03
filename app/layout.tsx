import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Response Playbook Generator",
  description: "Generate custom incident response playbooks tailored to your tech stack and team size."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="684f5235-7235-4866-9f54-6f093463705d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
