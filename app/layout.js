import './globals.css';

export const metadata = {
  title: "Abdul Raheem | Full Stack Web Developer",
  description:
    "Portfolio of Abdul Raheem, Full Stack Web Developer skilled in Next.js, MERN Stack, dashboards and web applications.",
  verification: {
    other: {
      "p:domain_verify": "132cfe31c36b938593cb096993aef46c",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
