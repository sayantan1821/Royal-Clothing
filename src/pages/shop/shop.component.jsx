import React from 'react';
import { connect } from 'react-redux';
import { createStructeredSelector } from 'reselect';  
import CollectionPreview from '../../component/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) => (
  <div className= 'shop-page'>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key= {id} {...otherCollectionProps} />
      ))
    }
  </div>
);
const mapStateToProps = createStructeredSelector({
  collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);