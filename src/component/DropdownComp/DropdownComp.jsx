import Dropdown from "react-bootstrap/Dropdown";

export default function DropdownComp({name, option, onChange}){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {option.map((val, index)=> (
                    <Dropdown.Item key={index} onClick={()=>onChange(val.value)}>{val.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
