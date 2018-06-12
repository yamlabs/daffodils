import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, DateInput, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import {DependentInput} from 'aor-dependent-input';
export const LocationList = (props) => (
    <List {...props } title="Item List">
        <Datagrid >
            <TextField source="id" />
            <TextField source="name" label ="Name" />
            <TextField source="address" label ="Description" />
            <EditButton  fullWidth="true" />
        </Datagrid>
    </List>
);

const LocationTitle = ({ record }) => {
    return <span>Location {record ? `"${record.name}` : ''} @ {record ? `${record.name}"` : ''}</span>;
};

export const LocationEdit = (props) => (
    <Edit title={<LocationTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" label="Name"/>
            <TextInput source="address" label="Address" />
        </SimpleForm>
    </Edit>
);

export const LocationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="name"/>
            <TextInput source="address" label="address" />
        </SimpleForm>
    </Create>
);