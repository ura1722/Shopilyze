import { List, Datagrid, TextField, NumberField, ImageField } from 'react-admin';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { Create } from 'react-admin';
import './styles/styles.css';

export const ProductList = (props) => (
    <List {...props}className="product-list">
        
        <Datagrid>
            <TextField source="id" label="Product Id" />
            <TextField source="productCode" label="Product Code" />
            <ImageField source="pictureUrl" label="Product Image" />
            <TextField source="title" label="Product Name" />
            <TextField source="categoryName" label="Category" />
            <NumberField source="price" label="Price" />
            
            <NumberField source="commentsCount" label="Comments" />
        </Datagrid>
        
    </List>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" label="Назва" />
            <NumberInput source="price" label="Ціна" />
            <TextInput source="category" label="Категорія" />
            <TextInput source="description" label="Опис" multiline />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" label="Назва" />
            <NumberInput source="price" label="Ціна" />
            <TextInput source="category" label="Категорія" />
            <TextInput source="description" label="Опис" multiline />
        </SimpleForm>
    </Create>
);
