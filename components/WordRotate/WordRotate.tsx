"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  className?: string
  motionProps?: HTMLMotionProps<"div">
}

export function WordRotate({
  words,
  duration = 2500,
  className,
  motionProps,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(className)}
          {...motionProps}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

