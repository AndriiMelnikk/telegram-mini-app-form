import { useContext, useReducer, createContext } from 'react';

import Thunk from './reducer';

import { DoGetServices, initState } from './type';
import { StatusReq } from '@/types';

const DataStateContext = createContext<initState | null>(null);
const DataDispatchContext = createContext<any>(null);

const reducer = (currentState: initState, newState: initState) => ({
  ...currentState,
  ...newState,
});

const useDataState = () => {
  const context = useContext(DataStateContext);
  if (!context) throw new Error('useDataState must be used in DataProvider');

  return context;
};

const useDataDispatch = () => {
  const context = useContext(DataDispatchContext);
  if (!context) throw new Error('useDataDispatch must be used in DataProvider');

  return context;
};

const initialState: initState = {
  status: StatusReq.idle,
  services: [],
  error: null,
};

const DataProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>{props.children}</DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
};

const doGetServices: DoGetServices = async (dispatch) => {
  Thunk.doGetServices(dispatch);
};

export { DataProvider, useDataState, useDataDispatch, doGetServices };
