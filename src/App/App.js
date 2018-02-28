import React, { PureComponent } from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Container from './Container';
import MapWrap from './MapWrap';

const style = ({ width: "100%", height: "100%" });
const accessToken = 'pk.eyJ1IjoibmF2aWdhdGlvbm1hcCIsImEiOiJjajdpeXV5bmsxd3o1MndvMmI3YW9uN2MzIn0.j1jNy4T7WkerOCWEfL7iIA'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        latitude: 37.785,
        longitude: -122.415,
        zoom: 17
      }
    }
  }
  render() {
    return (
      <Container>
        <MapWrap>
          <MapGL
            style={style}
            mapStyle="mapbox://styles/navigationmap/cje40kclse2h02sscw4jzx954"
            accessToken={accessToken}
            onViewportChange={viewport => this.setState({ viewport })}
            {...this.state.viewport}
          />
        </MapWrap>
        <MapWrap>
          <MapGL
            style={style}
            mapStyle="mapbox://styles/navigationmap/cje753egfgz252rmtej315czj"
            accessToken={accessToken}
            onViewportChange={viewport => this.setState({ viewport })}
            {...this.state.viewport}
          />
        </MapWrap>
        <MapWrap>
          <MapGL
            style={style}
            mapStyle="mapbox://styles/navigationmap/cje75gvtegzhe2sr3367pwe33"
            accessToken={accessToken}
            onViewportChange={viewport => this.setState({ viewport })}
            {...this.state.viewport}
          />
        </MapWrap>
        <MapWrap>
          <MapGL
            style={style}
            mapStyle="mapbox://styles/navigationmap/cje71ry92gw1y2sr3d81amy4m"
            accessToken={accessToken}
            onViewportChange={viewport => this.setState({ viewport })}
            {...this.state.viewport}
          />
        </MapWrap>
      </Container>
    );
  }
}

export default App;
