import React from 'react';
import { List, Edit, Create, Filter, BooleanInput, ReferenceArrayInput,SelectArrayInput, Datagrid, ReferenceField, TextField, DateInput, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import {DependentInput} from 'aor-dependent-input';
import { CardActions } from 'material-ui/Card';
import {FlatButton, RaisedButton, FontIcon }from 'material-ui';
import Toggle from 'material-ui/Toggle';
import { CreateButton, RefreshButton } from 'admin-on-rest';
import AutoComplete from 'material-ui/AutoComplete';
import SoldButton from './SoldButton'

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const dateRangeStyle = {
    display: 'inline-block'
}


const TransactionActions = ({ resource, filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions style={cardActionStyle}>
        {/* <Toggle label="IN STOCK?" labelStyle={isSoldLabelStyle} labelPosition="right" style={isSoldStyle}/> */}
        {filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' }) }
        <CreateButton basePath={basePath} />
        <RefreshButton />
        
        {/* Add your custom actions */}
        {/* <FlatButton primary label="Custom Action" onClick={customAction} /> */}
    </CardActions>
);


const TransactionFilter = (props) => (
    <Filter {...props}>

        <TextInput label="Name Search" source="name" alwaysOn />
        <ReferenceArrayInput label="Location" source="location_ids" reference="location"   allowEmpty>
            <SelectArrayInput label="Location" optionText="name" />
        </ReferenceArrayInput>
        <BooleanInput label="Show only items in stock" source="isStockOnly" />
        <DateInput label="From Date" source="date_stored_from" />
        <DateInput label="To Date" source="date_stored_to" />
        {/* <TextInput label="Title" source="title" defaultValue="Hello, World!" /> */}
    </Filter>
);

const TransactionTitle = ({ record }) => {
    return <span>Transaction #{record.id}</span>;
};

export const TransactionList = (props) => (
    <List {...props } title="Transactions List" >
        <Datagrid>
            <TextField source="id" />
            <TextField source="datestored" label= "Date Bought"/>
            <TextField source="itemLocation.name" label ="Name" />
            <TextField source="itemLocation.location.address" label="Address" />
            <TextField source="price_bought" label="Price Bought" />
            <TextField source="itemLocation.origprice" label="Original Price" />
            <DeleteButton />
        </Datagrid>
    </List>
);


