import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import {useContext, useState} from 'react';
const AddForm = () => {
    const { addEmployee } = useContext(EmployeeContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee( name, email, address,phone );
    }
    return (

        <Form onSubmit = {handleSubmit}>
            <Form.Group>
                <Form.Control type="Text" placeholder="Name *" value={name} onChange={e => setName(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="email" placeholder="E-Mail *" value={email} onChange={e => setEmail(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="number" placeholder="Phone *" value={phone} onChange={e => setPhone(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control as="textarea" placeholder="Adress" value={address} onChange={e => setAddress(e.target.value)} row = {3}></Form.Control>
            </Form.Group>
            <Button variant= "success" type= "submit" block>
                Add New Employee
            </Button>
        </Form>
    )
}
export default AddForm;