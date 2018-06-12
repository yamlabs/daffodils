// in src/comments/ApproveButton.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import { refreshView as refreshViewAction } from 'admin-on-rest';
import { simpleRestClient } from 'admin-on-rest';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon'
import TransactionIcon from 'material-ui/svg-icons/action/payment';
import { UPDATE } from 'admin-on-rest';
import testServerClient from './restClient'
// in src/restClient.js
import { fetchJson,fetchUtils } from 'admin-on-rest';
import { RaisedButton } from 'material-ui/RaisedButton';
// import { Button } from 'material-ui/Button'
const httpClient_mod = (url, options = {}) => {
    return fetchUtils.fetchJson(url, options);
}

const soldStyles = {
    color:"green",
}

const buyStyles = {
    color:"white",
    "backgroundColor":"#F44336"
}

// in src/comments/ApproveButton.js
class SoldButton extends Component {
    constructor(){
        super();
        this.state = {
            activated: true
        }
    }

    handleClick = () => {
        const { push, record, showNotification, refreshView } = this.props;
        
        // const updatedRecord = { ...record, is_approved: true };
        record.origprice = record.origprice.replace("₱","");
        // record.onlineprice = record.onlinerice.replace("₱","");
        
        const restClienx = testServerClient("http://localhost:8080", httpClient_mod);
        restClienx(UPDATE, 'sold', { id: record.id, data:record })
            .then(() => {
                showNotification('Item marked as sold!');
                record.itemssold++;
                this.runSold(record);    
                refreshView();
                
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: comment not approved', 'warning')
            });
    }

    runSold = (record) => {
        console.log(record);
        if(record.itemssold == record.origquantity){
            this.setState({
                activated: false
            });
        }
        console.log("Set as sold!");
    }

    render() {
        const {record} = this.props;
        console.log(this.state.activated);
        if(record.itemssold == record.origquantity){
            this.state.activated = false;
        }
        if(!this.state.activated){
            return ( <FlatButton label="Sold!" style={soldStyles} disabled/>  );
        }
        // if(record.origquantity <= record.itemssold){
        //     return ( <FlatButton label="Sold!" style={soldStyles} disabled/>  );    
        // }
        return <FlatButton label="Buy" variant="raised" style={buyStyles}  onClick= {this.handleClick} /> ;
    }   
}

SoldButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
    refreshView: PropTypes.func.isRequired
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
    refreshView: refreshViewAction
})(SoldButton);