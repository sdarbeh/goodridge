import { createStore, combineReducers, compose } from "redux";
import { fontSize, theme, archive, admin, likedProjects } from "./reducers";

const rootReducer = combineReducers({
  fontSize,
  theme,
  archive,
  admin,
  likedProjects
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
