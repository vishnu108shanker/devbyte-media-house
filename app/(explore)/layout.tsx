import Navbar from "@/components/explore/Navbar";
import Footer from "@/components/explore/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ClientEffects from "@/components/ui/ClientEffects";
import BackToTop from "@/components/ui/BackToTop";

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ClientEffects />
      <Navbar />
      {/* pt-14 = navbar height */}
      <main className="flex-1 pt-14">{children}</main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}
