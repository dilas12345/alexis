
"use strict"

import { actionHandlers } from "./HomeHandlers"

const initialState = {}
export function homeReducer(state = initialState, action) {
  const handle = actionHandlers[action.type]
  return handle ? handle(state, action) : state
}
