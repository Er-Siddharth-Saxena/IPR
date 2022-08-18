import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

export const Status = {
  LOADING: "LOADING",
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS"
};

type WrapperProps = { children?: any, callback?: any, render: any, options?: any, apiKey: any };
type WrapperState = { status: string }

class Wrapper extends React.Component<WrapperProps, WrapperState> {
  state = {
    status: Status.LOADING
  };

  setStatusAndExecuteCallback = (newStatus:any, loader:any) => {
    const { callback } = this.props;
    if (callback) {
      callback(newStatus, loader);
    }
    this.setState({ status: newStatus });
  };

  componentDidMount() {
    const { callback, ...options } = this.props;

    const loader = new Loader(options);

    this.setStatusAndExecuteCallback(Status.LOADING, loader);

    loader.load().then(() => {
      this.setStatusAndExecuteCallback(Status.SUCCESS, loader);
    });
  }

  render() {
    const { status } = this.state;
    const { children, render } = this.props;

    if (status === Status.SUCCESS && children) {
      return children;
    }

    if (render) {
      return render(status);
    }

    return null;
  }
}

export default Wrapper;
