import React, { createContext, useReducer } from "react";

export interface Feed {
  title: string;
  name: string;
  tag: string[];
  location: string;
  day: string;
  money: number;
  people: number;
  content: string;
  photo: Blob | null;
}
//
// interface Action {
// {type: }
// }
//
//
// const feedReducer = (state: Feed, action) => {
//     switch (action.type) {
//         case 'fetchData':
//             return { ...state, data };
//         default:
//             throw new Error(`Unhandled action type: ${action.type}`);
//     }
// }

// const feedContext = createContext<Feed | null>(null);

export const ContextProvider: React.FC = (children: React.ReactNode) => {
  // const [feed, dispatch] = useReducer(feedReducer, initialTodos);
  return (
    // <feedContext.Provider value = {feed}></feedContext.Provider>
    <div>dsf</div>
  );
};
