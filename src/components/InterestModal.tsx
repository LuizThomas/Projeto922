import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageCircle, Shield } from 'lucide-react';
import { ChapterEmblem } from './ChapterEmblem';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InterestModal: React.FC<InterestModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [profileType, setProfileType] = useState<'jovem' | 'responsavel' | 'visitante'>('jovem');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message
    const roleText =
      profileType === 'jovem'
        ? `Jovem interessado em ingressar (${age ? `${age} anos` : '12-20 anos'})`
        : profileType === 'responsavel'
        ? 'Pai / Mãe / Responsável'
        : 'Irmão DeMolay ou Tio Maçom Visitante';

    const text = encodeURIComponent(
      `*Manifestação de Interesse - Capítulo Tio Paulo Romeu Nº 922*\n\n` +
      `👤 *Nome:* ${fullName}\n` +
      `🏷️ *Perfil:* ${roleText}\n` +
      `📱 *Telefone/WhatsApp:* ${phone}\n` +
      `💬 *Mensagem/Dúvida:* ${message || 'Gostaria de conhecer o Capítulo e saber os próximos passos de ingresso.'}\n\n` +
      `_Enviado através do site oficial do Capítulo 922 - Cedro/CE_`
    );

    const whatsappUrl = `https://wa.me/5588999999999?text=${text}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setAge('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-lg bg-[#0b1c15] rounded-3xl border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-900/60 text-stone-400 hover:text-white border border-stone-800 hover:border-amber-400 transition-colors focus:outline-none"
          aria-label="Fechar formulário"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <ChapterEmblem size="sm" />
              <div>
                <span className="text-[10px] font-cinzel uppercase tracking-widest text-amber-400 font-bold block">
                  Capítulo Nº 922 · Cedro/CE
                </span>
                <h3 className="text-xl font-cinzel font-bold text-stone-100">
                  Manifestar Interesse
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 mb-6 leading-relaxed">
              Preencha os dados abaixo para receber orientações do Mestre Conselheiro e do Conselho Consultivo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Profile selector */}
              <div>
                <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-300 mb-2">
                  Eu sou:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setProfileType('jovem')}
                    className={`py-2 px-2 text-[11px] font-cinzel font-semibold rounded-lg border transition-all text-center ${
                      profileType === 'jovem'
                        ? 'bg-[#d4af37] text-[#08120e] border-[#d4af37] font-bold shadow'
                        : 'bg-[#06100c] text-stone-400 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    Jovem (12-20 anos)
                  </button>
                  <button
                    type="button"
                    onClick={() => setProfileType('responsavel')}
                    className={`py-2 px-2 text-[11px] font-cinzel font-semibold rounded-lg border transition-all text-center ${
                      profileType === 'responsavel'
                        ? 'bg-[#d4af37] text-[#08120e] border-[#d4af37] font-bold shadow'
                        : 'bg-[#06100c] text-stone-400 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    Pai / Mãe
                  </button>
                  <button
                    type="button"
                    onClick={() => setProfileType('visitante')}
                    className={`py-2 px-2 text-[11px] font-cinzel font-semibold rounded-lg border transition-all text-center ${
                      profileType === 'visitante'
                        ? 'bg-[#d4af37] text-[#08120e] border-[#d4af37] font-bold shadow'
                        : 'bg-[#06100c] text-stone-400 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    Visitante
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-300 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex: Pedro Henrique Silva"
                  className="w-full py-2.5 px-3.5 rounded-lg bg-[#06100c] border border-stone-800 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] transition-all"
                />
              </div>

              {/* Age (if youth) & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileType === 'jovem' && (
                  <div>
                    <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-300 mb-1">
                      Idade *
                    </label>
                    <input
                      type="number"
                      min={12}
                      max={21}
                      required
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Ex: 15"
                      className="w-full py-2.5 px-3.5 rounded-lg bg-[#06100c] border border-stone-800 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] transition-all"
                    />
                  </div>
                )}

                <div className={profileType !== 'jovem' ? 'sm:col-span-2' : ''}>
                  <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-300 mb-1">
                    WhatsApp para Contato *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(88) 99999-9999"
                    className="w-full py-2.5 px-3.5 rounded-lg bg-[#06100c] border border-stone-800 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-stone-300 mb-1">
                  Mensagem ou Dúvida (opcional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Gostaria de saber como funcionam as reuniões e os próximos passos..."
                  className="w-full py-2 px-3.5 rounded-lg bg-[#06100c] border border-stone-800 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-[#d4af37] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-cinzel font-bold uppercase tracking-wider text-[#08120e] bg-gradient-to-r from-[#fae6a6] via-[#d4af37] to-[#ba8a1c] hover:from-[#fff2c7] hover:to-[#dfae33] shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                <MessageCircle className="w-4 h-4 text-[#08120e]" />
                <span>Enviar para WhatsApp Oficial</span>
              </button>

              <p className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Seus dados são estritamente sigilosos e confidenciais.</span>
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-cinzel font-bold text-stone-100">
              Solicitação Encaminhada!
            </h3>

            <p className="text-sm text-stone-300 max-w-sm mx-auto leading-relaxed">
              Obrigado por seu contato! A mensagem foi preparada para o WhatsApp oficial do Capítulo Nº 922.
              Nossa comissão retornará o mais breve possível.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg text-xs font-cinzel font-bold uppercase tracking-wider bg-[#d4af37] text-[#08120e] hover:bg-[#e7bf49] transition-all"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
