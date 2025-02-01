import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex h-screen flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
