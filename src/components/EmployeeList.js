import Employee from './Employee';
import {Button, Modal, Alert } from 'react-bootstrap';
import AddForm from './AddForm';
import { useContext, useEffect, useState, useRef } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import Pagination from './Pagination';
const EmployeeList = () => {
    const {employees} = useContext(EmployeeContext);
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[employeesPerPage, setEmployeesPerPage] = useState(2);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };
    const myRef = useRef(null);
    const onButtonClick = () => {
        myRef.current.focus();
    }
    useEffect(() => {
        handleClose();
        return () => handleShowAlert();
    },[employees])
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const totalEmployeesNum = employees.length;
    const currentEmployees = employees.sort((a, b) => a.name.localeCompare(b.name)).slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(employees.length / employeesPerPage);
    return (
        <>
         <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                  <Button  onClick = {handleShow} className="btn btn-secondary btn-outline-dark" data-toggle="modal">
                    <i className="material-icons">&#xE147;</i>
                    <span>Add New Employee</span>
                  </Button>
                </div>
              </div>
            </div>
            <Alert show = {showAlert} variant="success">
                Employee List succesfully updated!
            </Alert>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentEmployees.map((employee) => (
                        <tr key ={employee.id}>
                            <Employee employee={employee} />
                        </tr>
                        
                    ))
                }
            </tbody>
        </table>
        <Modal show = {show} onHide = {handleClose}>
            <Modal.Header className = "modal-header" closeButton>
                <Modal.Title>
                    Add Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant ="secondary">
                    CLOSE
                </Button>
            </Modal.Footer>
        </Modal>
        <Pagination currentEmployees={currentEmployees} totalEmployeesNum = {totalEmployeesNum} pages = {totalPagesNum} setCurrentPage = {setCurrentPage} employeesPerPage = {employeesPerPage} />
        
        {/*<input type="text" ref = {myRef}></input>
        <button onClick = {onButtonClick}>Focus Input</button>*/}
        </>
    );
}
export default EmployeeList;