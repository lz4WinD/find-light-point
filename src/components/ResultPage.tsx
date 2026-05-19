'use client'

import { useGame } from '@/hooks/useGame'
import { motion } from 'framer-motion'
import { dimensions } from '@/lib/questions'

export default function ResultPage() {
  const { result, restart } = useGame()

  if (!result) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-6xl mb-4"
          >
            🌟
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            你的闪光点报告
          </h1>
          <p className="text-gray-600">
            感谢你的参与，以下是你发现的闪光点
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 border border-orange-100"
          >
            <h2 className="text-lg font-semibold text-orange-700 mb-3">📝 你的核心闪光点</h2>
            <div className="space-y-4">
              {result.sparklePoints.map((sparkle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{getDimensionEmoji(sparkle.dimension)}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-1">{sparkle.trait}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{sparkle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">📊 你的维度得分</h2>
            <div className="grid grid-cols-2 gap-3">
              {dimensions.map((dim) => {
                const score = result.dimensionScores.find(d => d.dimension === dim.id)
                return (
                  <div
                    key={dim.id}
                    className="bg-gray-50 rounded-xl p-4 text-center"
                  >
                    <span className="text-2xl mb-2 block">{dim.icon}</span>
                    <span className="text-sm text-gray-600 block mb-1">{dim.name}</span>
                    <span className="text-lg font-bold text-orange-600">{score?.score || 0}%</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white"
          >
            <h2 className="text-lg font-semibold mb-3">💭 想对你说</h2>
            <p className="text-gray-200 leading-relaxed text-sm">
              {result.summary}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4">🏆 你的人格特质</h2>
            <div className="flex flex-wrap gap-2">
              {result.topTraits.map((trait, index) => (
                <motion.span
                  key={trait.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    ${trait.strength === 'high'
                      ? 'bg-orange-100 text-orange-700'
                      : trait.strength === 'medium'
                      ? 'bg-amber-50 text-amber-600'
                      : 'bg-gray-100 text-gray-600'
                    }
                  `}
                >
                  {trait.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={restart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-400
                       text-white font-semibold text-lg rounded-2xl shadow-lg shadow-orange-200"
          >
            重新测试 🔄
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

function getDimensionEmoji(dimension: string): string {
  const emojiMap: Record<string, string> = {
    'self-awareness': '💫',
    'empathy': '🤝',
    'resilience': '⚡',
    'values': '⚖️',
    'creativity': '🎨',
    'growth': '🌱'
  }
  return emojiMap[dimension] || '✨'
}