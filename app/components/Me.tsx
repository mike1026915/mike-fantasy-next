import React from "react";
import Image from 'next/image'

const Me = () => {
  return (
    <div
      className="flex flex-col justify-center mb-1"
    >
      <div
        className="relative w-[25vh] h-[25vh] mb-2 "
      >
        <Image
          src="/Mike2.jpg"
          alt="Mike Picture"
          fill={true}
          className="rounded-full"
        />
      </div>
      <div
        className="text-5xl font-bold mt-10 ml-12"
      >
        Mike Fang
      </div>
      <q
        className="text-base italic leading-8 tracking-wider mt-5 mx-10"
      >
        Try my best to do right things with right people then enjoy an easy life
      </q>

    </div>
  )
}

export default Me;