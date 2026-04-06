'use client'

import { useState, useCallback } from 'react'
import { QUIZ_QUESTIONS, getRecommendation, type Recommendation } from '@/lib/quizLogic'
import { analytics } from '@/lib/analytics'

export default function QuizCard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const [showResult, setShowResult] = useState(false)

  const progress = showResult ? 100 : (currentStep / 5) * 100

  const selectOption = useCallback((step: number, label: string) => {
    setAnswers((prev) => ({ ...prev, [step]: label }))
    analytics.quizStepCompleted(step, label)
  }, [])

  const nextStep = useCallback(() => {
    if (currentStep < 5) {
      setCurrentStep((s) => s + 1)
    }
  }, [currentStep])

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1)
    }
  }, [currentStep])

  const handleShowResult = useCallback(() => {
    const rec = getRecommendation(answers)
    setRecommendation(rec)
    setShowResult(true)
    analytics.quizCompleted(rec.primaryService, answers)

    // Save to API
    fetch('/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        answers,
        recommendation: rec.primaryService,
        completed: true,
      }),
    }).catch(() => {})
  }, [answers])

  const retake = useCallback(() => {
    setCurrentStep(1)
    setAnswers({})
    setRecommendation(null)
    setShowResult(false)
  }, [])

  const currentQuestion = QUIZ_QUESTIONS[currentStep - 1]

  return (
    <div className="bg-white border border-border rounded-[16px] overflow-hidden shadow-[0_4px_32px_var(--shadow)]">
      {/* Progress bar */}
      <div className="h-1 bg-sand relative">
        <div
          className="h-full rounded-sm transition-[width] duration-400 ease-out"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--green), var(--green-mid))',
          }}
        />
      </div>

      {/* Quiz steps */}
      {!showResult && currentQuestion && (
        <div>
          <div className="pt-7 px-5 md:px-8 flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-warm-gray">
              Question {currentStep} of 5
            </span>
          </div>
          <div className="px-5 md:px-8 pt-6 pb-8">
            <div className="font-serif text-[22px] font-semibold text-dark mb-2 leading-[1.3]">
              {currentQuestion.question}
            </div>
            <div className="text-[13px] text-warm-gray mb-6 leading-[1.5]">{currentQuestion.hint}</div>
            <div className="flex flex-col gap-2.5">
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => selectOption(currentStep, opt.label)}
                  className={`flex items-center gap-3.5 px-[18px] py-3.5 rounded-[10px] border-[1.5px] cursor-pointer transition-all text-left ${
                    answers[currentStep] === opt.label
                      ? 'border-green bg-green-light'
                      : 'border-border bg-cream hover:border-green hover:bg-green-light'
                  }`}
                >
                  <span className="text-[22px] w-9 text-center flex-shrink-0">{opt.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-dark mb-0.5">{opt.label}</div>
                    <div className="text-[12px] text-warm-gray">{opt.desc}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
              <button
                type="button"
                onClick={prevStep}
                className={`bg-transparent border-none text-[13px] text-warm-gray cursor-pointer font-sans py-2 hover:text-ink transition-colors ${
                  currentStep === 1 ? 'invisible' : ''
                }`}
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={currentStep === 5 ? handleShowResult : nextStep}
                disabled={!answers[currentStep]}
                className="bg-green text-white border-none font-sans font-semibold text-sm px-7 py-[11px] rounded-[50px] cursor-pointer flex items-center gap-2 hover:bg-green-mid transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {currentStep === 5 ? 'See My Recommendation →' : 'Continue →'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Result panel */}
      {showResult && recommendation && (
        <div className="animate-[fadeIn_0.4s_ease]">
          <div className="bg-green-light border-b border-green/15 px-5 md:px-8 py-7">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-green mb-2">
              ✓ Your Match
            </div>
            <div className="font-serif text-[26px] font-bold text-dark mb-1">
              {recommendation.title}
            </div>
            <div className="text-sm text-medium">{recommendation.subtitle}</div>
          </div>
          <div className="px-5 md:px-8 py-7">
            <div className="text-sm text-medium leading-[1.7] mb-6 bg-paper border-l-[3px] border-l-green px-4 py-3.5 rounded-r-[6px]">
              {recommendation.reasoning}
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {/* Primary pick */}
              <a
                href={recommendation.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-[1.5px] border-green rounded-[10px] px-5 py-4 flex items-center gap-4 no-underline hover:shadow-[0_4px_16px_var(--shadow)] hover:-translate-y-px transition-all relative"
              >
                <div className="absolute -top-2 left-4 bg-green text-white text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-0.5 rounded-[10px]">
                  Top Pick
                </div>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: recommendation.primaryColor }}
                >
                  {recommendation.primaryIcon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm text-dark mb-0.5">{recommendation.primaryService}</div>
                  <div className="text-[12px] text-warm-gray">Best match for your needs</div>
                </div>
                <span className="text-warm-gray text-base flex-shrink-0">→</span>
              </a>

              {/* Alternative pick */}
              <a
                href={recommendation.alternativeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-[1.5px] border-border rounded-[10px] px-5 py-4 flex items-center gap-4 no-underline hover:border-green hover:shadow-[0_4px_16px_var(--shadow)] hover:-translate-y-px transition-all"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: recommendation.alternativeColor }}
                >
                  {recommendation.alternativeIcon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm text-dark mb-0.5">{recommendation.alternativeService}</div>
                  <div className="text-[12px] text-warm-gray">{recommendation.alternativeDesc}</div>
                </div>
                <span className="text-warm-gray text-base flex-shrink-0">→</span>
              </a>
            </div>

            <a
              href={recommendation.primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green text-white border-none font-sans font-semibold text-[15px] py-3.5 rounded-[10px] cursor-pointer flex items-center justify-center gap-2 no-underline hover:bg-green-mid transition-all mb-3"
            >
              Get Started with {recommendation.primaryService} →
            </a>

            <p className="text-[11px] text-warm-gray text-center mb-3 leading-[1.5]">
              Note: FormRight earns a commission if you sign up through our links, at no extra cost to you.
            </p>

            <button
              type="button"
              onClick={retake}
              className="w-full bg-transparent border-[1.5px] border-border text-medium font-sans text-[13px] font-medium py-2.5 rounded-[10px] cursor-pointer hover:border-ink hover:text-ink transition-all"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
