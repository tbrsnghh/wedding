import React from 'react'
import CustomerInfo from '../customer/CustomerInfo'
import EventInfo from '../event/EventInfo'

export default function Step1GeneralInfo({ onNext }) {
  return (
    <div className='p-8 text-left'>
      <CustomerInfo />
      <EventInfo />
      <button
        onClick={onNext}
        className='bg-rose-500 text-white px-4 py-2 rounded mt-4'>Tiếp</button>
    </div>
  )
}
