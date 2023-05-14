import React from 'react'
import Messages from './Messages'
import Form from './Form'

export default function Chatbox() {
  return (
    <section className='w-10/12 mx-auto mt-14 h-[calc(100vh-241px)] lg:h-[calc(100vh-259px)] bg-slate-200'>
        <div className=' flex flex-col justify-end h-full '>
            <Messages />
            <Form />
        </div>
    </section>
  )
}
