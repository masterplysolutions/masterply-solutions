import { useState } from 'react'
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateStep2()) {
      setIsSubmitting(true)
      setSubmitStatus(null)
      try {
        const formDataObj = new FormData(e.target)
        formDataObj.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY)
        formDataObj.append("subject", "Novo Lead - Site Masterply Solutions")

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataObj
        })
        const data = await response.json()
        if (data.success) {
          setSubmitStatus('success')
          e.target.reset()
          setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            projectType: '',
            message: ''
          })
          if (onSubmitSuccess) {
            onSubmitSuccess(formData)
          }
        } else {
          setSubmitStatus('error')
        }
      } catch {
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleTabClick = (targetStep) => {
    if (submitStatus === 'success') return
    
    if (targetStep === 1) {
      setStep(1)
    } else if (targetStep === 2) {
      // Allow switching to step 2 only if step 1 is valid
      if (validateStep1()) {
        setStep(2)
      }
    }
  }

  return (
    <div className={cn("flex flex-col gap-[10px] w-full max-w-[500px]", className)}>
      {/* Tabs */}
      {submitStatus !== 'success' && (
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
      )}

      {/* Form Card */}
      {submitStatus === 'success' ? (
        <div className="bg-white border border-[#e2e8f0] flex flex-col items-center justify-center p-8 text-center py-12 animate-scale-in w-full">
          <CheckCircle2 className="size-16 text-secondary-500 mb-4 animate-scale-in" />
          <h3 className="font-sans font-bold text-2xl text-primary-900 mb-2">Mensagem enviada com sucesso!</h3>
          <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-[340px] mb-8">
            Em breve, nossa equipe entrará em contato com você.
          </p>
          <button
            onClick={() => {
              setSubmitStatus(null)
              setStep(1)
            }}
            className="border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-primary-900 font-sans font-medium text-sm h-12 px-6 flex items-center justify-center transition-colors cursor-pointer w-full select-none"
          >
            Enviar outro formulário
          </button>
        </div>
      ) : (
        <form
          onSubmit={step === 1 ? handleNextStep : handleSubmit}
          className="bg-white border border-[#e2e8f0] flex flex-col w-full"
        >
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <div className="flex flex-col gap-4 p-6 w-full">
            {step === 1 ? (
              <div className="flex flex-col gap-4 animate-fade-in">
                <Input
                  label="Nome completo:"
                  placeholder="Pedro Duarte"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  error={errors.name}
                  disabled={isSubmitting}
                />
                <Input
                  label="Nome da empresa:"
                  placeholder="Masterply solutions..."
                  name="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  error={errors.company}
                  disabled={isSubmitting}
                />
                <Input
                  label="Telefone / WhatsApp:"
                  placeholder="(DD) 9 XXXX-XXXX"
                  name="phone"
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
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={errors.email}
                  disabled={isSubmitting}
                />
                <Input
                  label="Tipo de projeto:"
                  placeholder="Construção civil.."
                  name="projectType"
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  error={errors.projectType}
                  disabled={isSubmitting}
                />
                <Textarea
                  label="Mensagem:"
                  placeholder="Digite aqui sua mensagem...."
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  error={errors.message}
                  disabled={isSubmitting}
                />
              </div>
            )}
            {submitStatus === 'error' && (
              <p className="font-sans text-sm text-rose-500 font-medium text-center animate-fade-in mt-2">
                Erro ao enviar a mensagem. Por favor, tente novamente.
              </p>
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
      )}
    </div>
  )
}
