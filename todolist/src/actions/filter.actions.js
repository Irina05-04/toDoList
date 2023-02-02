import { CHANGE_FILTER } from "../constants"

export const changeFilter = activeFilter => {
   return {
      type: CHANGE_FILTER,
      activeFilter
   }
}