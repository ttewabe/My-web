import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Service from './ServiceComponent';
import Support from './SupportComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        customers: state.customers,
        infos: state.infos,
        helps: state.helps,
        finances: state.finances,
    };
}
class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <About
                    finance={this.props.finances.filter( finance => finance.featured)[0]}
                    info={this.props.infos.filter(info => info.featured)[0]}
                    help={this.props.helps.filter( help => help.featured)[0]}
                />
            );
        };
        return (
            <div >
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/service' component={() => <Service customers={this.props.customers} />} />
                    <Route exact path='/support' component={Support} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}
export default withRouter(connect(mapStateToProps)(Main));