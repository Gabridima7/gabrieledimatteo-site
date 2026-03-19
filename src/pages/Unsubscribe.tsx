import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const emailFromUrl = searchParams.get("email") || "";
  const [email, setEmail] = useState(emailFromUrl);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const { data, error } = await supabase.functions.invoke("unsubscribe", {
        body: { email },
      });

      if (error) throw error;
      if (data?.success) {
        setStatus("success");
      } else {
        throw new Error("Errore durante la disiscrizione");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Disiscrizione</h1>

        {status === "success" ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mt-6">
            <p className="text-green-400 text-lg font-medium">
              ✓ Ti sei disiscritto con successo.
            </p>
            <p className="text-white/60 text-sm mt-2">
              Non riceverai più email da noi.
            </p>
          </div>
        ) : (
          <>
            <p className="text-white/60 mb-6">
              Inserisci la tua email per cancellarti dalla nostra lista.
            </p>
            <form onSubmit={handleUnsubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#6c5ce7] transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 rounded-lg bg-[#6c5ce7] text-white font-semibold hover:bg-[#5b4bd6] transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Elaborazione..." : "Disiscrivimi"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Si è verificato un errore. Riprova o scrivi a g.dimatteo@nexusagency.it
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
