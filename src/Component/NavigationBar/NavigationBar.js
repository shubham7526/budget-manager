import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
  } from "react-router-dom";
import { Form, Row, Col, Button, Modal} from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';
import AddExpenditure from '../Expenditure/AddExpenditure';
import AddIncome from '../Income/AddIncome';

const NavigationBar=()=>{
    const [showExpenditure, setShowExpenditure] = useState(false);

    const handleCloseExpenditure = () => setShowExpenditure(false);
    const handleShowExpenditure = () => setShowExpenditure(true);

    const [showIncome, setShowIncome] = useState(false);

    const handleCloseIncome = () => setShowIncome(false);
    const handleShowIncome = () => setShowIncome(true);

  return (
    <div className="d-flex justify-content-evenly navigation-bar ">
        <Link to="/" className="button-link" >
            <div className="home-button text-center fw-bolder fs-5 p-4">Home</div>
        </Link>
        <div className="expenditure-button text-center fw-bolder fs-5 p-2">
            <div className="button-link">Expenditure</div>
            <div className="d-flex justify-content-evenly">               
                <button className="btn nav-button" onClick={handleShowExpenditure}>Add</button>
                <AddExpenditure handleShowExpenditure={handleShowExpenditure} handleCloseExpenditure={handleCloseExpenditure} showExpenditure={showExpenditure} />
                <Link to="/viewExpenditure">
                    <button className="btn nav-button" >View</button>
                </Link>    
            </div>
        </div>
        <div className="income-button text-center fw-bolder fs-5 p-2">
            <div className="button-link">Income</div>
            <div className="d-flex justify-content-evenly">
            <button className="btn nav-button" onClick={handleShowIncome}>Add</button>
                <AddIncome handleShowIncome={handleShowIncome} handleCloseIncome={handleCloseIncome} showIncome={showIncome} />
                <Link to="/viewIncome">
                    <button className="btn nav-button" >View</button>
                </Link>
            </div>
        </div>
        <Link to="/saving" className="button-link">
            <div className="saving-button text-center fw-bolder fs-5 p-4">Saving</div>
        </Link>
            
    </div>
  );
}

export default NavigationBar;
