const apiHost = 'https://bakesaleforgood.com/api/deals'
export default {

  async  fetchInitialDeals(){
        try {
            let response =await  fetch(apiHost);
            let responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
          }
    },


async  fetchDealDetail(dealId){
  try {
      let response =await  fetch('https://bakesaleforgood.com/api/deals'+dealId);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
},

};