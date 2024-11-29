// import Button from "../../component/Button/Button";
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownComp from "../../component/DropdownComp/DropdownComp.jsx";

const option = [
    {
        name: 'Male',
        value: 'male'
    },
    {
        name: 'Female',
        value: 'female'
    },
    {
        name: 'None',
        value: 'none'
    },
]
const option1 = [
    {
        name: 'Chamikara',
        value: 'chamikara'
    },
    {
        name: 'Yasindu',
        value: 'yasindu'
    },
    {
        name: 'Chamindi',
        value: 'chamindi'
    },
]
export default function Dashboard () {
    return(
        <div>
            <h1>Dashboard</h1>
            <br/><br/>
            <NavLink to={'/user'}>
                <Button name={'Go to User'} bgColor={'#246b06'}/>
            </NavLink>
            <br/><br/>

            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
            <br/><br/>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

           <DropdownComp name={"Select Gender"} option={option} onChange={(val)=> console.log(val)}/>

            <br/><br/>

            <DropdownComp name={"Select Name"} option={option1} onChange={(val)=> console.log(val)}/>
        </div>
    )
}
