import { Location } from './location';
import { Category } from './category';


export interface Place {
    id:         string;
    name:       string;
    location:   Location;
    categories: Category[];
    referralId: string;
    hasPerk:    boolean;
}