import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ArrowRight, ArrowLeft, Code2, PenTool, Bot, BarChart2,
  FolderOpen, PlusCircle, Zap, TrendingUp, Award, UploadCloud,
  FileIcon, Wifi, MapPin, RefreshCw, AlertCircle, Loader2
} from 'lucide-react';

// TODO: integrare con Resend/Supabase per invio email

interface ApplicationFormModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  experience: string;
  portfolioUrl: string;
  linkedinUrl: string;
  presentationFile: File | null;
  motivation: string;
  workPreference: string;
}

const TOTAL_STEPS = 10;

const roleOptions = [
  { icon: Code2, label: 'Sviluppatore Web / App', value: 'developer' },
  { icon: PenTool, label: 'Designer UI/UX', value: 'designer' },
  { icon: Bot, label: 'Esperto AI & Automazioni', value: 'ai-expert' },
  { icon: BarChart2, label: 'Growth & Marketing', value: 'marketing' },
  { icon: FolderOpen, label: 'Project Manager', value: 'pm' },
  { icon: PlusCircle, label: 'Altro', value: 'other' },
];

const experienceOptions = [
  { icon: Zap, label: 'Sono agli inizi', sub: '0–1 anni di esperienza', value: 'junior' },
  { icon: TrendingUp, label: 'Ho qualche esperienza', sub: '2–3 anni nel settore', value: 'mid' },
  { icon: Award, label: 'Sono esperto/a', sub: '4+ anni, ho un portfolio solido', value: 'senior' },
];

const workOptions = [
  { icon: Wifi, label: 'Solo remoto', sub: 'Lavoro esclusivamente da remoto', value: 'remote' },
  { icon: MapPin, label: 'Remoto con flessibilità', sub: 'Preferisco remoto ma sono aperto/a', value: 'flexible' },
  { icon: RefreshCw, label: 'Dipende dal progetto', sub: 'Valuto caso per caso', value: 'depends' },
];

