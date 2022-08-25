import { toast } from "react-toastify";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface LoginStore {
  user : any;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  setUser: (user: any) => void;
}

export const useLoginStore = create<LoginStore>()(
  devtools(
    persist((set) => ({
      user: localStorage.getItem("user") ? localStorage.getItem("user") : {
        username : "",
        email : "",
        firstName: "",
        lastName : "",
      },
      isLoggedIn: false || localStorage.getItem("isLoggedIn") === "true",
      login: () => {
        set({ isLoggedIn: true });
        localStorage.setItem("isLoggedIn", "true");
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("user");
      },
      setUser: (user) => {
        set({ user });
        localStorage.setItem("user", JSON.stringify(user));
      }
    }))
  )
);

interface NotificationStore {
  pushNotificationSuccess: (notification: string) => void;
  pushNotificationFailure: (notification: string) => void;
  pushNotificationinfo: (notification: string) => void;
}

export const useNotificationStore = create<NotificationStore>()(
  devtools(
    persist(() => ({
      pushNotificationSuccess: (notification: string) => {
        toast.success(notification);
      },
      pushNotificationFailure: (notification: string) => {
        toast.warn(notification);
      },
      pushNotificationinfo: (notification: string) => {
        toast.info(notification);
      },
    }))
  )
);
