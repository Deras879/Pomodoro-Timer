import { create } from "zustand";

const useTimerStore = create((set) => ({
  pomoTime: 1500, // 25 minutos en segundos
  pomoTimeCopy: 1500, // 25 minutos en segundos
  breakTime: 300,
  breakTimeCopy: 300,
  longBreakTime: 900,
  longBreakTimeCopy: 900,
  isRunning: false,
  activeTimer: "pomoTime",
  setPomoTime: (newTime) =>
    set({ pomoTime: newTime * 60, pomoTimeCopy: newTime * 60 }),
  setBreakTime: (newTime) =>
    set({ breakTime: newTime * 60, breakTimeCopy: newTime * 60 }),
  setLongBreakTime: (newTime) =>
    set({ longBreakTime: newTime * 60, longBreakTimeCopy: newTime * 60 }),
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
