import { CatchAsync } from '../../utils/catchAsync';
import { authServices } from './auth.service';
import { SendResponse } from '../../utils/sendResponse';
import config from '../../config';
import httpStatus from 'http-status-codes';

// ----- register user ----- //
const registerUser = CatchAsync(async (req, res) => {
  const result = await authServices.registerUserService(req.body);

  SendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User created successfully!',
    data: result,
  });
});

// ----- login user ----- //
const loginUser = CatchAsync(async (req, res) => {
  const result = await authServices.loginUserService(req.body);

  const { accessToken, refreshToken } = result;

  // ----- set refresh token to cookies ----- //
  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  SendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: 200,
    data: { token: accessToken },
  });
});

// ----- update user profile ----- //
const updateUserProfile = CatchAsync(async (req, res) => {
  const result = await authServices.updateUserProfileService(
    req.params.userId,
    req.body,
  );

  SendResponse(res, {
    success: true,
    message: 'User updated successfully!',
    statusCode: httpStatus.OK,
    data: { token: result.accessToken },
  });
});

// ----- upadte password ----- //
const updatePassword = CatchAsync(async (req, res) => {
  const updatePassword = await authServices.updatePasswordService(
    req.params.userId,
    req.body,
  );

  SendResponse(res, {
    success: true,
    message: 'Password updated successfully!',
    statusCode: httpStatus.OK,
    data: updatePassword,
  });
});

// ----- get all users ----- //
const getAllUsers = CatchAsync(async (req, res) => {
  const users = await authServices.getAllUsersService();
  SendResponse(res, {
    success: true,
    message: 'All users fetched successfully!',
    statusCode: httpStatus.OK,
    data: users,
  });
});

// ----- refresh token ----- //
const refreshToken = CatchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await authServices.refreshToken(refreshToken);

  SendResponse(res, {
    success: true,
    message: 'Access token is retrieved succesfully!',
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const authController = {
  registerUser,
  loginUser,
  updateUserProfile,
  updatePassword,
  getAllUsers,
  refreshToken,
};
