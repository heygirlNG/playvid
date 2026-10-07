import './globals.css';

export const metadata = {
  title: 'PLAYVID',
  description: 'Africa-first video discovery and creator platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
