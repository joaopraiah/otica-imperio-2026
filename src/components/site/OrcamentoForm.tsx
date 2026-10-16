import { useState } from "react";
import { m as motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { STORES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const INTERESSES = [
  "Óculos de grau",
  "Óculos de sol",
  "Lentes de contato",
  "Manutenção de armação",
  "Consultoria de visagismo",
  "Ainda não sei",
];

export function OrcamentoForm() {
  const [nome, setNome] = useState("");
  const [unidade, setUnidade] = useState(STORES[0]!.id);
  const [interesse, setInteresse] = useState(INTERESSES[0]!);
  const [receita, setReceita] = useState("Tenho receita recente");
  const [obs, setObs] = useState("");

  const store = STORES.find((s) => s.id === unidade)!;

  const mensagem = encodeURIComponent(
    [
      `Olá! Meu nome é ${nome || "(nome)"} e gostaria de um orçamento.`,
      `Unidade: ${store.cidade}`,
      `Interesse: ${interesse}`,
      `Receita: ${receita}`,
      obs ? `Observações: ${obs}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const link = `${store.whatsapp}?text=${mensagem}`;
  const field =
    "w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ink";

  const completo = [nome, unidade, interesse, receita].filter(Boolean).length / 4;

  return (
    <motion.form
      onSubmit={(e) => e.preventDefault()}
      className="relative overflow-hidden border border-border bg-card p-7 sm:p-10"
      aria-label="Solicitação de orçamento"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        aria-hidden
        className="animate-breathe pointer-events-none absolute -left-24 -top-24 size-64 rounded-full bg-steel/10 blur-3xl"
        style={{ animationDuration: "10s" }}
      />
      <span className="label-mono">Solicitar orçamento</span>
      <h3 className="mt-4 text-2xl sm:text-3xl">Conte o que você precisa</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Preencha os campos e continue a conversa no WhatsApp da unidade mais próxima. Sem
        compromisso.
      </p>

      <div className="mt-7 h-px w-full bg-border">
        <motion.div
          className="h-px origin-left bg-ink"
          animate={{ scaleX: completo }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="mt-8 grid gap-5">
        <div>
          <label htmlFor="nome" className="label-mono">
            Seu nome
          </label>
          <input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como podemos te chamar?"
            className={cn(field, "mt-2")}
          />
        </div>

        <div>
          <span className="label-mono">Unidade mais próxima</span>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {STORES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setUnidade(s.id)}
                className={cn(
                  "border px-4 py-3 text-left text-sm transition-colors",
                  unidade === s.id ? "border-ink bg-ink/5" : "border-border hover:border-ink",
                )}
              >
                <span className="block font-display text-base">{s.cidade}</span>
                <span className="font-mono text-[0.68rem] tracking-widest text-muted-foreground">
                  {s.telefoneLabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="label-mono">O que você procura</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {INTERESSES.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setInteresse(i)}
                className={cn(
                  "border px-4 py-2 text-xs transition-colors",
                  interesse === i
                    ? "border-ink bg-ink/5 text-ink"
                    : "border-border hover:border-ink",
                )}
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="receita" className="label-mono">
            Receita médica
          </label>
          <select
            id="receita"
            value={receita}
            onChange={(e) => setReceita(e.target.value)}
            className={cn(field, "mt-2")}
          >
            <option>Tenho receita recente</option>
            <option>Tenho receita antiga</option>
            <option>Não tenho receita</option>
            <option>Quero agendar exame na loja</option>
          </select>
        </div>

        <div>
          <label htmlFor="obs" className="label-mono">
            Observações (opcional)
          </label>
          <textarea
            id="obs"
            rows={3}
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            placeholder="Rotina, profissão, preferências de estilo..."
            className={cn(field, "mt-2 resize-none")}
          />
        </div>
      </div>

      <motion.a
        href={link}
        data-store={store.id}
        data-lead-form="orcamento_whatsapp"
        data-track-location="formulario_orcamento"
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-9 inline-flex items-center gap-2 bg-ink px-7 py-4 text-[0.75rem] uppercase tracking-[0.16em] text-ink-foreground transition-colors hover:bg-forest"
      >
        <MessageCircle className="size-4" /> Continuar no WhatsApp — {store.cidade}
      </motion.a>
    </motion.form>
  );
}
