import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        AI That Works, So You Don’t Have To.
      </motion.h1>
      <motion.p className="text-lg mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        Automate workflows, optimize decision-making, and scale with AI-powered agents.
      </motion.p>
      <motion.a href="/contact" className="mt-6 inline-block bg-blue-500 py-3 px-6 rounded-full text-lg">
        Get a Free AI Automation Audit
      </motion.a>
    </section>
  );
}
