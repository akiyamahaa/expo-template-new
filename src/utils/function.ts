import * as Speech from 'expo-speech'

export function getRandomArray(arr: any[], numberOfElements: number) {
  const shuffled = arr.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, numberOfElements)
}

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60000)
  const seconds = Math.floor((time % 60000) / 1000)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export function getRandomInt(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}

export const speakText = (text: string, language = 'vi') => {
  return new Promise((resolve) => {
    Speech.speak(text, {
      language,
      onDone: resolve as any, // Resolve the promise when speaking is done
      onError: resolve as any, // Resolve even if there is an error to avoid blocking
    })
  })
}
