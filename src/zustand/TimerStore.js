import { create } from "zustand";

const useTimerStore = create((set) => ({
  pomoTime: 1500, // 25 minutos en segundos
  breakTime: 300,
  longBreakTime: 900,
  isRunning: false,
  activeTimer: "pomoTime",
  setPomoTime: (newTime) => set({ pomoTime: newTime }),
  setBreakTime: (newTime) => set({ breakTime: newTime }),
  setLongBreakTime: (newTime) => set({ longBreakTime: newTime }),
  setIsRunning: (running) => set({ isRunning: running }),
  setActiveTimer: (timer) => set({ activeTimer: timer }),

  decrementTime: () =>
    set((state) => {
      if (!state.isRunning) return {}; // Si no está corriendo, no hace nada

      const updatedTimers = { ...state };

      if (state.activeTimer === "pomoTime" && state.pomoTime > 0) {
        updatedTimers.pomoTime -= 1;
      } else if (state.activeTimer === "breakTime" && state.breakTime > 0) {
        updatedTimers.breakTime -= 1;
      } else if (
        state.activeTimer === "longBreakTime" &&
        state.longBreakTime > 0
      ) {
        updatedTimers.longBreakTime -= 1;
      } else {
        updatedTimers.isRunning = false; // Si llega a 0, detener el timer
      }

      return updatedTimers;
    }),
}));

export default useTimerStore;
