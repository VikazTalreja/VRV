import {
  switchRoleStart,
  switchRoleSuccess,
  switchRoleFailure,
} from "../slices/roleSlice.js";
import { fetchUserRole } from "../../api/fetchRole.api";

export const switchUserRole = (role) => async (dispatch) => {
  dispatch(switchRoleStart());
  try {
    const response = await fetchUserRole(role);
    dispatch(switchRoleSuccess(response.role));
  } catch (error) {
    dispatch(switchRoleFailure("Failed to switch role."));
  }
};
