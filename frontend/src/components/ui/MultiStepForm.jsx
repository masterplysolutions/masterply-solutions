import React, { useState } from 'react'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Input } from './Input'
import { Textarea } from './Textarea'

export function MultiStepForm({ onSubmitSuccess, className }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório.'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'O nome deve ter pelo menos 3 caracteres.'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Nome da empresa é obrigatório.'
    }

    // Phone validation (simple format or length check)
    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone/WhatsApp é obrigatório.'
    } else if (phoneDigits.length < 10) {
      newErrors.phone = 'Insira um telefone válido com DDD (ex: 11 99999-9999).'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail para contato é obrigatório.'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Insira um endereço de e-mail válido.'
    }

    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Tipo de projeto é obrigatório.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep2()) {
      setIsSubmitting(true)
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        if (onSubmitSuccess) {
          onSubmitSuccess(formData)
        }
      }, 1200)
    }
  }

  const handleTabClick = (targetStep) => {
    if (isSubmitted) return
    
    if (targetStep === 1) {
      setStep(1)
    } else if (targetStep === 2) {
      // Allow switching to step 2 only if step 1 is valid
      if (validateStep1()) {
        setStep(2)
      }
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      projectType: '',
      message: ''
    })
    setErrors({})
    setIsSubmitted(false)
    setStep(1)
  }

  if (isSubmitted) {
    return (
      <div className={cn("bg-white border border-[#e2e8f0] w-full max-w-[500px] flex flex-col items-center justify-center p-8 text-center", className)}>
        <CheckCircle2 className="size-16 text-secondary-500 mb-4 animate-scale-in" />
        <h3 className="font-sans font-bold text-xl text-primary-900 mb-2">Formulário Enviado!</h3>
        <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-[340px] mb-6">
          Obrigado pelo seu contato. Nossa equipe técnica entrará em contato o mais breve possível.
        </p>
        <button
          onClick={resetForm}
          className="bg-secondary-500 text-primary-900 font-sans font-medium text-sm h-12 px-6 flex items-center justify-center gap-2 hover:bg-secondary-600 transition-colors cursor-pointer w-full"
        >
          Novo envio
        </button>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col gap-[10px] w-full max-w-[500px]", className)}>
      {/* Tabs */}
      <div className="bg-[#f1f5f9] flex p-1 w-full select-none">
        <button
          type="button"
          onClick={() => handleTabClick(1)}
          className={cn(
            "flex-1 py-[6px] px-3 font-sans font-medium text-sm leading-6 text-center transition-all cursor-pointer",
            step === 1
              ? "bg-white text-secondary-500 shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
              : "text-[#64748b] hover:text-primary-900"
          )}
        >
          Etapa 1
        </button>
        <button
          type="button"
          onClick={() => handleTabClick(2)}
          className={cn(
            "flex-1 py-[6px] px-3 font-sans font-medium text-sm leading-6 text-center transition-all cursor-pointer",
            step === 2
              ? "bg-white text-secondary-500 shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
              : "text-[#64748b] hover:text-primary-900"
          )}
        >
          Etapa 2
        </button>
      </div>

      {/* Form Card */}
      <form
        onSubmit={step === 1 ? handleNextStep : handleSubmit}
        className="bg-white border border-[#e2e8f0] flex flex-col w-full"
      >
        <div className="flex flex-col gap-4 p-6 w-full">
          {step === 1 ? (
            <div className="flex flex-col gap-4 animate-fade-in">
              <Input
                label="Nome completo:"
                placeholder="Pedro Duarte"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                error={errors.name}
                disabled={isSubmitting}
              />
              <Input
                label="Nome da empresa:"
                placeholder="Masterply solutions..."
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                error={errors.company}
                disabled={isSubmitting}
              />
              <Input
                label="Telefone / WhatsApp:"
                placeholder="(DD) 9 XXXX-XXXX"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                error={errors.phone}
                disabled={isSubmitting}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4 animate-fade-in">
              <Input
                label="E-mail para contato:"
                placeholder="nome@gmail.com"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={errors.email}
                disabled={isSubmitting}
              />
              <Input
                label="Tipo de projeto:"
                placeholder="Construção civil.."
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                error={errors.projectType}
                disabled={isSubmitting}
              />
              <Textarea
                label="Mensagem:"
                placeholder="Digite aqui sua mensagem...."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                error={errors.message}
                disabled={isSubmitting}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex px-6 pb-6 pt-0 w-full">
          {step === 1 ? (
            <button
              type="submit"
              className="bg-secondary-500 text-primary-900 font-sans font-medium text-sm h-12 w-full flex items-center justify-center gap-1 transition-colors hover:bg-secondary-600 cursor-pointer"
            >
              <span>Próximo</span>
              <ArrowRight className="size-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary-500 text-primary-900 font-sans font-medium text-sm h-12 w-full flex items-center justify-center gap-1 transition-colors hover:bg-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>{isSubmitting ? 'Enviando...' : 'Enviar formulário'}</span>
              {!isSubmitting && <ArrowUpRight className="size-4" />}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
