import { fn } from "@/utils/apiFunc";
import { create } from "zustand";


const useMainStore = create((set) => ({
  mainData:[],
  setMainData: async () => {
    let result = await fn.main();
    set({mainData: result});    
  }
}));




export default useMainStore