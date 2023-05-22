import Label from "./Label"
import Input from "./input"

const InputForm = (props) => {
    const {label, name, placeholder, type} = props
  return (
    <div className="mb-6">
        <Label classname="" htmlfor={name}>{label}</Label>
        <Input classname="" name={name} placeholder={placeholder} type={type}/>
    </div>
  )
}

export default InputForm