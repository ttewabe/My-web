import React from 'react';
import { Breadcrumb, BreadcrumbItem, Media, Accordion, card } from 'reactstrap';
import { Link,Switch,Route } from 'react-router-dom';
import Accounting from './AccountingComponent';
import Tax from './TaxComponent';
import Payroll from './PayrollComponent';
import Company from './CompanyComponent';
import { Fade, Stagger } from 'react-animation-components';


function RenderCustomers({customer}) {
        if (customer) {
            return (
            <React.Fragment>
                <Media body className="ml-0 mb-4">
                    <Media heading>{customer.name}</Media>
                    {customer.description}
                </Media>
                <Media object className="ml-5 mb-4" src={customer.image} alt={customer.name}  width="180"/>    
            </React.Fragment>  
            );
        } 
            return (
                <div></div>
            );
    }
function Service(props) {

    const customers = props.customers.map(customer => {
        return (
            <Fade in key={customer.id}>
            <Media tag="li" key={customer.id}>
            <RenderCustomers customer={customer}/>
            </Media> 
            </Fade>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col breadcrumb">Services</div>
            </div>
            <div className="row">
                    <div className="col breadcrumb">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home" style={{color:"white", fontSize:"30px"}}>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active style={{color:"white" , fontSize:"30px"}}>Service</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <h1 className="breadCrumb1 " style={{ color:"olivedrab"}}>Our Main Services</h1>
                    <h4>Economic services provided by the finance industry, which encompasses a broad range of businesses that manage money, including credit unions.</h4>
                </div>
                    </div>
                    <div className="row row-content mt-5">
                        <div className="col-md-3">
                            <Accounting/>
                        </div>
                        <div className="col-md-3" >
                            <Tax/>
                        </div>
                        <div className="col-md-3" >
                            <Payroll/>
                        </div>
                        <div className="col-md-3">
                            <Company/>
                        </div>
                </div>
            <div className="row row-content mt-5">
                <div className="col-12 mt-5">
                    <h2 className="breadCrumb1" style={{ color:"olivedrab"}}>More Detail About Our Services</h2>
                </div>
                <div className="col mt-4">
                    <Media list>
                      <Stagger in>
                        {customers}
                      </Stagger>
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default Service