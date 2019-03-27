import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import ajax from './BakeSale/ajax'
import DealList from './BakeSale/DealList'
import DealDetail from './BakeSale/DealItem'
import SearchBar from './BakeSale/SearchBar'
export default class extends React.Component {
  
  state = {
    deals : [],
    currentDealID:null
  }
  
  async componentDidMount(){
    const deals =await ajax.fetchInitialDeals();
    this.setState({deals});
  }
  setCurrentDeal=(dealId)=>{
    this.setState({
      currentDealID:dealId
    })
  }
  currentDeal=()=>{
return this.state.deals.find(
  (deal)=>deal.key===this.state.currentDealID
);
  }
   render (){
     if(this.state.currentDealID)
     {return (<DealDetail deal={this.currentDeal()}/>);}
     if(this.state.deals.length > 0)
     {return (
       <View>
          <SearchBar/>
         <DealList deals={this.state.deals}  onItemPress={this.setCurrentDeal}/>
       </View>
     );  }
    return(
       <View style={styles.container}>
         <Text style={styles.header}>BakeSale</Text>
       </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent :'center',
    alignItems:'center',
},
  header : {
    fontSize:40
  }
})