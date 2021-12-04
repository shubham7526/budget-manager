import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import AddExpenditure from './Component/Expenditure/AddExpenditure';
import ViewExpenditure from './Component/Expenditure/View Expenditure';
import AddIncome from './Component/Income/AddIncome';
import ViewIncome from './Component/Income/ViewIncome';
import Saving from './Component/Saving/Saving';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import { ContextApi } from './ContextApi/ContextApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Router.css';

const PageRouter = () =>{

    const filter = useContext(ContextApi).filter;
   
    
    return (
        <Router>
            <div>
                <NavigationBar/>
                <div className="d-flex">
                    <div className="side-nav">                        
                            <div className="filter" onClick={()=> filter("day")} >Day-Wise</div>
                            <div className="filter" onClick={()=> filter("month")}>Month-Wise</div>
                            <div className="filter" onClick={()=> filter("year")}>Year-Wise</div>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/addExpenditure" exact>
                                <AddExpenditure/>
                            </Route>
                            <Route path="/viewExpenditure" exact>
                                <ViewExpenditure/>
                            </Route>
                            <Route path="/addIncome" exact>
                                <AddIncome/>
                            </Route>
                            <Route path="/viewIncome" exact>
                                <ViewIncome/>
                            </Route> 
                            <Route path="/saving" exact>
                                <Saving/>
                            </Route>                   
                            <Route path="/" exact>
                                <ViewExpenditure/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
        )
}
 export default PageRouter;