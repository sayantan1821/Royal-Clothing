import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';

import './collection-overview.style.scss';

const CollectionOverview = ({collection}) => (
    <div className= 'collection-overview'>
    {
        collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key= {id} {...otherCollectionProps} />
      ))
    }
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  });

export default connect(mapStateToProps)(CollectionOverview);