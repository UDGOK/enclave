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
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="fixed top-4 right-8 text-white text-opacity-80 text-right z-50">
      <div className="text-sm font-medium">
        {formatDate(time)}
      </div>
      <div className="text-xs font-light">
        {formatTime(time)}
      </div>
    </div>
  )
}
