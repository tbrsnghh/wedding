import React from 'react'

export default function Step5Confirmation({onNext, onBack}) {
  return (
    <div>Step5Confirmation
      <div className='space-x-4'>
      <button onClick={onBack} className='bg-white text-black px-4 py-2 rounded mt-4'>Bước trước</button>
      <button
        onClick={onNext}
        className='bg-rose-500 text-white px-4 py-2 rounded mt-4'>Tiếp
        </button>
      </div>
    </div>
  )
}
