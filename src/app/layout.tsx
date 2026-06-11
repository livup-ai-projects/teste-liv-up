export const metadata = { title: "Teste Liv Up", description: "App de teste" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body style={{ fontFamily: "sans-serif", margin: 0 }}>{children}</body></html>);
}