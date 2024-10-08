import { useEffect } from "react";
import { create } from "zustand";


const useSearchStore = create((set) => ({
  searchWord: '',
  setSearchWord: (word) => set({searchWord: word}),
  results: [],
  setResults: (newResults) => set((state) => {
    const update = [
      ...state.results, 
      ...newResults.map(result => ({value:result, timestamp: Date.now()}))
    ];
    const limited = update.slice(-10);
    const sortResults = limited.sort((a, b) => b.timestamp - a.timestamp);
    document.cookie = `results=${JSON.stringify(sortResults)}; path=/;`;
    return { results: sortResults };
  }),

  readCookie : () => set(() => {
    // if (typeof document !== 'undefined') {
      const cookievalue = document.cookie.split('; ').find(row => row.startsWith('results='));
    // }
    return {results: JSON.parse(cookievalue.split('=')[1]) };
  })
}));




export default useSearchStore