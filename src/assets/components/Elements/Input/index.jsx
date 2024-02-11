import { forwardRef } from "react"
import Label from "./Label"
import Input from "./input"

const InputForm = forwardRef((props,ref) => {
    const {label, name, placeholder, type, classname} = props
  return (
    <div className="mb-6">
        <Label classname={classname} htmlfor={name}>{label}</Label>
        <Input classname={`${classname}`} name={name} placeholder={placeholder} type={type} ref={ref}/>
    </div>
  )
})

export default InputForm