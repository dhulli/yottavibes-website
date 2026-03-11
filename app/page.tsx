"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Brain,
  Trophy,
  Rocket,
  Target,
  Sparkles,
  BookOpen,
  Award,
  Mail,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

const capabilities = [
  {
    title: "Core-Intent Learning",
    icon: Brain,
    description:
      "We focus on the underlying intent of a concept or skill so learners spend time on what truly matters.",
  },
  {
    title: "Shortest Path to Mastery",
    icon: Rocket,
    description:
      "Our model is built to reduce wasted effort and guide learners toward the most effective route to measurable improvement.",
  },
  {
    title: "Unlimited, Mastery-Driven Practice",
    icon: Target,
    description:
      "Learners are not confined to a fixed question bank. Practice can continue until confidence and mastery are achieved.",
  },
  {
    title: "AI-Guided Results",
    icon: Trophy,
    description:
      "We use AI to support focused preparation, better learning decisions, and faster progress toward real outcomes.",
  },
];

const practiceAreas = [
  "SAT",
  "ACT",
  "GRE",
  "GMAT",
  "TOEFL",
  "IELTS",
  "AWS Certifications",
  "Azure Certifications",
  "Google Cloud Certifications",
];

const certificationAreas = ["AI Certifications", "Vibe Coding Certifications"];

