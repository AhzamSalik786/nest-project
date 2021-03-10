// import React, { Component } from "react";
// import { render } from "react-dom";

//  class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(function(position) {
      
//       var  position = position;
//       var latitude = position.coords.latitude;
//       var longitude= position.coords.longitude;
//       console.log("Latitude is :", latitude);
//       console.log("Longitude is :",longitude);
//       console.log(position)
//     },
//     function(error) {
//         console.error("Error Code = "+ error.code + " - "+ error.message);
//     }
//     );
//   }

//   render() {
//     return (
//       <div>
//         <h4>Using geolocation JavaScript API in React</h4>
//       </div>
//     );
//   }
// }

// export default Map;