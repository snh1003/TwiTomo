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

interface Dispathcer extends React.Dispatch<Action> {}

const feedReducer = (state: FeedState, action: Action): FeedState => {
  switch (action.type) {
    case "fetching":
      return { ...state, fetch: true };
    case "successFetch":
      return { ...state, data: action.data };
    case "errorFetch":
      return { ...state, error: action.error };
    default:
      throw new Error(`error: ${action.type}`);
  }
};

const feedContext = createContext<FeedState | null>(null);
const DispatchContext = createContext<Dispathcer | null>(null);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [feed, dispatch] = useReducer(feedReducer, {
    fetch: true,
    data: null,
    error: "d",
  });
  return (
    <feedContext.Provider value={feed}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </feedContext.Provider>
  );
};

export const useFeedState = () => {
  const feedState = React.useContext(feedContext);
  if (!feedState) throw new Error("FeedContext를 찾을수 없음");
  return feedState;
};

export const useFeedDispatch = () => {
  const dispatch = React.useContext(DispatchContext);
  if (!dispatch) throw new Error("dispatchContext 를 찾을수 없음"); // 유효하지 않을땐 에러를 발생
  return dispatch;
};
