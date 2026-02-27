const GlobalBackground = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#06080F]">
    {/* Blob 1 — Fascio principale hero sx */}
    <div
      className="absolute animate-[blobMain_20s_ease-in-out_infinite_alternate]"
      style={{
        top: '-10%',
        left: '-5%',
        width: '65vw',
        height: '90vh',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(61,43,196,0.55) 0%, rgba(91,63,232,0.25) 35%, transparent 70%)',
        filter: 'blur(60px)',
      }}
    />
    {/* Blob 2 — Luce secondaria centro-alto */}
    <div
      className="absolute animate-[blobSecondary_25s_ease-in-out_infinite_alternate-reverse]"
      style={{
        top: '0%',
        left: '20%',
        width: '50vw',
        height: '70vh',
        background: 'radial-gradient(ellipse at 50% 30%, rgba(91,63,232,0.3) 0%, rgba(28,53,200,0.15) 40%, transparent 70%)',
        filter: 'blur(80px)',
      }}
    />
    {/* Blob 3 — Fascio dx per sezioni medie */}
    <div
      className="absolute animate-[blobRight_22s_ease-in-out_infinite_alternate]"
      style={{
        top: '60vh',
        right: '-10%',
        width: '60vw',
        height: '80vh',
        background: 'radial-gradient(ellipse at 70% 40%, rgba(61,43,196,0.45) 0%, rgba(14,165,200,0.1) 50%, transparent 72%)',
        filter: 'blur(70px)',
      }}
    />
    {/* Blob 4 — Profondità sx sezioni basse */}
    <div
      className="absolute animate-[blobLeft_28s_ease-in-out_infinite_alternate-reverse]"
      style={{
        top: '140vh',
        left: '-15%',
        width: '55vw',
        height: '70vh',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(91,63,232,0.4) 0%, rgba(61,43,196,0.2) 40%, transparent 68%)',
        filter: 'blur(65px)',
      }}
    />
    {/* Blob 5 — Accento teal basso dx */}
    <div
      className="absolute animate-[blobTeal_30s_ease-in-out_infinite_alternate]"
      style={{
        top: '220vh',
        right: '0%',
        width: '50vw',
        height: '60vh',
        background: 'radial-gradient(ellipse at 80% 40%, rgba(14,165,200,0.25) 0%, rgba(61,43,196,0.2) 45%, transparent 70%)',
        filter: 'blur(90px)',
      }}
    />
    {/* Blob 6 — Velo viola globale */}
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(ellipse at 40% 30%, rgba(61,43,196,0.12) 0%, transparent 60%)',
      }}
    />
    {/* Noise texture overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
        backgroundSize: '128px 128px',
      }}
    />
  </div>
);

export default GlobalBackground;
