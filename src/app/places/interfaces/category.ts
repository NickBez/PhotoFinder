import { Icon } from './icon';


export interface Category {
    id:         string;
    name:       string;
    pluralName: string;
    shortName:  string;
    icon:       Icon;
    primary:    boolean;
}