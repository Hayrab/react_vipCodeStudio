import { forwardRef } from "react"
import Label from "./Label"
import Input from "./input"

const InputForm = forwardRef((props,ref) => {
    const {label, name, placeholder, type} = props
  return (
    <div className="mb-6">
        <Label classname="" htmlfor={name}>{label}</Label>
        <Input classname="" name={name} placeholder={placeholder} type={type} ref={ref}/>
    </div>
  )
})

export default InputForm