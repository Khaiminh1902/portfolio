"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Projects from "@/components/Projects";
import Techs from "@/components/Techs";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="overflow-clip relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Techs />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;