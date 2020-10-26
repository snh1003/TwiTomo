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

export interface Profile {
  id: string;
  username: string;
}

interface State {
  fetch: boolean;
  data?: Profile;
  error?: string;
}

interface Action {
  type:
    | "fetching"
    | "successFetch"
    | "errorFetch"
    | ""
    | "GET_PROFILE"
    | "GET_PROFILE_SUCCESS"
    | "GET_PROFILE_ERROR";
  data?: Profile;
  error?: string;
}

export interface Dispatcher extends React.Dispatch<Action> {}

// const feedReducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "fetching":
//       return { ...state, fetch: true };
//     case "successFetch":
//       return { ...state, data: action.data };
//     case "errorFetch":
//       return { ...state, error: action.error };
//     default:
//       throw new Error(`error: ${action.type}`);
//   }
// };

const profileReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GET_PROFILE":
      return { ...state, fetch: true };
    case "GET_PROFILE_SUCCESS":
      return { ...state, data: action.data };
    case "GET_PROFILE_ERROR":
      return { ...state, error: action.error };
    default:
      throw new Error(`error ${action.type}`);
  }
};

const profileContext = createContext<State | null>(null);
const DispatchContext = createContext<Dispatcher | null>(null);

export const ProfileContext = ({ children }: { children: React.ReactNode }) => {
  const initialArg = {
    fetch: true,
    data: { id: "kiki", username: "hohoa" },
    error: "",
  };
  const [profile, dispatch] = useReducer(profileReducer, initialArg);
  return (
    <profileContext.Provider value={profile}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </profileContext.Provider>
  );
};

export const useProfileState = () => {
  const profileState = React.useContext(profileContext);
  if (!profileState) throw new Error("ProfileContext를 찾을수 없음");
  return profileState;
};
export const useDispatch = () => {
  const dispatch = React.useContext(DispatchContext);
  if (!dispatch) throw new Error("dispatchContext 를 찾을수 없음"); // 유효하지 않을땐 에러를 발생
  return dispatch;
};
