import React, { createContext, useReducer } from "react";

export interface Feed {
  title: string;
  name: string;
  tag: string[];
  location: string;
  day: string;
  money: string;
  people: string;
  content: string;
  photo: Blob | null;
}

interface FeedState {
  fetch: boolean;
  data: Feed[] | null;
  error: string | null;
}

interface Action {
  type: "fetching" | "successFetch" | "errorFetch" | "";
  data: Feed[];
  error: string | null;
}

const feedReducer = (state: FeedState, action: Action): FeedState => {
  switch (action.type) {
    case "fetching":
      return { ...state, fetch: true };
    case "successFetch":
      return { ...state, data: action.data };
    case "errorFetch":
      return { ...state, error: action.error };
    default:
      throw new Error(`Unhandle: ${action.type}`);
  }
};

const feedContext = createContext<FeedState | null>(null);

export const ContextProvider: React.FC = (children: React.ReactNode) => {
  const [feed, dispatch] = useReducer(feedReducer, {
    fetch: true,
    data: null,
    error: "d",
  });
  return <feedContext.Provider value={feed}> {children}</feedContext.Provider>;
};
