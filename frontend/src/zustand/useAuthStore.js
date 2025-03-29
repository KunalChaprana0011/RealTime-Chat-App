import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isSignningIn: false,
  isUpdatingProfile: false,

  isCheckingAuthentication: true,

  checkingAuthentication: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkingAuthentication : ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuthentication: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account Created Successfully!!");
    } catch (error) {
      toast.error("Something went Wrong : ", error.response.data.message);
    }
    finally{
      set({isSigningUp : false})
    }
  },

  userSignout : async() => {
    try {
       await axiosInstance.post("/auth/signout");
      set({ authUser: null});
      toast.success("Signed out Successfully!!");
      
    } catch (error) {
      toast.error("Something went Wrong : ", error.response.data.message);
    }
  }
}));
