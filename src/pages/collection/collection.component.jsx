import React from 'react';
import { connect } from 'react-redux';

import CollectionItems from '../../component/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
const CollectionPage = ({match}) =>{
    console.log(match.params.collectionId);
    return(
        <div className= 'collection-page'>
            <h1>ok</h1>
        </div>
    );
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);