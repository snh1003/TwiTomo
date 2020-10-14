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
  data?: Feed[];
}

interface Action {
  type: "fetching" | "successFetch" | "errorFetch" | "";
  data?: Feed[];
  error?: string;
}

const feedReducer = (state: FeedState, action: Action) => {
  switch (action.type) {
    case "fetching":
      return { fetch: true, data: null, error: null };
    case "successFetch":
      return { fetch: false, data: action.data, error: null };
    case "errorFetch":
      return { fetch: false, data: null, error: action.error };
    default:
      throw new Error(`Unhandle: ${action.type}`);
  }
};

const feedContext = createContext<Feed | null>(null);

export const ContextProvider: React.FC = (children: React.ReactNode) => {
  const [feed, dispatch] = useReducer(feedReducer, {
    type: "",
    fetch: false,
    data: null,
    error: null,
  });
  return <feedContext.Provider value={feed}> {children}</feedContext.Provider>;
};
