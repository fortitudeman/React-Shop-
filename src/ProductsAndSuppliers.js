import React, {Component} from 'react';
import { Selector } from './Selector';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';

export default class ProductsAndSuppliers extends Component {
   

    render() {
        return <div>
            <Selector>
                <ProductDisplay
                name="Products"
              
                />
                <SupplierDisplay
                name="Suppliers"
               
                 />
            </Selector>
        </div>
    }
}