import { useEffect, useState } from 'react'

export default function TimeDisplay() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="fixed bottom-8 right-8 text-white text-opacity-80">
      <div className="text-6xl font-light tracking-tighter">
        {formatTime(time)}
      </div>
      <div className="text-xl font-medium mt-2">
        {formatDate(time)}
      </div>
    </div>
  )
}
