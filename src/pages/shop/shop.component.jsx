import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../component/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore } from '../../firebase/firebase.util';
class ShopPage extends React.Component {
  unsubscribẹFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      console.log(snapshot);
    })
  }
  render()  {
    const { match } = this.props;
    return (
      <div className= 'shop-page'>
        <Route exact path={`${match.path}`} component= {CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component= {CollectionPage} />
      </div>
    )
  }
}
export default ShopPage;