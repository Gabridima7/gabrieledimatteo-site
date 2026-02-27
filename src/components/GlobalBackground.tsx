const GlobalBackground = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#080C14]">
    {/* Blob 1 — Large purple/blue, top-left */}
    <div
      className="absolute animate-[blobFloat1_18s_ease-in-out_infinite_alternate]"
      style={{
        top: '-20%',
        left: '-10%',
        width: '70vw',
        height: '80vh',
        background: 'radial-gradient(ellipse, rgba(28,53,200,0.35) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }}
    />
    {/* Blob 2 — Electric blue, top-right */}
    <div
      className="absolute animate-[blobFloat2_22s_ease-in-out_infinite_alternate]"
      style={{
        top: '5%',
        right: '-5%',
        width: '50vw',
        height: '60vh',
        background: 'radial-gradient(ellipse, rgba(79,111,232,0.2) 0%, transparent 65%)',
        filter: 'blur(100px)',
      }}
    />
    {/* Blob 3 — Deep blue, center */}
    <div
      className="absolute animate-[blobFloat3_26s_ease-in-out_infinite_alternate]"
      style={{
        top: '40%',
        left: '30%',
        width: '40vw',
        height: '40vh',
        background: 'radial-gradient(ellipse, rgba(28,53,200,0.12) 0%, transparent 60%)',
        filter: 'blur(120px)',
      }}
    />
    {/* Blob 4 — Bottom-right */}
    <div
      className="absolute animate-[blobFloat1_20s_ease-in-out_infinite_alternate-reverse]"
      style={{
        bottom: '-10%',
        right: '10%',
        width: '55vw',
        height: '55vh',
        background: 'radial-gradient(ellipse, rgba(13,27,42,0.8) 0%, rgba(28,53,200,0.15) 50%, transparent 70%)',
        filter: 'blur(90px)',
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
