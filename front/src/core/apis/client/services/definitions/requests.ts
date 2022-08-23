export interface loginRequest {
    email: string;
    password: string;
  }

export interface registerRequest {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    username: string;
}

export interface forgetPasswordRequest {
    email: string;
}

export interface updatePasswordRequest {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface getFaqsPatentRequest {
}
 
export interface getFaqsCopyRightRequest {
}

export interface getFaqsTrademarkRequest {
}

export interface getFaqsTradeSecretsRequest {
}

export interface positionsRequest {
    latitude: string;
    longitude: string;
    pin: string;
    place: string;
}

export interface nearestRequest {
    latitude : string;
    longitude : string;
}