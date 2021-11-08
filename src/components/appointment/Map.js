import { Card } from "@mui/material";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

const Map = () => {
	const MyMapComponent = withScriptjs(
		withGoogleMap((props) => (
			<GoogleMap
				defaultZoom={13}
				defaultCenter={{ lat: 40.68761559966381, lng: -73.97950807843779 }}
			>
				{props.isMarkerShown && (
					<Marker
						position={{ lat: 40.68761559966381, lng: -73.97950807843779 }}
					/>
				)}
			</GoogleMap>
		))
	);
	const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&v=3.exp&libraries=geometry,drawing,places`;

	return (
		<Card>
			<MyMapComponent
				isMarkerShown
				googleMapURL={url}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `450px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</Card>
	);
};
export default Map;
