import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import {PriceDisplay} from './util'
import ajax from './ajax'
export default class DealDetail extends Component {
  static propTypes = {
  deal :PropTypes.object.isRequired, 
}
async componentDidMount(){
 const fullDeal=await ajax.fetchDealDetail(this.state.deal.key)
 this.setState({
   deal:fullDeal
 })
}
  render() {
    const {deal}=this.state;

    return (
     <View style ={styles.deal}>
         <Image source ={{uri:this.props.deal.media[0]}}
         style={styles.image}
         />
         <View style={styles.info}>
             <Text style={styles.title}>{this.props.deal.title}</Text>
               <View style={styles.footer}>
               <Text style={styles.cause}>{PriceDisplay(this.props.deal.price)}</Text>
              <Text style={styles.price}>{this.props.deal.cause.name}</Text>
              </View>
         </View>
         {deal.user && (
         <View>
          <Image source = {{uri :deal.user.avatar}}style={styles.avatar}></Image>
          <Text>{deal.user.name}</Text>
         </View>
         )}
         <View>
           <Text>{deal.description}</Text>
         </View>
     </View>      
    )
  }
}
const styles=StyleSheet.create({
  deal:{
        marginHorizontal:12,
        marginTop:12
  },
  image : {
        width:'100%',
        height:150,
        },
    info :{
        padding :10,
        backgroundColor:'#fff',
        borderColor: '#bbb',
        borderTopWidth: 0,
    },
    title:{
      fontSize:16,
      fontWeight:'bold',
      marginBottom : 5,
    },
    footer:{
      flexDirection:'row'
    },
    cause:{
      flex:2
    },
    price:{
      flex:1,
      textAlign:'right'
    },
    avatar:{
      height:60,
      width:60
    }
});