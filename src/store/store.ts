import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

interface PayloadType {
  mode: string,
  value: string
}

interface InitialStateType {
  typedInterest: string,
  basePeriod: string,
  toConvertPeriod: string
}

const initialState:InitialStateType = {
  typedInterest: '0',
  basePeriod: 'Yearly',
  toConvertPeriod: 'Yearly'
}

const interestSlice = createSlice({
	name: 'interest',
	initialState: initialState,
	reducers: {
		changePeriod(state:InitialStateType
      , action:PayloadAction<PayloadType>) {
      if(action.payload.mode === 'base')
        state.basePeriod = action.payload.value
      if(action.payload.mode === 'goal')
        state.toConvertPeriod = action.payload.value
    },
    changeInterest(state:InitialStateType, action:PayloadAction<string>){
      state.typedInterest = action.payload
    }
	}
})

const store = configureStore({
	reducer: {
		interest: interestSlice.reducer
	}
})

export const interestActions = interestSlice.actions
export type RootState = ReturnType<typeof store.getState>
export default store