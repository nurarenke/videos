//Create an axios instance
import axios from "axios";

const KEY = "AIzaSyBcdMxp6UkKC2yA79ID6wFYIe1Z4sByNzs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
