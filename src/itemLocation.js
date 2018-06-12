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


const ItemLocationActions = ({ resource, filters, displayedFilters, filterValues, basePath, showFilter }) => (
    <CardActions style={cardActionStyle}>
        {/* <Toggle label="IN STOCK?" labelStyle={isSoldLabelStyle} labelPosition="right" style={isSoldStyle}/> */}
        {filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' }) }
        <CreateButton basePath={basePath} />
        <RefreshButton />
        
        {/* Add your custom actions */}
        {/* <FlatButton primary label="Custom Action" onClick={customAction} /> */}
    </CardActions>
);


const ItemLocationFilter = (props) => (
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

export const ItemLocationList = (props) => (
    <List {...props } title="Stock / Location List" actions={<ItemLocationActions />} filters={<ItemLocationFilter />}>
        <Datagrid>
            <TextField source="datestored" label= "Date Stored"/>
            <TextField source="name" label ="Name" />
            <TextField source="location.address" label="Address" />
            <TextField source="remaining" label="Remaining" />
            <TextField source="origprice" label="Base Price" />
            <TextField source="onlineprice" label="Online Price" />
            <TextField source="retailprice" label="Retail Price" />
            <TextField source="earnings" label="Earnings" />
            {/* <FlatButton icon={<FontIcon className="muidocs-icon-action-done" />} label="Mark as Sold" primary={true} /> */}
            <SoldButton label="Mark as Sold"/>
            <EditButton  fullWidth="true" />
            <DeleteButton />
        </Datagrid>
    </List>
);

const ItemLocationTitle = ({ record }) => {
    return <span>Item {record ? `"${record.name}` : ''} @ {record ? `${record.location.address}"` : ''}</span>;
};

const ItemLocationCreateTitle = () => {
    return <span> Add Stock </span>;
}

export const ItemLocationEdit = (props) => (
    <Edit title={<ItemLocationTitle />} {...props}>
        <SimpleForm>
            <TextField source="name" label="name"/>
            <TextField source="datestored" label="Date stored" />
            <TextField source="origprice" label="Base Price"/>
            <ReferenceInput label="Area" source="location.id" reference="location">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="retailprice" label="Retail Price" />
            <TextInput source="onlineprice" label="Online Price" />
        </SimpleForm>
    </Edit>
);  


export const ItemLocationCreate = (props) => (
    <Create title={<ItemLocationCreateTitle />} {...props} >
        <SimpleForm>
            <TextInput source="name" label="Item Name" />
            <ReferenceInput label="Location" source="location.id" reference="location" allowEmpty >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput source ="datestored" label="Date stored"  showCurrentDateByDefault={true} />
            <TextInput source="origprice" label="Original Price" />
            <TextInput source="onlineprice" label="Online Price" />
            <TextInput source="retailprice" label="Retail Price" />
            <TextInput source="origquantity" label="Quantity" />
        </SimpleForm>
    </Create>
);