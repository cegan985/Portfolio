import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'


type Props = {}

export default function Profile({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi, my name is Connor Egan', 'I am a', 'Developer', 'Designer', 'Creator'],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img src='IMG_7766.JPG' alt=''/>
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#472c52' />

        </h1>
        </div>
    </div>
  )
}