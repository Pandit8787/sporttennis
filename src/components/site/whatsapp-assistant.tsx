"use client";

import { useState, type FormEvent } from "react";
import { ACADEMY } from "@/lib/site-data";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Phone, Sparkles } from "lucide-react";

const PHONE_NUMBER = ACADEMY.whatsapp.replace(/\D/g, "");

export function WhatsAppAssistant() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [centre, setCentre] = useState("Roshanara Club");
  const [message, setMessage] = useState("I would like to book a free trial session.");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `*New Trial Inquiry - Sports Life Tennis Academy*\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Preferred Centre:* ${centre}\n💬 *Message:* ${message}`;
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setOpen(false);
  };

  const handleDirectChat = () => {
    const text = "Hi Sports Life Tennis Academy, I am interested in joining tennis coaching. Please share details.";
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* Floating Modern WhatsApp Pill Button */}
      <div className="fixed right-4 bottom-5 z-40 flex items-center">
        <button
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white pl-3.5 pr-4 py-3 shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Chat with Tennis Coach on WhatsApp"
        >
          <span className="relative flex size-6 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-40" />
            <MessageCircle className="size-5 fill-current" />
          </span>
          <span className="text-xs font-black uppercase tracking-wider hidden sm:inline-block">

          </span>
        </button>
      </div>

      {/* Modern Responsive WhatsApp Inquiry Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 sm:items-center">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-md overflow-hidden rounded-t-[28px] sm:rounded-3xl bg-surface border border-border/80 shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-500 p-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <MessageCircle className="size-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold leading-tight">Sports Life WhatsApp</h2>
                    <p className="text-xs text-white/90 font-medium mt-0.5">
                      Direct connection to coaching mentors
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Direct Quick WhatsApp Action */}
              <div className="p-4 bg-emerald-500/10 border-b border-emerald-500/20 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-emerald-500">
                  ⚡ Want instant reply without filling form?
                </span>
                <button
                  type="button"
                  onClick={handleDirectChat}
                  className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 text-xs font-extrabold tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
                >
                  Instant Chat →
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-5 space-y-3.5 overflow-y-auto">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Player / Parent Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter full name"
                    className="mt-1.5 w-full rounded-xl border border-input bg-surface-2 px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="mt-1.5 w-full rounded-xl border border-input bg-surface-2 px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Preferred Delhi Centre
                  </label>
                  <select
                    value={centre}
                    onChange={(e) => setCentre(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-input bg-surface-2 px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="Roshanara Club (North Delhi)">Roshanara Club (North Delhi)</option>
                    <option value="Major Dhyan Chand Complex (Central Delhi)">
                      Major Dhyan Chand Complex (Central Delhi)
                    </option>
                    <option value="Punjabi Bagh Club (West Delhi)">Punjabi Bagh Club (West Delhi)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Inquiry Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={2}
                    className="mt-1.5 w-full rounded-xl border border-input bg-surface-2 px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 py-3.5 text-center font-display text-xs font-black uppercase tracking-wider text-white shadow-lg hover:scale-101 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="size-4" />
                  <span>Send Inquiry to WhatsApp</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default WhatsAppAssistant;
