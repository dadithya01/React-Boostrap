import './style.css';

// export default function Button(props) {
//     return(
//         <button className="button" style={{backgroundColor: props.bgColor}}>
//             {props.name}
//         </button>
//     )
// }

export default function Button({name, bgColor, onClick}) {

    function click () {
        console.log("Click Button");
    }

    return(
        <button onClick={()=> {onClick(name)}} className="button" style={{backgroundColor: bgColor}}>
            {name}
        </button>
    )
}
