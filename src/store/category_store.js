import { fn } from "@/utils/apiFunc";
import { create } from "zustand";


const useCategoryStore = create((set) => ({
  category: [],
  setCategory: async () => {
    await fn.category('musical',1);
    await fn.category('play',1);
    await fn.category('pop',1);
    await fn.category('dance',1);
    await fn.category('classic',1);
    await fn.category('gukak',1);
    await fn.category('circus',1);
    await fn.category('etc',1);

    await fn.thisWeek('musical',1);
    await fn.thisWeek('play',1);
    await fn.thisWeek('pop',1);
    await fn.thisWeek('dance',1);
    await fn.thisWeek('classic',1);
    await fn.thisWeek('gukak',1);
    await fn.thisWeek('circus',1);
    await fn.thisWeek('etc',1);

    await fn.ing('musical',1);
    await fn.ing('play',1);
    await fn.ing('pop',1);
    await fn.ing('dance',1);
    await fn.ing('classic',1);
    await fn.ing('gukak',1);
    await fn.ing('circus',1);
    await fn.ing('etc',1);

    await fn.upcoming('musical',1);
    await fn.upcoming('musical',1);
    await fn.upcoming('musical',1);
    await fn.upcoming('musical',1);
    await fn.upcoming('musical',1);
    await fn.upcoming('musical',1);
    await fn.upcoming('musical',1);
    await fn.upcoming('musical',1);

    console.log('얼마나걸릴까용?')
  } 




}));




export default useCategoryStore