'use client'

import { tm } from '@/utils/tw-merge'

// 배경색상과 너비를 결정하는 요소를 props로 전달
interface ButtonProps {
  fill?: boolean
  wid?: number | string
}

function Button({
  children,
  fill = true,
  wid = 'fit',
  onClick,
  ...restProps
}: React.ComponentProps<'button'> & ButtonProps) {
  return (
    <>
      {fill ? (
        <button
          className={tm(
            'flex justify-center items-center border text-white bg-primary border-primary py-2 px-4 rounded-2xl text-center cursor-pointer',
            `w-${wid}`,
            'hover:scale-110 transition duration-75'
          )}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </button>
      ) : (
        <button
          className={tm(
            'flex justify-center items-center border border-primary py-2 px-4 rounded-2xl text-center cursor-pointer',
            `w-${wid}`,
            'hover:bg-primary hover:text-white'
          )}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button
