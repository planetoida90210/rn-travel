import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, {
      params: {
        bl_latitude: "11.847676",
        tr_latitude: "12.838442",
        bl_longitude: "109.095887",
        tr_longitude: "109.149359",
        restaurant_tagcategory_standalone: "10591",
        restaurant_tagcategory: "10591",
        limit: "30",
        currency: "USD",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "d1890efbcamsh42d9e1c2281b782p1e7207jsnf6f8552075f4",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    return error;
  }
};
