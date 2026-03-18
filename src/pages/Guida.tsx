import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { invokeBackendFunction } from '@/lib/invokeBackendFunction';

const Guida = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const validate = (val: string) => {
    if (!val.trim()) return 'Inserisci la tua email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "L'email non sembra corretta";
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(email);
    if (err) {
      setErrorMsg(err);
      return;
    }
    setErrorMsg('');
    setStatus('loading');

    try {
      const { error } = await invokeBackendFunction('send-guide', {
        email: email.trim(),
      });
      if (error) throw error;
      setSubmittedEmail(email.trim());
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Si è verificato un errore. Riprova tra qualche secondo.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Guida Gratuita — Come Trovare 40.000 Attività Senza Sito Web | Nexus Agency</title>
        <meta name="description" content="Scarica lo script Python, il prompt AI e i template di vendita. Tutto gratis in un PDF." />
        <meta property="og:title" content="Guida Gratuita — Come Trovare 40.000 Attività Senza Sito Web | Nexus Agency" />
        <meta property="og:description" content="Scarica lo script Python, il prompt AI e i template di vendita. Tutto gratis in un PDF." />
        <meta property="og:image" content="https://nexusagency.it/og-guida.png" />
        <meta property="og:url" content="https://nexusagency.it/guida" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nexusagency.it/guida" />
      </Helmet>

      {/* Google Analytics / Meta Pixel placeholder */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
      {/* Meta Pixel: fbq('init', 'PIXEL_ID'); fbq('track', 'PageView'); */}

      <div className="fixed inset-0 flex flex-col" style={{ backgroundColor: '#0a0a0f' }}>
        {/* Subtle violet gradient */}
        <div
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
          style={{
            background: 'radial-gradient(circle at 80% 10%, #6c5ce7 0%, transparent 70%)',
          }}
        />

        <div className="flex-1 flex items-center justify-center px-4 relative z-10">
          <div className="w-full max-w-lg text-center">
            {status === 'success' ? (
              <div className="animate-fade-in space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-2">
                  <svg className="w-8 h-8 text-green-400 animate-scale-check" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Perfetto! Controlla la tua inbox 📩</h2>
                <p className="text-sm" style={{ color: '#a0a0b0' }}>
                  Abbiamo inviato la guida a <span className="text-white font-medium">{submittedEmail}</span>. Controlla anche lo spam.
                </p>
                <a
                  href="https://instagram.com/nexusagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{ border: '1px solid #2d2d44', color: '#a0a0b0' }}
                >
                  Seguimi su Instagram →
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-block px-3 py-1 rounded-full text-[12px] font-semibold tracking-[0.15em] uppercase"
                  style={{ border: '1px solid #6c5ce7', color: '#6c5ce7' }}>
                  Guida Gratuita
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold leading-tight text-white">
                  Come Trovare 40.000+ Attività Senza Sito Web e Vendergli un Sito Creato con l'AI
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base" style={{ color: '#a0a0b0' }}>
                  Lo script Python, il prompt Lovable e i messaggi di vendita. Tutto in un PDF gratuito.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-2">
                  <input
                    type="email"
                    placeholder="La tua email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                    className="flex-1 px-4 py-3 rounded-lg text-white text-sm placeholder:text-gray-500 outline-none transition-colors"
                    style={{
                      backgroundColor: '#14141f',
                      border: `1px solid ${errorMsg ? '#e74c3c' : '#2d2d44'}`,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-3 rounded-lg text-white font-bold text-sm transition-all disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                    style={{ backgroundColor: '#6c5ce7' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a29bfe')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6c5ce7')}
                  >
                    {status === 'loading' ? (
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                      </svg>
                    ) : (
                      'Scarica la Guida PDF →'
                    )}
                  </button>
                </form>

                {/* Error */}
                {errorMsg && (
                  <p className="text-xs text-red-400 -mt-2">{errorMsg}</p>
                )}

                {/* Privacy note */}
                <p className="text-[11px]" style={{ color: '#666' }}>
                  Zero spam. Riceverai solo la guida. Puoi cancellarti in qualsiasi momento.
                </p>

                {/* Social proof */}
                <p className="text-xs" style={{ color: '#555' }}>
                  📥 Scaricata da 500+ persone
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-4 text-center text-[11px]" style={{ color: '#333' }}>
          © Nexus Agency — nexusagency.it
        </footer>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        @keyframes scale-check { from { transform: scale(0); } to { transform: scale(1); } }
        .animate-scale-check { animation: scale-check 0.4s ease-out 0.2s both; }
      `}</style>
    </>
  );
};

export default Guida;