function OrbitLogo() {
  return (
    <div className="relative mx-auto h-[170px] w-[170px] sm:h-[260px] sm:w-[260px] lg:h-[420px] lg:w-[420px] overflow-visible">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_68%)] blur-[55px] sm:blur-[90px]" />

      <motion.div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(124,58,237,0.10),transparent_72%)] blur-xl sm:blur-3xl"
        animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {[0, 1].map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border border-white/12"
          style={{
            width: ring === 0 ? "132px" : "156px",
            height: ring === 0 ? "82px" : "96px",
            transform: `translate(-50%, -50%) rotate(${ring * 20 + 10}deg)`,
          }}
          animate={{ rotate: [ring * 20 + 10, ring * 20 + 370] }}
          transition={{ duration: 22 + ring * 8, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {[
        { size: 8, top: "18%", left: "16%", delay: 0 },
        { size: 7, top: "26%", right: "14%", delay: 1.2 },
        { size: 8, bottom: "20%", right: "18%", delay: 2.1 },
        { size: 7, bottom: "16%", left: "20%", delay: 3.0 },
      ].map((node, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 shadow-[0_0_14px_rgba(99,102,241,0.55)] sm:shadow-[0_0_28px_rgba(99,102,241,0.9)]"
          style={node as React.CSSProperties}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.65, 1, 0.65],
            y: [0, -3, 0],
          }}
          transition={{ duration: 3.5, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div style={{ width: node.size, height: node.size }} />
        </motion.div>
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, -4, 0], scale: [1, 1.015, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/yottavibes-logo.png"
          alt="YottaVibes logo"
          className="h-14 w-auto object-contain sm:h-24 lg:h-40"
        />
      </motion.div>
    </div>
  );
}

function SimpleCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-[#0C1426]/80 ${className}`}>
      {children}
    </div>
  );
}

function PrimaryButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-white/90 ${className}`}
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  );
}

export default function YottaVibesHomepage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setMousePosition({ x, y });
  };

  const gradientStyle = useMemo(
    () => ({
      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    }),
    [mousePosition]
  );
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Who We Are", href: "#about" },
    { label: "What We Do", href: "#capabilities" },
    { label: "Products", href: "#products" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div id="top" className="min-h-screen bg-[#050B18] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_30%),linear-gradient(to_bottom,#050B18,#081120,#050B18)]" />
      <div className="relative">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050B18]/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
            <a
              href="#top"
              className="flex items-center"
              aria-label="Go to top"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src="/yottavibes-logo.png"
                alt="YottaVibes logo"
                className="h-12 w-auto object-contain sm:h-16 lg:h-20"
              />
            </a>

            <nav className="hidden items-center gap-8 text-sm md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-white/70 transition duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-300 after:to-violet-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a href="#contact">
                <PrimaryButton>Get in Touch</PrimaryButton>
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-white/10 bg-[#081120]/95 backdrop-blur-xl md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-white/80 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-3">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    <PrimaryButton className="w-full justify-center">Get in Touch</PrimaryButton>
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>
        <section
            className="relative overflow-hidden px-6 pt-0 lg:px-8"
            onMouseMove={(e) => {
              if (window.innerWidth >= 1024) handleHeroMouseMove(e);
            }}
          >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute left-[8%] top-[10%] h-[180px] w-[180px] rounded-full bg-cyan-400/10 blur-2xl sm:h-[360px] sm:w-[360px] sm:bg-cyan-400/20 sm:blur-3xl"
              style={gradientStyle}
              animate={{
                x: [0, 18, 0],
                y: [0, -12, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute right-[6%] top-[18%] h-[140px] w-[140px] rounded-full bg-violet-500/8 blur-xl sm:h-[340px] sm:w-[340px] sm:bg-violet-500/20 sm:blur-3xl"
              style={{
                transform: `translate(${-mousePosition.x * 0.6}px, ${-mousePosition.y * 0.6}px)`,
              }}
              animate={{
                x: [0, -14, 0],
                y: [0, 14, 0],
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
          </div>
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 pt-4 pb-10 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:items-center lg:gap-6 lg:pt-0 lg:pb-0">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200"
              >
                <Sparkles className="h-4 w-4" />
                A new philosophy of learning powered by AI
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-4 max-w-2xl text-[2.35rem] font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-[4rem]"
              >
                Excellence
                <br />
                through AI.
                <br />
                <span className="bg-gradient-to-r from-cyan-100 via-cyan-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(125,211,252,0.18)]">
                  Faster learning.
                </span>
                <br />
                Better outcomes.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-3 max-w-lg text-[15px] leading-6 text-white/70 sm:text-lg"
              >
                YottaVibes uses AI to help learners achieve excellence faster. We build focused learning platforms that sharpen preparation, reduce wasted effort, and accelerate meaningful outcomes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              >
                <a href="#products">
                  <PrimaryButton>
                    <span className="inline-flex items-center">
                      Explore Our Platforms <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </PrimaryButton>
                </a>
                <a href="#partners">
                  <SecondaryButton>Partner With Us</SecondaryButton>
                </a>
              </motion.div>

              <div className="mt-6 hidden gap-4 sm:grid-cols-3">
                {[
                  ["AI-First", "Learning philosophy"],
                  ["2", "Core platforms"],
                  ["Faster", "Path to excellence"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="text-2xl font-semibold text-white">{value}</div>
                    <div className="mt-1 text-sm text-white/55">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative flex justify-center pt-2 pb-2 lg:pt-0 lg:pb-0"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <OrbitLogo />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-14 lg:px-8 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Who we are</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                A modern learning company centered on excellence through AI.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-white/68 sm:text-lg">
              <p>
                YottaVibes is building a new approach to learning. We believe technology should not simply deliver content — it should actively help learners improve faster, practice smarter, and reach excellence with clarity and confidence.
              </p>
              <p>
                Our philosophy is simple: understand the core intent of learning, identify the shortest path to mastery, and give learners the freedom to continue practicing until excellence is achieved.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl rounded-[36px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-8 sm:p-10 lg:p-14">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <Sparkles className="h-4 w-4" />
                The YottaVibes Learning Philosophy
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Focused learning. Faster mastery. Better outcomes.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
                We believe learning should not be driven by content overload. It should be guided by clarity, efficiency, and mastery. Our philosophy is built to help learners focus on the areas that matter most, avoid wasted effort, and continue improving until real confidence is achieved.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Understand the Core Intent",
                  text: "We identify the underlying concept, reasoning pattern, or skill being tested so preparation stays aligned with what truly matters.",
                },
                {
                  step: "02",
                  title: "Find the Shortest Path",
                  text: "We guide learners toward the most effective route to mastery, reducing unnecessary repetition and improving learning efficiency.",
                },
                {
                  step: "03",
                  title: "Practice Without Limits",
                  text: "Students are not restricted to a finite set of questions. They can continue practicing until they achieve confidence and skill mastery.",
                },
                {
                  step: "04",
                  title: "Achieve Excellence Faster",
                  text: "The result is outcome-oriented learning that helps students improve meaningfully in less time through AI-guided preparation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <SimpleCard className="p-6">
                    <div className="text-sm font-semibold tracking-[0.3em] text-cyan-300/80">{item.step}</div>
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                  </SimpleCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-violet-300/80">Our promise</div>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-white/72 sm:text-xl">
                Our measure of success is simple: help learners achieve excellence in very little time through intelligent practice, focused preparation, and a mastery-driven learning model.
              </p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="px-6 py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-violet-300/80">What we do</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                We build AI-enabled platforms designed to accelerate learning outcomes.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Our capabilities are centered on helping learners achieve measurable success quickly through intelligent practice, guided preparation, and targeted certification pathways.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                  >
                    <SimpleCard className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
                    </SimpleCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="px-6 py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Our products</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Two focused platforms built around our learning philosophy.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 text-white">
                <div className="p-8 sm:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200">
                    <BookOpen className="h-4 w-4" />
                    Practice Platform
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold sm:text-4xl">PracticeVibes</h3>
                  <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
                    PracticeVibes delivers guided practice across academic and professional goals, helping learners prepare with speed, structure, and confidence. The platform is designed to identify what matters most and support continuous preparation until mastery is achieved.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                    {practiceAreas.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 text-white backdrop-blur-xl">
                <div className="p-8 sm:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-violet-200">
                    <Award className="h-4 w-4" />
                    Certification Platform
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold sm:text-4xl">CertificationVibes</h3>
                  <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
                    CertificationVibes is designed to support targeted certifications in emerging skills and modern technology learning paths, with a clear focus on efficient learning and outcome-oriented preparation.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                    {certificationAreas.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="px-6 py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl rounded-[36px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-8 sm:p-10 lg:p-14">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                <GraduationCap className="h-4 w-4" />
                Franchise and partnership opportunity
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                We invite franchise and strategic partners for SAT Practice Vibes in the US and Canada.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
                As we expand our learning model, we welcome partners who want to bring satpracticevibes.com to students through local presence, educational collaboration, and growth-focused market partnerships.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton>Discuss Partnership</PrimaryButton>
                <SecondaryButton>Explore SAT Practice Vibes</SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-14 pt-6 lg:px-8 lg:pb-16">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Contact</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Let’s build a faster path to excellence.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Whether you are a learner, institution, partner, or franchise prospect, YottaVibes is open to conversations that align with our philosophy of excellence through AI.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#0C1426]/80 p-6">
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-cyan-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-white/50">Email</div>
                  <div className="font-medium">contact@yottavibes.com</div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:contact@yottavibes.com">
                  <PrimaryButton>Contact Us</PrimaryButton>
                </a>
                <a href="#about">
                  <SecondaryButton>Learn More</SecondaryButton>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/8 px-6 py-8 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 YottaVibes LLC. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-white/75">Who We Are</a>
              <a href="#products" className="hover:text-white/75">Products</a>
              <a href="#contact" className="hover:text-white/75">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>    
  );
}