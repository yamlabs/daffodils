import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, DateInput, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import {DependentInput} from 'aor-dependent-input';
export const ItemList = (props) => (
    <List {...props } title="Item List">
        <Datagrid >
            <TextField source="id" />
            <TextField source="name" label ="Name" />
            <TextField source="description" label ="Description" />
            {/* <TextField source="item.picture" label ="picture" /> */}
            <TextField source="base_price" label="Base price" />
            <EditButton  fullWidth="true" />
        </Datagrid>
    </List>
);

const ItemTitle = ({ record }) => {
    return <span>Item {record ? `"${record.name}` : ''} @ {record ? `${record.name}"` : ''}</span>;
};

export const ItemEdit = (props) => (
    <Edit title={<ItemTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" label="name"/>
            <TextInput source="base_price" label="base_price" />
            <TextInput source="description" label="description" />
        </SimpleForm>
    </Edit>
);

export const ItemCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="name"/>
            <TextInput source="base_price" label="base_price" />
            <TextInput source="description" label="description" />
        </SimpleForm>
    </Create>
);