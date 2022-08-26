import axios, { AxiosInstance } from "axios";
import { RequestType } from "./definitions/request.definitions";



export class Client {
  client: AxiosInstance;
  // pushNotificationSuccess: (notification : string) => void;
  // pushNotificationFailure: (notification : string) => void;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.client.interceptors.response.use(
      this.interceptSuccess,
      this.interceptFailure
    );

    this.client.interceptors.request.use(this.interceptRequest);

    
  }

  protected interceptSuccess(response: any) {
    return Promise.resolve(response.data);
  }

  protected interceptFailure(error: any) {
    return Promise.reject(error.response.data);
  }

  protected interceptRequest(request: any) {
    // startLoading();
    return request;
  }

  async get(request: RequestType) {
    const clientRequest = {
      method: "GET",
      url: request.path,
      data: request.payload,
      // conditionally add header parameters
      ...(request.headers && {
        headers: request.headers,
      }),
      // conditionally add query parameters
      ...(request.queryParamas && {
        params: request.queryParamas,
      }),
      // conditionally overides default baseUrl
      ...(request.baseUrl && {
        baseURL: request.baseUrl,
      }),
    };
    console.log(clientRequest);
    const response = await this.client.request(clientRequest);
    return response;
  }

  async post(request: RequestType) {
    const response = await this.client.request({
      method: "POST",
      url: request.path,
      data: request.payload,
      // conditionally add header parameters
      ...(request.headers && {
        headers: request.headers,
      }),
      // conditionally overides default baseUrl
      ...(request.baseUrl && {
        baseURL: request.baseUrl,
      }),
    });
    return response;
  }
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
    // TODO: Replace with Authentication Code
    // Authorization: "<AUTH-CODE>",
  },
});

export const baseClient = new Client(axiosInstance);
