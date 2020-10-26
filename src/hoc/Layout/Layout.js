import React, {Component} from 'react';
import Au from '../Au/Au';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



class Layout extends Component {
    state = {
        showSideDrawer: false
    }//state management 

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }//method

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>
        {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return(
            <Au>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
    <SideDrawer 
    open={this.state.showSideDrawer} 
    closed={this.sideDrawerClosedHandler}/>
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Au>
        )
    }
} 

export default Layout;