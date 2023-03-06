export interface Data {
    location_id: string;
name?: string;
latitude?: string;
longitude?: string;
num_reviews?: string;
timezone?: string;
location_string?: string;
photo?: {
    images: {
     small: {
        width: string;
        url: string;
        height: string;
     };
     thumbnail: {
        width: string;
        url: string;
        height: string;
     };
     original: {
        width: string;
        url: string;
        height: string;
     };
     large: {
        width: string;
        url: string;
        height: string;
     };
     medium: {
        width: string;
        url: string;
        height: string;
     }
    };
    is_blessed?: boolean;
uploaded_date?: string;
caption?: string;
id?: string;
helpful_votes?: string;
published_date?: string;
user?: {
    user_id:null;
    member_id: string;
    type: string;
}
};
awards?: [];
doubleclick_zone?: string;
preferred_map_engine?: string;
raw_ranking?: string;
ranking_geo?: string;
ranking_geo_id?: string;
ranking_position?: string;
ranking_denominator?: string;
ranking_category?: string;
ranking?: string;
distance?: string;
distance_string?: string;
bearing?: string;
rating?: string;
is_closed?: boolean;
open_now_text?: string;
is_long_closed?: boolean;
price_level?: string;
price?: string;
description?: string;
web_url?:string;
write_review?:string;
ancestors?: {
    subcategory: undefined;
    name: string;
    abbrv: null;
    location_id: string;
}[];
category?: {
    key: string;
    name: string;
}
subcategory?: {
    key: string;
    name: string
}[];
parent_display_name?: string;
is_jfy_enabled?: boolean;
nearest_metro_station?: [] 
phone?: string;
website?: string;
email?: string;
address_obj?: {
    street1: string;
street2:null
city: string;
state:null
country: string;
postalcode: string;
};
address?: string;
hours?: undefined
is_candidate_for_contact_info_suppression?: boolean
cuisine?: {
    key:string;
    name: string;
}[];
dietary_restrictions?: [];
}