import { Client, baseClient } from "../client";
import { ServiceUrls } from "./constants";
import {
  loginRequest,
  registerRequest,
  positionsRequest,
  nearestRequest,
} from "./definitions/requests";

// import {
//   loginResponse,
//   registerResponse,
//   positionsResponse,
//   nearestResponse,
// } from "./definitions/responses";

export default class Service {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  async login(request: loginRequest) {
    const response: any = await this.client.post({
      path: ServiceUrls.login,
      payload: request,
    });

    return response as any;
  }

  logout() {
    localStorage.clear();
    //location.href = "/login";
  }

  async register(request: registerRequest) {
    const response: any = await this.client.post({
      path: ServiceUrls.register,
      payload: request,
    });

    return response as any;
  }

  async positions(request: positionsRequest) {
    const response: any = await this.client.post({
      path: ServiceUrls.positions,
      payload: request,
    });

    return response as any;
  }

  async nearest(request: nearestRequest) {
    const response: any = await this.client.post({
      path: ServiceUrls.nearest,
      payload: request,
    });

    return response as any as any;
  }
}

export const service = new Service(baseClient);
