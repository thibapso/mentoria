import { gsap } from 'gsap'

export function cycleWords() {
  const words = ['direção.', 'clareza.', 'uma chance.', 'MentorIA.']
  const wordElement = document.querySelector('.word')

  if (!wordElement) return

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 })

  words.forEach((word, i) => {
    const isLast = i === words.length - 1
    const fadeDuration = isLast ? 1.2 : 0.6
    const holdDuration = isLast ? 2.2 : 0.9 // última fica mais tempo visível

    tl.to(wordElement, {
      opacity: 0,
      y: -12,
      duration: fadeDuration,
      onComplete: () => {
        wordElement.textContent = word
      }
    })
      .to(wordElement, {
        opacity: 1,
        y: 0,
        duration: fadeDuration
      })
      .to({}, { duration: holdDuration })
  })
}
