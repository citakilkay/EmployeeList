import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';
const EditForm = ({theEmployee}) => {
    const { updateEmployee } = useContext(EmployeeContext);
    const employee = theEmployee;
    const id = employee.id;
    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [phone, setPhone] = useState(employee.phone);
    const [address, setAddress] = useState(employee.address);
    const updatedEmployee = {id, name, email, phone, address};
    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    }
    return (

        <Form onSubmit={handleSubmit}>
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
                <Form.Control as="textarea" placeholder="Adress" value={address} onChange={e => setAddress(e.target.value)} row={3}></Form.Control>
            </Form.Group>
            <Button variant="success" type="submit" block>
                Update Employee
            </Button>
        </Form>
    )
}
export default EditForm;