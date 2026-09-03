import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Projects } from "@/components/Projects";
import { Quiz, QuizPopup } from "@/components/Quiz";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingContacts } from "@/components/FloatingContacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Packages />
        <Projects />
        <Quiz />
        <Process />
        <Cases />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingContacts />
      <QuizPopup />
    </>
  );
}
