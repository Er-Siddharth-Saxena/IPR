import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface LoginStore {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const useLoginStore = create<LoginStore>()(
  devtools(
    persist((set) => ({
      isLoggedIn: false || localStorage.getItem("isLoggedIn") === "true",
      login: () => {
        set({ isLoggedIn: true });
        localStorage.setItem("isLoggedIn", "true");
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.setItem("isLoggedIn", "false");
      },
    }))
  )
);
