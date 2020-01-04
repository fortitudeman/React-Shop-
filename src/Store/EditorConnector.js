import {connect} from 'react-redux';
import {endEditing} from './stateAction';
import { saveProduct, saveSupplier } from './modelActionCreator';
import { PRODUCTS, SUPPLIERS } from './dataTypes';

export const EditorConnector = (dataType, presentationComponent)=>{

    const mapStateToProps = (storeData) => ({
        editing: storeData.stateData.editing
            && storeData.stateData.selectedType===dataType,
        product: (storeData.modelData[PRODUCTS]
            .find(p=>p.id===storeData.stateData.selectedId))||{},
        supplier:(storeData.modelData[SUPPLIERS].
            find(s=>s.id===storeData.stateData.selectedId))||{}
    })

    const mapDispatchToProps = dispatch => ({
        cancelCallback: () => dispatch(endEditing()),
        saveCallback: (data) => {
        dispatch((dataType === PRODUCTS ? saveProduct: saveSupplier)(data));
        dispatch(endEditing());
        }
     });

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}