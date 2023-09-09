"use client";

import { Button } from "@mui/material";
import React from "react";
import { API, LOGIN_API } from "stx/utils/API";

type Props = {};

const page = (props: Props) => {
  const handleVerifyOtp = async () => {
    try {
      const res = await API.post(
        "/auth/twofa/verify",
        {
          platform: "web",
          data: {
            action: "login",
            client_id: "ORAVI123",
            otp: "112113",
            token: sessionStorage.getItem("token"),
          },
        },
        {
          headers: {
            "X-Client-Id": "ORAVI123",
            "X-Platform": "web",
          },
        }
      );
      console.log(res);
      if (res) {
        localStorage.setItem("session", "1");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={handleVerifyOtp}>Verify Otp</Button>
    </div>
  );
};

export default page;
