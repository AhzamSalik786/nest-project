import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { connect, useDispatch, useSelector } from 'react-redux'

const mapStyles = {
  width: '100%',
  height: '100%',
}

class MapScreen extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React',
    }
  }

  // bag = useSelector((state) => state.bag)
  // { shippingLocation } = bag
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.shippingLocation.latitude? this.props.shippingLocation.latitude : 24.8607,
            lng: this.props.shippingLocation.longitude ? this.props.shippingLocation.longitude :67.0011,
          }}
          center={{
            lat: this.props.shippingLocation.latitude,
            lng: this.props.shippingLocation.longitude,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Xord'}
            position={{
              lat: this.props.shippingLocation.latitude,
              lng: this.props.shippingLocation.longitude,
            }}
          />
        </Map>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  console.log('state', state.bag.shippingLocation)
  return {
    shippingLocation: state.bag.shippingLocation
      ? state.bag.shippingLocation
      : '',
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    // dispatchName: (data) => dispatch(reducer(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyDIh8kBv6YPNLX2mqojWNLcGXb2sD67480',
  })(MapScreen)
)
// export default connect(mapStateToProps, mapDispatchToProps)(Getusers);
