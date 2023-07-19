type InputProps = {
  id: string,
  value: string,
  onChange: any,
  label: string,
  type?: string,
}

export const Input: React.FC<InputProps> = ({id, value, onChange, label, type}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-md
          px-6
          pt-6
          pb-1
          text-white
          text-md
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
        "
      />
      <label
        htmlFor={id}
        className="
          absolute
          top-4
          left-6
          z-10
          text-md
          text-zinc-400
          transform
          duration-150
          -translate-y-3
          scale-75
          origin-[0]
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-3
          peer-focus:scale-75
        "
      >
        {label}
      </label>
    </div>
  )
}