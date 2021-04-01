import React from 'react';

import CollectionOverview from '../../component/collections-overview/collection-overview.component';

const ShopPage = ({ collections }) => (
  <div className= 'shop-page'>
    <CollectionOverview />
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});
export default ShopPage;