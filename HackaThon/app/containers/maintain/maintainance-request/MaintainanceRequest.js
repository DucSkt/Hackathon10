import React, { Component } from 'react'
import { View, FlatList, RefreshControl ,AlertIOS } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles'
 
import {fetchAPIMaintainRequest,removeItemMaintain,postItemMaintain} from '../../../actions/maintain/MaintainRequestAction';


class MaintainRequest extends Component {
 
  
  

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    )
  }
}

const mapStateToProps = state => ({
  // data: state.MaintainRequest.data,
  // error: state.MaintainRequest.error,
  // fetching: state.MaintainRequest.fetching
});

export default MaintainRequest = connect(mapStateToProps, {fetchAPIMaintainRequest,removeItemMaintain,postItemMaintain})(MaintainRequest)
