"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

// Ixtiyoriy: .env / Vercel'da NEXT_PUBLIC_EDUSAT_URL ni kiritsangiz, reklama bosiladigan havolaga aylanadi.
const EDUSAT_URL = process.env.NEXT_PUBLIC_EDUSAT_URL;

const EduSatPromo = () => {
  const content = (
    <>
      <GraduationCap className="h-4 w-4" />
      <span className="text-sm font-semibold">EduSAT Academy</span>
    </>
  );
  const cls =
    "flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 text-card-foreground shadow-lg backdrop-blur-xl transition-colors hover:bg-card";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
    >
      {EDUSAT_URL ? (
        <a href={EDUSAT_URL} target="_blank" rel="noopener noreferrer" className={cls}>
          {content}
        </a>
      ) : (
        <div className={cls}>{content}</div>
      )}
    </motion.div>
  );
};

export default EduSatPromo;
