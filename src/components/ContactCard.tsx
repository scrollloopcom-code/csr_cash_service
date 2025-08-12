import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Facebook,
  Download,
  User2,
  MessageCircle,
  MessageSquare,
  Copy,
  Check,
  Cloud,
  Star,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProfileImage from "@/assets/dp.png";
import BrandIcon from "@/components/BrandIcon";

const BUSINESS = "CSR CASH SERVICE";
const FULL_NAME = "Madusha Lakshani";
const DISPLAY_NAME = "Madusha Lakshani";
const PHONE_WHATSAPP = "0775651669";
const PHONE_CALL = "0775651669";
const EMAIL = "madusharathnayaka04@gmail.com";
const WHATSAPP_GROUP =
  "https://chat.whatsapp.com/HrmpOlLlZiwGX9LoFfMLB8?mode=ac_t";
const WHATSAPP_CHANNEL =
  "https://chat.whatsapp.com/HrmpOlLlZiwGX9LoFfMLB8?mode=ac_t";
const FACEBOOK = "https://www.facebook.com/PagePodda086?mibextid=ZbWKwL";
const TELEGRAM_GROUP = "https://t.me/MaduRathnayaka";
const PROMO_CODE = "CSR1996";
const BIO_LINES = [
  "1xBet | Melbet | 888Starz සඳහා ඉක්මන් මුදල් තැන්පතු සහ ලබාගැනීම්.",
  "✅ වේගවත් සහ ආරක්ෂිතයි.",
  "✅ 100% විශ්වාසයි.",
  "💰 පළමු තැන්පතුවට 2% ක ක්ෂණික Cash Back දීමනාවක්!",
  "අති විශේෂ Bonus සහ Offers සඳහා දැන්ම Whatsapp හරහා සම්බන්ධ වන්න.",
];

const REVIEW_IMAGES: { src: string; alt: string }[] = [
  { src: "/placeholder.svg", alt: "Review 1" },
  { src: "/placeholder.svg", alt: "Review 2" },
  { src: "/placeholder.svg", alt: "Review 3" },
  { src: "/placeholder.svg", alt: "Review 4" },
  { src: "/placeholder.svg", alt: "Review 5" },
  { src: "/placeholder.svg", alt: "Review 6" },
];

function saveVCard() {
  const contactDisplayName = `${BUSINESS} (${FULL_NAME})`;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${contactDisplayName}`,
    `N:Lakshani;Madusha;;;`,
    `ORG:${BUSINESS}`,
    `TEL;TYPE=CELL,VOICE:${PHONE_CALL}`,
    `TEL;TYPE=CELL,WHATSAPP:${PHONE_WHATSAPP}`,
    `EMAIL;TYPE=INTERNET:${EMAIL}`,
    `NOTE:${[BIO_LINES[0], `Promo Code: ${PROMO_CODE}`, ...BIO_LINES.slice(1)].join("\\n")}`,
    "END:VCARD",
  ];
  const blob = new Blob([lines.join("\r\n")], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${contactDisplayName.replace(/\s/g, "_")}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const ReviewsButton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`
        group inline-flex items-center gap-1.5
        rounded-full
        px-3 sm:px-4 py-1.5
        text-xs sm:text-sm font-medium
        bg-slate-800/50 text-slate-200
        border border-slate-700
        shadow-lg shadow-slate-950/50
        backdrop-blur-sm
        transition
        opacity-75
        cursor-not-allowed
        ${className ?? ""}
      `}
      aria-label="Reviews (currently unavailable)"
    >
      <Cloud className="h-4 w-4 text-cyan-400" />
      Reviews
    </div>
  );
};

const Avatar: React.FC = () => (
  <div className="mx-auto">
    <div className="relative mx-auto h-24 w-24 xs:h-28 xs:w-28 sm:h-32 sm:w-32">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-50 blur-lg animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="relative aspect-square rounded-full p-1 bg-slate-800/80 backdrop-blur-md ring-1 ring-slate-700 shadow-lg">
        <img
          src={ProfileImage}
          alt={`${DISPLAY_NAME} - profile`}
          className="h-full w-full rounded-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      <span className="absolute -bottom-1 -right-1 inline-flex items-center rounded-full bg-green-500/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-white ring-2 ring-slate-800 shadow-sm backdrop-blur">
        Online
      </span>
    </div>
  </div>
);

const Header: React.FC<{ onOpenReviews: () => void }> = () => (
  <div className="text-center">
    <Avatar />
    <div className="mt-3">
      <ReviewsButton />
    </div>
    <h1 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-white inline-flex items-center justify-center gap-2.5">
      <BrandIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="text-glow">{BUSINESS}</span>
    </h1>
    <p className="mt-3 text-sm text-slate-300">
      <a
        href={`https://wa.me/94${PHONE_WHATSAPP.replace(/^0/, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Contact on WhatsApp"
        className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
      >
        <User2 className="h-4 w-4 opacity-80" />
        {FULL_NAME}
      </a>
    </p>
  </div>
);

