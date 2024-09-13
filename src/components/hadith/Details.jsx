import React from 'react'

export default function Details({title,description,largeFont,color}) {
  return (
    <div 
    className={`px-2 py-2 space-y-3 ${color} rounded`}
    >
    <p className="font-bold border-b">{title}</p>
    <p className={largeFont && 'text-2xl'}>{description}</p>
  </div>
  )
}
