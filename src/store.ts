import { configureStore } from '@reduxjs/toolkit'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dashboard, UserData } from './UserData';

function readUserData() {
  const userDataString = localStorage.getItem('userData')
  if (userDataString) {
    return JSON.parse(userDataString);
  }

  return {
    dashboardNextId: 0,
    dashboards: []
  };
}

const initialState: UserData = readUserData();

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addDashboard: (state, action: PayloadAction<Dashboard>) => {
      // Read user data again in case it has updated.
      const userData = readUserData();
      Object.assign(state, userData);

      // Add the new dashboard.
      action.payload.id = `${state.dashboardNextId}`;
      state.dashboardNextId++;
      state.dashboards.push(action.payload);

      // Save the user data.
      const userDataString = JSON.stringify(state);
      localStorage.setItem('userData', userDataString);
    },
  }
});

export const { addDashboard } = userDataSlice.actions;

export const store = configureStore({
  reducer: {
    userData: userDataSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch