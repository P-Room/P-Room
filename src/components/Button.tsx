import { tm } from '@/utils/tw-merge'

interface ButtonProps {
  fill?: boolean
  wid?: number | string
}

function Button({
  children,
  fill = true,
  wid = 'fit',
}: React.ComponentProps<'button'> & ButtonProps) {
  return (
    <>
      {fill ? (
        <button
          className={tm(
            'flex justify-center items-center border text-white bg-primary border-primary py-2 px-4 rounded-2xl text-center cursor-pointer',
            `w-${wid}`
          )}
        >
          {children}
        </button>
      ) : (
        <button
          className={tm(
            'flex justify-center items-center border border-primary py-2 px-4 rounded-2xl text-center cursor-pointer',
            `w-${wid}`
          )}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button
