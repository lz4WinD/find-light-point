'use client'

import { GameProvider, useGame } from '@/hooks/useGame'
import LandingPage from '@/components/LandingPage'
import QuizPage from '@/components/QuizPage'
import ResultPage from '@/components/ResultPage'

function GameContent() {
  const { gameState } = useGame()

  return (
    <>
      {gameState === 'landing' && <LandingPage />}
      {gameState === 'quiz' && <QuizPage />}
      {gameState === 'result' && <ResultPage />}
    </>
  )
}

export default function Home() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  )
}