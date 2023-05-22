function Label(props) {
    const {htmlfor, classname, children} = props
  return (
    <label 
    htmlFor={htmlfor}
    className={`block text-slate-700 text-sm font-bold mb-2 ${classname}`}>
      {children}
  </label>
  )
}

export default Label