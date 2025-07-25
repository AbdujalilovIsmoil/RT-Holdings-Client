"use client";

import { usePathname } from "next/navigation";
import { ContactUI, Hero } from "@/components";

const Contact = () => {
  const pathName = usePathname();

  return (
    <>
      <Hero page={pathName} />
      <ContactUI />
    </>
  );
};

export default Contact;
