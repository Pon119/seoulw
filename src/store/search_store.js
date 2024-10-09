import { useEffect } from "react";
import { create } from "zustand";


const useSearchStore = create((set) => ({
  searchWord: '',
  setSearchWord: (word) => set({searchWord: word}),
  results: [],
  setResults: (newResults) => set((state) => {
    const exist = state.results.map(result => result.value);
    const rere = newResults.reduce((acc, result) => {
      if (!exist.includes(result)) {
        acc.push({ value: result, timestamp: Date.now() });
      } else {
        const existIndex = acc.findIndex(r => r.value === result);
        if (existIndex !== -1) {
          acc[existIndex].timestamp = Date.now();
        }
      }
      return acc;
    }, [...state.results]);

    if (rere.length > 10) {
      rere.shift();
    }
    const sortResults = rere.sort((a, b) => a.timestamp - b.timestamp);
    document.cookie = `results=${JSON.stringify(sortResults)}; path=/;`;
    return { results: sortResults };
  }),

  readCookie : () => set(() => {
    // if (typeof document !== 'undefined') {
      const cookievalue = document.cookie.split('; ').find(row => row.startsWith('results='));
    // }
    if (cookievalue) {
      return {results: JSON.parse(cookievalue.split('=')[1]) || [] };
    } else {
      return { results: [] };
    }
  }),

  deleteC: (value) => {
    const cookievalue = document.cookie.split(';').find(row => row.startsWith('results='))
    let results = [];

    if (cookievalue) {
      results = JSON.parse(cookievalue.split('=')[1]) || [];
    }
    const updatedR = results.filter(result => result.value !== value);
    document.cookie = `results=${JSON.stringify(updatedR)}; path=/;`
    set({ results: updatedR});
  }
}));




export default useSearchStore