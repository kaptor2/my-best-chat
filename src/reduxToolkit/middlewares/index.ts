import { AnyAction, Dispatch, Middleware } from "redux";
import { checkConnect } from 'api/checkConnect';
import { SET } from 'reduxToolkit/slices/sliceAuthAndReg';

export const checkConnected: Middleware<{}, any, Dispatch<AnyAction>> = store => next => async action => {
  try {
    await checkConnect();
    return next(action);
  } catch (error) {
    return next(SET({
      status: error.response.status,
      message: error.response.data.message
    }))
  }
};