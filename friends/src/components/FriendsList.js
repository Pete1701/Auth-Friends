import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { axios } from 'axios'

class FriendsList extends React.Component {
    state = {
      friendsList: []
    };
  
    componentDidMount() {
      this.getData();
    }

    getData = () => {    
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
            console.log('res', res.data);
            this.setState({
              friendsList: res.data
                // .filter(price => price.type === 'Gasoline - Regular')
                // .filter(
                //   price =>
                //     price.location === 'US' || price.location === 'State of Hawaii'
                // )
            });
          });
      };

      // formatData = () => {
      //   const formattedData = [];
      //   console.log('state', this.state.friendsList);
      //   this.state.friendsList.forEach((price, index, arr) => {
      //     if (price.location === 'US') {
      //       formattedData.push({              
      //         USPrice: price.price,
      //         HawaiiPrice: arr[index + 1].price
      //       });
      //     }
      //   });
      //   return formattedData;
      // };



      render() {
        // const friendsList = this.formatData();
        console.log('render', this.state.friendsList);
        return (
          <div>
            {this.state.friendsList}            
          </div>
          // <div className="gas-prices">
          //   <div className="title-wrapper">
          //     <div className="title">
          //       <div className="inner-wrapper">
          //         <div className="top-title">Gas Comparison</div>
          //         <div className="bottom-title">Continental US vs Hawaii</div>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="key">
          //     <div className="US-key" />
          //     <p className="US-key-text">Continental US Prices</p>
          //     <div className="Hawaii-key" />
          //     <p className="Hawaii-key-text">Hawaii Prices</p>
          //   </div>
          //   {this.props.fetchingData && (
          //     <div className="key spinner">
          //       {/* <Loader type="Puff" color="#204963" height="60" width="60" /> */}
          //       <p>Loading Data</p>
          //     </div>
          //   )}
          //   {friensList.length > 0 && (
          //     <div className="gas-wrapper">
          //       <div className="columns">
          //         <div className="months">
          //           <div className="year">2006</div>
          //           <div className="year">2007</div>
          //           <div className="year">2008</div>
          //           <div className="year">2009</div>
          //           <div className="year">2010</div>
          //           <div className="year">2011</div>
          //           <div className="year">2012</div>
          //         </div>
          //         <div>
          //           {friensList.map(price => (
          //             <div className="price-graph">
          //               <div className="date">
          //                 <p>{price.date}</p>
          //               </div>
          //               <div className="hawaii-graph">
          //                 <div
          //                   className="hawaii-line"
          //                   style={{
          //                     width: `${(Number(price.HawaiiPrice) / 5) * 100}%`
          //                   }}
          //                 />
          //                 <p>${price.HawaiiPrice}</p>
          //               </div>
          //               <div className="us-graph">
          //                 <div
          //                   className="us-line"
          //                   style={{
          //                     width: `${(Number(price.USPrice) / 5) * 100}%`
          //                   }}
          //                 >
          //                   <p>${price.USPrice}</p>
          //                 </div>
          //               </div>
          //             </div>
          //           ))}
          //         </div>
          //       </div>
          //     </div>
          //   )}
          // </div>
        );
      }
    }

export default FriendsList;