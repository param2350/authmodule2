export const loginApi = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 3000);
  });
};

export const otpVerificationApi = (otp) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp == "123456") {
        resolve({ success: true });
      } else {
        reject(new Error("Invalid OTP"));
      }
    }, 1000);
  });
};

export const signupApi = (name, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true, user: { name, email } });
    }, 3000);
  });
};
