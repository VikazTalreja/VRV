import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRole } from "../api/fetchUserRole.js";
import { roles } from "../utils/Constants.utils.js";
import {
  switchRoleFailure,
  switchRoleStart,
  switchRoleSuccess,
} from "../redux/slices/roleSlice.js";

const ChangeRole = () => {
  const dispatch = useDispatch();
  const { role: currentRole, isLoading } = useSelector((state) => state.role);

  const handleRoleSwitch = useCallback(
    async (role) => {
      if (role === currentRole || isLoading) return;
      try {
        dispatch(switchRoleStart());
        const response = await fetchUserRole(role);
        dispatch(switchRoleSuccess(response.role));
        console.log(`${role} Role Changed to`);
      } catch (err) {
        dispatch(switchRoleFailure("Error in switching role."));
      }
    },
    [dispatch, currentRole, isLoading]
  );

  return (
    <div className="h-full w-full bg-indigo-100 flex flex-col items-center justify-center py-10 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Change Your Role</h1>
      <div className="flex flex-col justify-center items-center space-y-6">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => handleRoleSwitch(role)}
            disabled={isLoading}
            className={`p-4 w-40 h-40 rounded-lg shadow-md text-lg font-semibold text-white transition-transform transform duration-300
              ${
                role === currentRole
                  ? "bg-blue-500 scale-110 ring-4 ring-blue-300"
                  : isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
          >
            {role}
          </button>
        ))}
      </div>
      {isLoading && (
        <p className="text-lg font-medium text-blue-600 mt-4">
          Switching roles, please wait...
        </p>
      )}
      <p className="text-sm text-gray-600">
        Current Role: <span className="font-medium text-gray-800">{currentRole}</span>
      </p>
    </div>
  );
};

export default ChangeRole;
