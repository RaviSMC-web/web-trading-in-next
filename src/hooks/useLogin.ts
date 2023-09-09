import { useMutation } from "@tanstack/react-query";
import { handleLogin } from "stx/queryFns/postQuery";
import { Login } from "stx/types";

export default function useLogin() {
    const mutation = useMutation(handleLogin)
    return mutation
  }