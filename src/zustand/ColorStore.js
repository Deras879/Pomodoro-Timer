import { create } from "zustand";

const useColorStore = create((set) => ({
  backgroundClass: "red", // Clase por defecto
  setBackgroundClass: (newClass) => set({ backgroundClass: newClass }),
}));

export default useColorStore;
