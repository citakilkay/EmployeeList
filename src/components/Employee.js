import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState, useEffect } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm';
const Employee = ({employee}) => {
    const {deleteEmployee} = useContext(EmployeeContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    useEffect(() => {
        handleClose();
    }, [employee])
    return (
        <>
            
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <OverlayTrigger
                    overlay = {
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow} className="btn btn-act text-warning edit" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                    </button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(employee.id)} className="btn btn-act text-danger delete" data-toggle="modal">
                        <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                    </button>
                </OverlayTrigger>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theEmployee = {employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick = {handleClose}>
                        CLOSE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Employee;