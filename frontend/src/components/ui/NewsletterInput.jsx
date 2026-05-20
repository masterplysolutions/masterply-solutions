import React, { useState } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export function NewsletterInput({ className, onSubmit, forceHover, ...props }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (val) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setErrorMsg('Por favor, insira seu e-mail.');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMsg('Por favor, insira um e-mail válido.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Ocorreu um erro. Tente novamente.');
    }
  };

  return (
    <div className={cn("w-full max-w-md flex flex-col gap-2", className)}>
      <form 
        onSubmit={handleSubmit}
        className="flex items-stretch w-full relative"
      >
        <div className="relative flex-1">
          <input
            type="text"
            placeholder={status === 'success' ? '' : 'E-mail'}
            value={email}
            onChange={(e) => {
              if (status === 'success') setStatus('idle');
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            disabled={status === 'submitting'}
            className={cn(
              "w-full bg-black/20 text-white placeholder-slate-500 font-sans text-[14px] leading-6",
              "py-[11px] px-[16px] outline-none border border-transparent transition-all",
              status === 'error' && "border-red-500 bg-red-950/10",
              status === 'success' && "bg-[#1e293b]/40",
              "disabled:opacity-50"
            )}
            {...props}
          />
          {status === 'success' && (
            <span className="absolute inset-y-0 left-4 flex items-center text-emerald-400 font-sans text-[14px]">
              Inscrição realizada com sucesso!
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={cn(
            "bg-[#604023] hover:bg-[#c89b3d] text-white hover:text-[#18213c]",
            "px-[16px] py-[8px] flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer",
            "disabled:opacity-50 disabled:cursor-not-allowed group",
            status === 'success' && "bg-emerald-600 hover:bg-emerald-500 text-white hover:text-white",
            forceHover && "bg-[#c89b3d] text-[#18213c]"
          )}
        >
          {status === 'submitting' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : status === 'success' ? (
            <Check className="w-5 h-5" />
          ) : (
            <Send className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </button>
      </form>
      
      {status === 'error' && (
        <span className="text-red-400 text-xs font-medium ml-1">
          {errorMsg}
        </span>
      )}
    </div>
  );
}
