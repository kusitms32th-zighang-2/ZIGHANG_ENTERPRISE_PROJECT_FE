const Input = ({ className, type, ...props }: React.ComponentProps<'input'>) => {
  return (
    <input
      type={type}
      className={[
        'w-full border-none bg-transparent shadow-none outline-none',
        'hover:border-none focus:border-none focus:ring-0',
        'focus-visible:border-none focus-visible:ring-0 active:border-none',
        className ?? '',
      ].join(' ')}
      {...props}
    />
  )
}

export default Input
