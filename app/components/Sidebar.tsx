'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { VscDebugReverseContinue } from "react-icons/vsc";
import Me from './Me';
import Menu from './Menu';
import Contact from './Contact';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const _handleOnClick = useCallback(() => {
      setIsOpen(!isOpen)
  }, [isOpen]);

  let domRef = useRef<HTMLDivElement>(null);
  let asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onTransitionStart = (event: TransitionEvent) => {
      if (event.propertyName !== 'transform') {
          return;
      }
      const transformMatrixList = window.getComputedStyle(domRef?.current?.firstChild as Element)
        ?.getPropertyValue('transform')?.slice(7, -1)?.split(',').map(x => parseInt(x, 10));

          if (
              transformMatrixList[0] === 1 &&
              transformMatrixList[1] === 0 &&
              transformMatrixList[2] === 0 &&
              transformMatrixList[3] === 1
              ) {
                  setIsOpen(false)
              }
      };

    const current = domRef?.current;

    current?.addEventListener('transitionstart', onTransitionStart);

    return () => {
      current?.removeEventListener('transitionstart', onTransitionStart);
    };

  }, [domRef]);

  useEffect(() => {
    const onTransitionStart = (event: TransitionEvent) => {
        if (event.propertyName !== 'width') {
            return;
        }

        const width = parseFloat(window.getComputedStyle(domRef?.current as Element).getPropertyValue('width').slice(0, -2));

        console.log(width)

        if (width < 151) {
          setIsOpen(true)
        }
    };

    const current = asideRef?.current;

    current?.addEventListener('transitionstart', onTransitionStart)

    return () => {
      current?.removeEventListener('transitionstart', onTransitionStart);
    };

  }, [asideRef]);

  return (
    <aside
      className={`
        bg-dark-green z-1 top-0 left-0 min-h-[100vh] transition-all
        sm:w-[30vh]
        pl-5 pr-1
        ${isOpen ? 'md:w-[30vh]' : 'md:w-[50px]' }
      `}
      ref={asideRef}
    >
      <div
        className={`
          p-[5px] min-h-[80px] w-full flex flex-row-reverse
        `}
        ref={domRef}
      >
        <VscDebugReverseContinue
          className={`
            md:border-[2px] md:rounded-[5px] md:border-gray-100 md:border-solid
            md:p-[5px] fill-gray-100
            ${isOpen ? 'md:my-[15px]' : 'md:my-[7px]'} md:mx-[7px]
            ${isOpen ? 'md:rotate-0' : 'md:rotate-180'}
            md:transition-all md:cursor-pointer md:hover:opacity-70
            sm:invisible
            ${isOpen ? '' : 'md:top-0 md:left-0 md:fixed'}
            text-5xl
          `}
          onClick={_handleOnClick}
        />
      </div>
      <div
        className={`
          w-full min-h-5 flex-col justify-start items-start gap-1 ml-8
          ${isOpen ? 'flex' : 'hidden'}
        `}
      >
        <Me />
        <Menu />
        <Contact />
      </div>

    </aside>
  )
}


export default Sidebar;