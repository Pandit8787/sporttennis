import { useState } from "react";
import { ACADEMY } from "@/lib/site-data";
import { Send, CheckCircle2, MessageCircle, Phone, Calendar, User, Mail, Award, BookOpen, School } from "lucide-react";
import { toast } from "sonner";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    playerName: "",
    parentName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "Male",
    aitaRanking: "",
    highestAchievement: "",
    certificateCategory: "Category B (National)",
    targetProgramme: "",
    targetCollege: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission / dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("DU Sports Quota Roadmap Request Received!", {
        description: "Our coaching and academic guidance team will connect with you within 24 hours.",
      });
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Sports Life! I would like to book a DU Sports Quota Guidance Session for Tennis.\n\n` +
      `Player: ${formData.playerName || "Prospective Student"}\n` +
      `Category: ${formData.certificateCategory}\n` +
      `AITA Rank: ${formData.aitaRanking || "Not specified"}\n` +
      `Target DU Course: ${formData.targetProgramme || "UG Programmes"}`
    );
    window.open(`https://wa.me/919266579159?text=${text}`, "_blank");
  };

  return (
    <div id="enquire" className="my-8 overflow-hidden rounded-3xl border border-neon/30 bg-surface/95 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
      {/* Heading and Intro */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
        <span className="inline-block rounded-full bg-neon/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-neon">
          1-on-1 Profile Evaluation
        </span>
        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-foreground">
          Book a DU Sports Quota Guidance Session
        </h3>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
          “If you are planning for Delhi University, understand where you stand today, identify the areas that need improvement, and start preparing accordingly.”
        </p>

        {/* Action pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          <a
            href="#enquiry-form"
            className="rounded-full bg-neon text-white px-5 py-2 text-xs font-extrabold uppercase tracking-wider shadow-md hover:bg-neon/90 transition-all cursor-pointer"
          >
            Book Guidance Session
          </a>
          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-emerald-500/20 transition-all cursor-pointer"
          >
            <MessageCircle className="size-3.5" />
            <span>Chat On WhatsApp</span>
          </button>
        </div>
      </div>

      {submitted ? (
        <div className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 p-8 text-center space-y-4 max-w-xl mx-auto">
          <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white mx-auto shadow-lg">
            <CheckCircle2 className="size-8" />
          </div>
          <h4 className="font-display text-2xl font-black text-foreground">
            Thank You, {formData.playerName || "Player"}!
          </h4>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Your DU Sports Quota roadmap profile has been submitted. Our senior coaching directors and admissions mentors will review your sports certificate category, AITA standing, and target programme to prepare your strategic roadmap.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-bold text-neon hover:underline cursor-pointer"
            >
              Submit Another Profile
            </button>
          </div>
        </div>
      ) : (
        <form id="enquiry-form" onSubmit={handleSubmit} className="space-y-6 w-full max-w-5xl mx-auto">
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Player Name */}
            <div>
              <label htmlFor="playerName" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Player Name *
              </label>
              <div className="relative">
                <input
                  id="playerName"
                  name="playerName"
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={formData.playerName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
                />
              </div>
            </div>

            {/* Parent Name */}
            <div>
              <label htmlFor="parentName" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Parent Name *
              </label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={formData.parentName}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              >
                <option value="Male">Male (Men's Quota)</option>
                <option value="Female">Female (Women's Quota)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Current AITA Ranking */}
            <div>
              <label htmlFor="aitaRanking" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Current AITA Ranking (Men's/Women's / U18)
              </label>
              <input
                id="aitaRanking"
                name="aitaRanking"
                type="text"
                placeholder="e.g. AITA Men's #45, U-18 #80, or None"
                value={formData.aitaRanking}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              />
            </div>

            {/* Certificate Category */}
            <div>
              <label htmlFor="certificateCategory" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Eligible Certificate Category
              </label>
              <select
                id="certificateCategory"
                name="certificateCategory"
                value={formData.certificateCategory}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              >
                <option value="Category A (International)">Category A (International — Trial Exempt)</option>
                <option value="Category B (National Level)">Category B (National / SGFI / Khelo India — Max 200)</option>
                <option value="Category C (State / CBSE Nationals)">Category C (State / CBSE / KVS / IPSC — Max 120)</option>
                <option value="Category D (District / Clusters)">Category D (District / CBSE Clusters — Max 60)</option>
                <option value="Not Sure / Evaluating">Not Sure / Need Help Evaluating</option>
              </select>
            </div>

            {/* Highest Sports Achievement */}
            <div className="sm:col-span-2">
              <label htmlFor="highestAchievement" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Highest Sports Achievement & Tournament Name
              </label>
              <input
                id="highestAchievement"
                name="highestAchievement"
                type="text"
                placeholder="e.g. SGFI National School Games 2024 (Bronze), CBSE Nationals (Winner)"
                value={formData.highestAchievement}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              />
            </div>

            {/* Target DU Programme */}
            <div>
              <label htmlFor="targetProgramme" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Target DU Programme(s)
              </label>
              <input
                id="targetProgramme"
                name="targetProgramme"
                type="text"
                placeholder="e.g. B.Com (Hons), B.A. Economics, English"
                value={formData.targetProgramme}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              />
            </div>

            {/* Target College */}
            <div>
              <label htmlFor="targetCollege" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Preferred DU College(s)
              </label>
              <input
                id="targetCollege"
                name="targetCollege"
                type="text"
                placeholder="e.g. SRCC, St. Stephen's, Hindu, Hansraj, LSR"
                value={formData.targetCollege}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon"
              />
            </div>

            {/* Message / Questions */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
                Specific Questions / Current Situation
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us about your current training schedule, CUET subjects, or questions about the trial match format..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-border/80 bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-neon focus:outline-hidden focus:ring-1 focus:ring-neon resize-y"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/70">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              🔒 Confidential. Your sports and contact information will only be used for admission guidance.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-neon via-emerald-500 to-teal-500 px-8 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:shadow-neon/40 hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              <Send className="size-4" />
              <span>{loading ? "Preparing..." : "Get My DU Sports Quota Roadmap"}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
