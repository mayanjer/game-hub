import axios, { AxiosError} from 'axios'

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9dc1b407bb46473a974208bbbee1ea55",
  },
});

export {AxiosError}