const PromoCode = () => {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="mx-auto inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 text-cyan-300 px-3 py-1.5 ring-1 ring-cyan-500/20 backdrop-blur">
      <span className="text-sm font-semibold">
        🚀 Promo Code: <span className="tracking-wider font-mono text-cyan-200">{PROMO_CODE}</span>
      </span>
      <Button
        size="icon"
        variant="ghost"
        aria-label="Copy promo code"
        onClick={copy}
        className="h-7 w-7 text-cyan-300 hover:text-white hover:bg-cyan-500/20"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
};

const Bio = () => (
  <div className="rounded-2xl bg-slate-900/50 p-4 sm:p-5 text-sm leading-relaxed text-center ring-1 ring-slate-800 backdrop-blur-sm shadow-lg">
    <div className="space-y-2.5 text-slate-300">
      <p className="font-semibold text-white">
        1xBet | Melbet | 888Starz සඳහා ඉක්මන් මුදල් තැන්පතු සහ ලබාගැනීම්.
      </p>

      <p className="font-medium text-slate-200">✅ වේගවත් සහ ආරක්ෂිතයි.</p>
      <p className="font-medium text-slate-200">✅ 100% විශ්වාසයි.</p>

      <PromoCode />

      <p className="font-medium text-slate-200">💰 පළමු තැන්පතුවට 2% ක ක්ෂණික Cash Back දීමනාවක්!</p>
      <p className="font-medium text-slate-200">අති විශේෂ Bonus සහ Offers සඳහා දැන්ම Whatsapp හරහා සම්බන්ධ වන්න.</p>
    </div>

    <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 whitespace-pre-line break-words">
      {`Phone ( WhatsApp/ Call ): ${PHONE_WHATSAPP}\n${EMAIL}`}
    </div>
  </div>
);

const btnBase =
  "w-full relative overflow-hidden rounded-lg px-3 py-3 sm:py-2.5 text-sm font-medium " +
  "backdrop-blur-sm border transition-all duration-300 " +
  "shadow-lg shadow-slate-950/50 " +
  "hover:shadow-xl hover:shadow-slate-950/70 hover:-translate-y-0.5 " +
  "active:translate-y-0 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const btnColors = {
  whatsapp: "border-green-500/30 bg-green-500/20 text-green-200 hover:bg-green-500/30 hover:border-green-500/50 focus-visible:ring-green-400",
  telegram: "border-sky-500/30 bg-sky-500/20 text-sky-200 hover:bg-sky-500/30 hover:border-sky-500/50 focus-visible:ring-sky-400",
  call: "border-blue-500/30 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 hover:border-blue-500/50 focus-visible:ring-blue-400",
  email: "border-indigo-500/30 bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 hover:border-indigo-500/50 focus-visible:ring-indigo-400",
  group: "border-teal-500/30 bg-teal-500/20 text-teal-200 hover:bg-teal-500/30 hover:border-teal-500/50 focus-visible:ring-teal-400",
  facebook: "border-blue-600/30 bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 hover:border-blue-600/50 focus-visible:ring-blue-500",
  save: "border-cyan-500/30 bg-cyan-500/20 text-cyan-200 hover:bg-cyan-500/30 hover:border-cyan-500/50 focus-visible:ring-cyan-400",
};

