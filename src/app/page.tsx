"use client";
import React from "react";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { LOGIN_API } from "stx/utils/API";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useLogin from "stx/hooks/useLogin";
import { useMutation } from "@tanstack/react-query";
import { handleLogin } from "stx/queryFns/postQuery";


const todosQueryKey = {
  all: ["TODOS"],
  list: () => [...todosQueryKey.all, "LIST"],
  listByFilter: (filter: { archived: boolean }) => [
    ...todosQueryKey.list(),
    filter,
  ],
  findById: (id: number) => [...todosQueryKey.all, id],
  details: () => [...todosQueryKey.all, "DETAILS"],
};

export default function Home() {
  const { palette } = useTheme();
  const [clientId, setClientId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const  mutation : any = useLogin()
  // const mutation = useMutation({
  //   mutationFn: handleLogin
  // })

  // const handleLogin = async () => {
  //   try {
  //     const res = await LOGIN_API.post("/auth/login", {
  //       platform: "web",
  //       data: { client_id: clientId, password: password },
  //     });
  //     console.log(res);

  //     if (res) {
  //       sessionStorage.setItem("token", res?.data?.data?.token);
  //       if (sessionStorage.getItem("token")) {
  //         router.push("/verifyotp");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  
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
      <Link href='bulkdeals'>fetch</Link>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          background: palette.background.paper,
          p: 3,
          width: "30vw",
        }}
      >
        <Stack justifyContent={"center"} alignItems={"center"} spacing={2}>
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
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" fullWidth 
          onClick={() => {
            mutation.mutate({ client_id: clientId, password: password})}}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
