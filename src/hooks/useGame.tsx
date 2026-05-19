'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { questions } from '@/lib/questions'
import { analyzeAnswers, AnalysisResult } from '@/lib/analysis'

type GameState = 'landing' | 'quiz' | 'result'

interface GameContextType {
  gameState: GameState
  currentQuestion: number
  answers: Record<number, string>
  result: AnalysisResult | null
  startQuiz: () => void
  selectAnswer: (questionId: number, optionId: string) => void
  nextQuestion: () => void
  prevQuestion: () => void
  showResult: () => void
  restart: () => void
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>('landing')
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [result, setResult] = useState<AnalysisResult | null>(null)

  useEffect(() => {
    if (Object.keys(answers).length === questions.length && !result) {
      const analysis = analyzeAnswers(answers)
      setResult(analysis)
    }
  }, [answers, result])

  const startQuiz = () => {
    setGameState('quiz')
    setCurrentQuestion(1)
    setAnswers({})
    setResult(null)
  }

  const selectAnswer = (questionId: number, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const showResult = () => {
    const analysis = analyzeAnswers(answers)
    setResult(analysis)
    setGameState('result')
  }

  const restart = () => {
    setGameState('landing')
    setCurrentQuestion(1)
    setAnswers({})
    setResult(null)
  }

  return (
    <GameContext.Provider
      value={{
        gameState,
        currentQuestion,
        answers,
        result,
        startQuiz,
        selectAnswer,
        nextQuestion,
        prevQuestion,
        showResult,
        restart
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}