const ContactCard: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full">
      <Card className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-slate-950/60 bg-aurora">
        <CardContent className="space-y-5 sm:space-y-6 p-4 sm:p-6">
          <Header onOpenReviews={() => {}} />

          <div className="space-y-3">
            <div className="space-y-2.5 sm:space-y-0">
              {/* Desktop layout */}
              <div className="hidden sm:grid sm:grid-cols-3 sm:gap-3">
                <Button asChild className={`${btnBase} ${btnColors.whatsapp}`}><a href={`https://wa.me/94${PHONE_WHATSAPP.replace(/^0/, "")}`} target="_blank" rel="noreferrer" className="flex items-center justify-center"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a></Button>
                <Button asChild className={`${btnBase} ${btnColors.call}`}><a href={`tel:${PHONE_CALL}`} className="flex items-center justify-center"><Phone className="mr-2 h-4 w-4" />Call</a></Button>
                <Button asChild className={`${btnBase} ${btnColors.telegram}`}><a href={TELEGRAM_GROUP} target="_blank" rel="noreferrer" className="flex items-center justify-center"><MessageCircle className="mr-2 h-4 w-4" />Telegram</a></Button>
                <Button asChild className={`${btnBase} ${btnColors.email}`}><a href={`mailto:${EMAIL}`} className="flex items-center justify-center"><Mail className="mr-2 h-4 w-4" />Email</a></Button>
                <Button asChild className={`${btnBase} ${btnColors.group}`}><a href={WHATSAPP_GROUP} target="_blank" rel="noreferrer" className="flex items-center justify-center"><MessageSquare className="mr-2 h-4 w-4" />Group</a></Button>
                <Button asChild className={`${btnBase} ${btnColors.facebook}`}><a href={FACEBOOK} target="_blank" rel="noreferrer" className="flex items-center justify-center"><Facebook className="mr-2 h-4 w-4" />Facebook</a></Button>
                <div className="sm:col-span-3">
                  <Button className={`${btnBase} ${btnColors.save}`} onClick={saveVCard}><Download className="mr-2 h-4 w-4" />Save Contact</Button>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="grid sm:hidden gap-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <Button asChild className={`${btnBase} ${btnColors.whatsapp}`}><a href={`https://wa.me/94${PHONE_WHATSAPP.replace(/^0/, "")}`} target="_blank" rel="noreferrer" className="flex items-center justify-center"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a></Button>
                  <Button asChild className={`${btnBase} ${btnColors.call}`}><a href={`tel:${PHONE_CALL}`} className="flex items-center justify-center"><Phone className="mr-2 h-4 w-4" />Call</a></Button>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <Button asChild className={`${btnBase} ${btnColors.telegram}`}><a href={TELEGRAM_GROUP} target="_blank" rel="noreferrer" className="flex items-center justify-center"><MessageCircle className="mr-2 h-4 w-4" />Telegram</a></Button>
                  <Button asChild className={`${btnBase} ${btnColors.email}`}><a href={`mailto:${EMAIL}`} className="flex items-center justify-center"><Mail className="mr-2 h-4 w-4" />Email</a></Button>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <Button asChild className={`${btnBase} ${btnColors.group}`}><a href={WHATSAPP_GROUP} target="_blank" rel="noreferrer" className="flex items-center justify-center"><MessageSquare className="mr-2 h-4 w-4" />Group</a></Button>
                  <Button asChild className={`${btnBase} ${btnColors.facebook}`}><a href={FACEBOOK} target="_blank" rel="noreferrer" className="flex items-center justify-center"><Facebook className="mr-2 h-4 w-4" />Facebook</a></Button>
                </div>
                <div className="grid grid-cols-1">
                  <Button className={`${btnBase} ${btnColors.save}`} onClick={saveVCard}><Download className="mr-2 h-4 w-4" />Save Contact</Button>
                </div>
              </div>
            </div>
          </div>

          <Bio />

          <div className="text-[11px] sm:text-xs text-center text-slate-400">
            <div>💼Professional Cash Services💼</div>
            <div className="px-2">
              © 2025 CSR CASH SERVICE. All Rights Reserved.{" "}
              Developed By{" "}
              <a
                href="https://scrollloop.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-cyan-300"
              >
                ScrollLoop.com
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl border-slate-800 bg-slate-900/80 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-yellow-300">
              <Star className="h-5 w-5" />
              Reviews
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {REVIEW_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-28 sm:h-32 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-xs text-slate-400">
            These are sample images. Replace with your real review screenshots anytime.
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactCard;