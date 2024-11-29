
export default function TextField({placeholder, type, onChange}) {

    return(
        <input onChange={(val)=> onChange(val.target.value)} type={type} placeholder={placeholder}/>
    )
}
