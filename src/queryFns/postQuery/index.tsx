import { AxiosResponse } from "axios";
import { Login } from "stx/types";
import { LOGIN_API } from "stx/utils/API";

export const handleLogin = async ({client_id, password}: Login): Promise<any> => {
    try {
      const res: AxiosResponse = await LOGIN_API.post("/auth/login", {
        platform: "web",
        data: { client_id , password },
      });

      if (res) {
        return { data: res, error: null }
      }
    } catch (error: any) {
      return { data: null, error: error}
    }
  };