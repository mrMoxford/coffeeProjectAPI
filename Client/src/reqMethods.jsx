import axios from "axios";

export const BASE_URL = "https://coffee-explorer.herokuapp.com/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mjc5ZTQxMDkxMDE2OTg5ZGNlZDJjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDc1OTEyNSwiZXhwIjoxNjgxMDE4MzI1fQ.OslwCCTflacHNNGB1lzz3oJA8n4tsAYNz-upqc6gx5k";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
