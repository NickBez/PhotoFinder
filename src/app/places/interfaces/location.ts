import { LabeledLatLng } from './labeledlatlng';


export interface Location {
    lat:              number;
    lng:              number;
    labeledLatLngs:   LabeledLatLng[];
    postalCode:       string;
    cc:               string;
    city:             string;
    state:            string;
    country:          string;
    formattedAddress: string[];
}