import axios from "axios";

export default axios.create({
  baseURL: `https://rmcts-api.herokuapp.com/`
});
