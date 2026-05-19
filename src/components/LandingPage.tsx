'use client'

import { useGame } from '@/hooks/useGame'
import { motion } from 'framer-motion'

export default function LandingPage() {
  const { startQuiz } = useGame()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="text-7xl mb-8"
        >
          ✨
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          发现我的闪光点
        </h1>

        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          在生活中，你是否常常忽略了自己的优点？
        </p>
        <p className="text-base text-gray-500 mb-8">
          通过 18 道场景题，我们将帮助你发现那些被你遗忘的闪光点。
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-orange-50 rounded-2xl p-6 mb-8 text-left"
        >
          <h3 className="font-semibold text-orange-700 mb-3">💡 这份测试适合这样的你：</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-0.5">•</span>
              总是觉得自己不够好，经常自我否定
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-0.5">•</span>
              习惯看到自己的缺点，忽略了自己的优点
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-0.5">•</span>
              想要更了解自己，发现不一样的自己
            </li>
          </ul>
        </motion.div>

        <motion.button
          onClick={startQuiz}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 px-8 bg-gradient-to-r from-orange-500 to-orange-400
                     text-white font-semibold text-lg rounded-2xl shadow-lg shadow-orange-200
                     hover:shadow-xl transition-all"
        >
          开始探索 →
        </motion.button>

        <p className="text-xs text-gray-400 mt-4">
          约需 5 分钟 · 18 道题 · 完成后获得专属报告
        </p>
      </motion.div>
    </div>
  )
}