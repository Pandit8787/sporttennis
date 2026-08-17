import { useEffect, useState, type FormEvent } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ACADEMY } from "@/lib/site-data";

const buttonStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200";

const primaryButton =
  "bg-neon text-primary-foreground hover:bg-neon/90 disabled:cursor-not-allowed disabled:opacity-60";

const secondaryButton =
  "bg-surface text-foreground hover:bg-surface/90";

export function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("I would like to book a free trial session.");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("whatsappPopupSeen");
    if (!seen) {
      const timer = window.setTimeout(() => setOpen(true), 450);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("whatsappPopupSeen", "true");
    setOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const rawNumber = ACADEMY.whatsapp.replace(/\D/g, "");
    const text = `Hi, my name is ${name}.\nPhone: ${phone}.\nEmail: ${email}.\n${message}`;
    const url = `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={(value) => !value && handleClose()}>
      <DialogContent className="max-w-md rounded-3xl p-6">
        <DialogHeader>
          <DialogTitle>Book via WhatsApp</DialogTitle>
          <DialogDescription>
            Fill in a few details and send your request directly to WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-muted-foreground">
            Name
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-neon/60 focus:ring-2 focus:ring-neon/20"
              placeholder="Your name"
            />
          </label>

          <label className="block text-sm font-medium text-muted-foreground">
            Phone
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
              className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-neon/60 focus:ring-2 focus:ring-neon/20"
              placeholder="+91"
            />
          </label>

          <label className="block text-sm font-medium text-muted-foreground">
            Email
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-neon/60 focus:ring-2 focus:ring-neon/20"
              placeholder="name@example.com"
            />
          </label>

          <label className="block text-sm font-medium text-muted-foreground">
            Message
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={3}
              className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-neon/60 focus:ring-2 focus:ring-neon/20"
            />
          </label>

          <DialogFooter className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleClose}
              className={`${buttonStyles} ${secondaryButton}`}
            >
              Not now
            </button>
            <button
              type="submit"
              className={`${buttonStyles} ${primaryButton}`}
            >
              Send on WhatsApp
            </button>
          </DialogFooter>
        </form>

        <DialogClose asChild>
          <button type="button" className="sr-only">
            Close
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
