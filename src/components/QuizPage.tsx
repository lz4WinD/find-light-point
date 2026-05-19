'use client'

import { useGame } from '@/hooks/useGame'
import { motion, AnimatePresence } from 'framer-motion'
import { questions } from '@/lib/questions'

export default function QuizPage() {
  const { currentQuestion, answers, selectAnswer, nextQuestion, prevQuestion, showResult, gameState } = useGame()

  if (gameState !== 'quiz') return null

  const question = questions[currentQuestion - 1]
  const totalQuestions = questions.length
  const selectedAnswer = answers[question.id]
  const progress = (currentQuestion / totalQuestions) * 100

  const handleFinish = () => {
    showResult()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-amber-600 font-medium">
              第 {currentQuestion} / {totalQuestions} 题
            </span>
            <span className="text-xs text-amber-500">
              {Math.round(progress)}% 完成
            </span>
          </div>
          <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-xs font-medium text-orange-600 bg-orange-50 rounded-full mb-4">
                {question.dimensionName}
              </span>
              <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
                {question.question}
              </h2>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === option.id
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => selectAnswer(question.id, option.id)}
                    className={`
                      w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200
                      ${isSelected
                        ? 'border-orange-400 bg-orange-50 shadow-md'
                        : 'border-gray-100 bg-white hover:border-orange-200 hover:bg-orange-50/50'
                      }
                    `}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`
                        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                        ${isSelected
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-500'
                        }
                      `}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className={`text-base ${isSelected ? 'text-orange-700 font-medium' : 'text-gray-700'}`}>
                        {option.text}
                      </span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t border-orange-100">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex gap-3">
            {currentQuestion > 1 && (
              <button
                onClick={prevQuestion}
                className="flex-1 py-3 px-6 rounded-xl border-2 border-gray-200 text-gray-600 font-medium
                           hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                ← 上一题
              </button>
            )}
            {currentQuestion < totalQuestions ? (
              <button
                onClick={nextQuestion}
                disabled={!selectedAnswer}
                className={`
                  flex-1 py-3 px-6 rounded-xl font-medium transition-all
                  ${selectedAnswer
                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-200 hover:shadow-xl'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                下一题 →
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={!selectedAnswer}
                className={`
                  flex-1 py-3 px-6 rounded-xl font-medium transition-all
                  ${selectedAnswer
                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-200 hover:shadow-xl animate-glow'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                查看我的闪光点 ✨
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}