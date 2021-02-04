import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

import { setArchiveSort, setArchiveDisplay } from "../store/actions/archiveAction";

export default () => {
  const { sort, display } = useSelector((state: RootState) => state.archive);
  const dispatch = useDispatch();

  return {
      sort,
      display,
      //
      setSort: (sort: string) => dispatch(setArchiveSort(sort)),
      setDisplay: () => dispatch(setArchiveDisplay(display)),
  };
};
