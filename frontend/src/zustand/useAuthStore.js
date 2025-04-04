import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  onlineUsers :[],
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
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  signin: async (data) => {
    set({ isSignningIn: true });
    try {
      const res = await axiosInstance.post("/auth/signin", data);
      set({ authUser: res.data });
      toast.success("Signed in successfully!!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSignningIn: false });
    }
  },

  userSignout: async () => {
    try {
      await axiosInstance.post("/auth/signout");
      set({ authUser: null });
      toast.success("Signed out Successfully!!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
