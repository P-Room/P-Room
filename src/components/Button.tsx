interface ButtonProps {
  fill: boolean
}

function Button({
  children,
  fill,
}: React.ComponentProps<'button'> & ButtonProps) {
  return (
    <>
      {fill ? (
        <button className="flex justify-center items-center border text-white bg-primary border-primary py-2 px-4 rounded-2xl text-center cursor-pointer">
          {children}
        </button>
      ) : (
        <button className="flex justify-center items-center border border-primary py-2 px-4 rounded-2xl text-center cursor-pointer">
          {children}
        </button>
      )}
    </>
  )
}

export default Button