const ApplicationFormModal = ({ open, onClose }: ApplicationFormModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', role: '', experience: '',
    portfolioUrl: '', linkedinUrl: '', presentationFile: null, motivation: '', workPreference: '',
  });
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (open) {
      setCurrentStep(1);
      setFormData({ firstName: '', lastName: '', email: '', role: '', experience: '', portfolioUrl: '', linkedinUrl: '', presentationFile: null, motivation: '', workPreference: '' });
      setError('');
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [open]);

  const isValidUrl = (url: string) => {
    try { new URL(url); return true; } catch { return false; }
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = useCallback((): string | null => {
    switch (currentStep) {
      case 1: return formData.firstName.trim().length < 2 ? 'Inserisci almeno 2 caratteri' : null;
      case 2: return !formData.lastName.trim() ? 'Campo obbligatorio' : null;
      case 3: return !isValidEmail(formData.email) ? 'Inserisci un\'email valida' : null;
      case 4: return !formData.role ? 'Seleziona un ruolo' : null;
      case 5: return !formData.experience ? 'Seleziona un\'opzione' : null;
      case 6: return formData.portfolioUrl.trim() && !isValidUrl(formData.portfolioUrl) ? 'Inserisci un URL valido' : null;
      case 7: return null;
      case 8: return null;
      case 9: return formData.motivation.trim().length < 50 ? `Minimo 50 caratteri (${formData.motivation.trim().length}/50)` : null;
      case 10: return !formData.workPreference ? 'Seleziona un\'opzione' : null;
      default: return null;
    }
  }, [currentStep, formData]);

  const goNext = () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError('');
    if (currentStep === TOTAL_STEPS) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
      return;
    }
    setDirection(1);
    setCurrentStep(s => s + 1);
  };

  const goBack = () => {
    if (currentStep <= 1) return;
    setError('');
    setDirection(-1);
    setCurrentStep(s => s - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); goNext(); }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.size <= 50 * 1024 * 1024) {
      setFormData(f => ({ ...f, presentationFile: file }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 50 * 1024 * 1024) {
      setFormData(f => ({ ...f, presentationFile: file }));
    }
    e.target.value = '';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const inputClass = "w-full bg-[rgba(255,255,255,0.07)] border-[1.5px] border-[rgba(255,255,255,0.1)] rounded-[14px] px-5 py-4 text-[15px] text-white placeholder:text-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#c8a81c] transition-colors";

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepLayout title="Come ti chiami?" subtitle="Iniziamo a conoscerti">
            <input type="text" className={inputClass} placeholder="Il tuo nome" value={formData.firstName}
              onChange={e => setFormData(f => ({ ...f, firstName: e.target.value }))} onKeyDown={handleKeyDown} autoFocus />
          </StepLayout>
        );
      case 2:
        return (
          <StepLayout title="Qual è il tuo cognome?" subtitle={`Piacere di conoscerti, ${formData.firstName}!`}>
            <input type="text" className={inputClass} placeholder="Il tuo cognome" value={formData.lastName}
              onChange={e => setFormData(f => ({ ...f, lastName: e.target.value }))} onKeyDown={handleKeyDown} autoFocus />
          </StepLayout>
        );
      case 3:
        return (
          <StepLayout title="Qual è la tua email?" subtitle="Ti contatteremo qui">
            <input type="email" className={inputClass} placeholder="nome@esempio.com" value={formData.email}
              onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} onKeyDown={handleKeyDown} autoFocus />
          </StepLayout>
        );
      case 4:
        return (
          <StepLayout title="In quale ruolo vorresti collaborare?" subtitle="Scegli quello più vicino a te. Puoi selezionarne uno.">
            <div className="grid grid-cols-2 gap-3">
              {roleOptions.map(opt => (
                <button key={opt.value} type="button" onClick={() => setFormData(f => ({ ...f, role: opt.value }))}
                  className={`flex items-center gap-3 rounded-xl px-5 py-4 text-[15px] font-medium text-white border-[1.5px] transition-all text-left
                    ${formData.role === opt.value
                      ? 'border-[#1C35C8] bg-[rgba(28,53,200,0.15)] shadow-[0_0_0_1px_#1C35C8]'
                      : 'border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.25)]'}`}>
                  <opt.icon size={20} />
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </StepLayout>
        );
      case 5:
        return (
          <StepLayout title="Quanti anni di esperienza hai?" subtitle="Siamo curiosi, non giudichiamo">
            <div className="flex flex-col gap-3">
              {experienceOptions.map(opt => (
                <button key={opt.value} type="button" onClick={() => setFormData(f => ({ ...f, experience: opt.value }))}
                  className={`flex items-center gap-4 w-full rounded-xl px-5 py-4 border-[1.5px] transition-all text-left
                    ${formData.experience === opt.value
                      ? 'border-[#1C35C8] bg-[rgba(28,53,200,0.15)] shadow-[0_0_0_1px_#1C35C8]'
                      : 'border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.25)]'}`}>
                  <opt.icon size={20} className="text-white shrink-0" />
                  <div>
                    <p className="text-white text-[16px] font-medium">{opt.label}</p>
                    <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{opt.sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </StepLayout>
        );
      case 6:
        return (
          <StepLayout title="Hai un portfolio da mostrarci?" subtitle="Behance, GitHub, Dribbble, sito personale — qualsiasi link va benissimo">
            <input type="url" className={inputClass} placeholder="https://tuoportfolio.com" value={formData.portfolioUrl}
              onChange={e => setFormData(f => ({ ...f, portfolioUrl: e.target.value }))} onKeyDown={handleKeyDown} autoFocus />
            <p className="text-[12px] mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Campo opzionale — salta pure se non ne hai uno</p>
          </StepLayout>
        );
      case 7:
        return (
          <StepLayout title="Il tuo profilo LinkedIn" subtitle="Vogliamo sapere chi sei anche fuori dai progetti">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <input type="url" className={`${inputClass} pl-12`} placeholder="linkedin.com/in/tuoprofilo" value={formData.linkedinUrl}
                onChange={e => setFormData(f => ({ ...f, linkedinUrl: e.target.value }))} onKeyDown={handleKeyDown} autoFocus />
            </div>
            <p className="text-[12px] mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Campo opzionale</p>
          </StepLayout>
        );
      case 8:
        return (
          <StepLayout title="Presentati a modo tuo" subtitle="Niente CV classico. Carica quello che ti rappresenta meglio: una presentazione, un video, un progetto, qualsiasi file.">
            <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileSelect} />
            {!formData.presentationFile ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={e => e.preventDefault()}
                onDrop={handleFileDrop}
                className="rounded-2xl p-8 text-center cursor-pointer transition-all border-2 border-dashed hover:border-[rgba(28,53,200,0.6)] hover:bg-[rgba(28,53,200,0.06)]"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.15)' }}>
                <UploadCloud size={40} style={{ color: 'rgba(255,255,255,0.3)' }} className="mx-auto mb-3" />
                <p className="text-[15px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Trascina qui il tuo file o clicca per selezionarlo</p>
                <p className="text-[12px] mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>PDF, video, presentazione, portfolio — qualsiasi formato, max 50MB</p>
              </div>
            ) : (
              <div className="rounded-2xl p-5 flex items-center gap-3 border-[1.5px]"
                style={{ background: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.3)' }}>
                <FileIcon size={24} className="text-white/60 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm truncate">{formData.presentationFile.name}</p>
                  <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{formatFileSize(formData.presentationFile.size)}</p>
                </div>
                <button type="button" onClick={() => setFormData(f => ({ ...f, presentationFile: null }))}
                  className="text-white/40 hover:text-red-400 transition-colors"><X size={18} /></button>
              </div>
            )}
            <p className="text-[12px] mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>Campo opzionale — puoi saltarlo</p>
          </StepLayout>
        );
      case 9:
        return (
          <StepLayout title="Perché vuoi lavorare con NEXUS?" subtitle="Dicci cosa ti ha convinto. Sii diretto/a, non servono paroloni.">
            <div className="relative">
              <textarea className={`${inputClass} min-h-[120px] resize-none leading-relaxed`}
                placeholder="Sono appassionato/a di [campo], ho seguito NEXUS perché..."
                value={formData.motivation} maxLength={500}
                onChange={e => setFormData(f => ({ ...f, motivation: e.target.value }))}
                onKeyDown={handleKeyDown} autoFocus />
              <span className={`absolute bottom-3 right-4 text-[12px] ${formData.motivation.length > 450 ? 'text-[#F59E0B]' : ''}`}
                style={{ color: formData.motivation.length > 450 ? undefined : 'rgba(255,255,255,0.3)' }}>
                {formData.motivation.length} / 500
              </span>
            </div>
          </StepLayout>
        );
      case 10:
        return (
          <StepLayout title="Preferenza di lavoro" subtitle="Siamo un team digitale — vogliamo capire come preferisci collaborare">
            <div className="flex flex-col gap-3">
              {workOptions.map(opt => (
                <button key={opt.value} type="button" onClick={() => setFormData(f => ({ ...f, workPreference: opt.value }))}
                  className={`flex items-center gap-4 w-full rounded-xl px-5 py-4 border-[1.5px] transition-all text-left
                    ${formData.workPreference === opt.value
                      ? 'border-[#1C35C8] bg-[rgba(28,53,200,0.15)] shadow-[0_0_0_1px_#1C35C8]'
                      : 'border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.25)]'}`}>
                  <opt.icon size={20} className="text-white shrink-0" />
                  <div>
                    <p className="text-white text-[16px] font-medium">{opt.label}</p>
                    <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{opt.sub}</p>
                  </div>
                </button>
              ))}
            </div>
          </StepLayout>
        );
      default: return null;
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-[640px] max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{ background: 'linear-gradient(160deg, rgba(15,25,60,0.97) 0%, rgba(10,15,40,0.99) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>

        {/* Progress bar */}
        <div className="h-1 w-full bg-white/5 rounded-t-2xl overflow-hidden">
          <motion.div className="h-full bg-[#22C55E]" animate={{ width: `${isSubmitted ? 100 : progress}%` }} transition={{ duration: 0.4 }} />
        </div>

        {/* Close */}
        <button onClick={onClose} className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors z-10">
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          {isSubmitted ? (
            <SuccessScreen email={formData.email} onClose={onClose} />
          ) : (
            <>
              {/* Step indicator */}
              <p className="text-[14px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Passo {currentStep} di {TOTAL_STEPS}
              </p>

              {/* Content with animation */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div key={currentStep} custom={direction}
                  variants={slideVariants} initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.25, ease: 'easeInOut' }}>
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[13px] text-[#EF4444] mt-4">
                    <AlertCircle size={14} /> {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Nav */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.06]">
                <button onClick={goBack}
                  className={`flex items-center gap-2 text-[15px] transition-colors ${currentStep === 1 ? 'text-white/20 cursor-default' : 'text-white/50 hover:text-white'}`}
                  disabled={currentStep === 1}>
                  <ArrowLeft size={16} /> Indietro
                </button>
                <button onClick={goNext}
                  className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#1ea34d] text-white font-semibold px-7 py-3 rounded-full text-[15px] transition-colors">
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : currentStep === TOTAL_STEPS ? 'Invia candidatura' : 'Avanti'}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const StepLayout = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
    <p className="text-[15px] mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>{subtitle}</p>
    {children}
  </div>
);

const SuccessScreen = ({ email, onClose }: { email: string; onClose: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const colors = ['#22C55E', '#1C35C8', '#d0f601', '#F59E0B', '#EF4444', '#8B5CF6'];
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -10 - Math.random() * 40,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      });
    }

    let frame = 0;
    const maxFrames = 120;
    const animate = () => {
      if (frame > maxFrames) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.alpha = Math.max(0, 1 - frame / maxFrames);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center py-12 text-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10">
        {/* Animated check */}
        <svg width="64" height="64" viewBox="0 0 64 64" className="mx-auto mb-6">
          <motion.circle cx="32" cy="32" r="28" fill="none" stroke="#22C55E" strokeWidth="3"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
          <motion.path d="M20 32 L28 40 L44 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.4 }} />
        </svg>
        <h2 className="text-[28px] font-bold text-white mb-3">Candidatura inviata! 🎉</h2>
        <p className="text-[16px] mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Ti contatteremo entro 48 ore all'indirizzo {email}
        </p>
        <a href="/" className="text-white/50 hover:text-white text-[15px] transition-colors">
          ← Torna alla homepage
        </a>
      </div>
    </div>
  );
};

export default ApplicationFormModal;
