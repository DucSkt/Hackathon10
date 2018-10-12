import React, { Component } from 'react';
import { View, FlatList, RefreshControl ,AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import styles from './Styles';
 
import { fetchAPIMaintainHistory } from '../../../actions/maintain/MaintainHistoryAction';

class MaintainHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
 
  componentDidMount(){
    this.refreshDataFromServer();
  }
 
  refreshDataFromServer = async ()=>{
    const json = await this.props.fetchAPIMaintainHistory(this.state.counter , this.state.counter+5 , 'en' , data => {
      this.setState({refresing: false, counter: this.state.counter+5 });
    },  error => {
      AlertIOS.alert('Error', error.message);
      console.log("2");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const mapStateToProps = state => ({
  // data: state.MaintainHistory.data,
  // error: state.MaintainHistory.error,
  // fetching: state.MaintainHistory.fetching
});

export default MaintainHistory = connect(mapStateToProps,{ fetchAPIMaintainHistory })(MaintainHistory);

