/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { setToken } from "../../redux/authSlice"; // Import your auth action
// import "../../styles.css"; // Import the CSS file
import { useUpdateUserPasswordMutation } from "../../redux/features/users/userManagementApi";
import { setUser } from "../../redux/features/auth/authSlice";

const ChangePasswordForm: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const dispatch = useDispatch();
  const [updateUserPassword, { isLoading }] = useUpdateUserPasswordMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match!");
      return;
    }
  
    try {
      const response = await updateUserPassword({
        data: { currentPassword, newPassword },
      }).unwrap();
  
      // ✅ Update Redux and localStorage with new token
      if (response.token) {
        dispatch(setUser({ user: response.user, token: response.token }));
        localStorage.setItem("authToken", response.token);
      }
  
      setSuccessMessage(response.message);
      setError("");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      setError(error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>

      {error && <p className="message error">{error}</p>}
      {successMessage && <p className="message success">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Updating..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
