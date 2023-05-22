const Input = (props) => {
    const {placeholder, classname, name, type } = props

  return (
    <input type={type} className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50 ${classname}`} placeholder={placeholder}
    name={name}
    id={name} />
  )
}

export default Input