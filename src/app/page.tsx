"use client";

import { Stack, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";

export default function Home() {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        m: "0px auto",
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          background: palette.background.paper,
          p: 3,
          width: "50vw",
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Image
            src="login-client.svg"
            alt="login"
            width={50}
            height={50}
            style={{ alignSelf: "flex-start" }}
          />
          <Typography variant="h4" alignSelf={"flex-start"}>
            Login with Client Code
          </Typography>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            fullWidth
          />
        </Stack>
      </Box>
    </Box>
  );
}
