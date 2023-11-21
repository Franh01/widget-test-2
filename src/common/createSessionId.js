import { v4 as uuidv4 } from "uuid";
import Cookies from "universal-cookie";

export const createSessionId = () => {
  const cookies = new Cookies();
  const existSessionId = cookies.get("session_id");
  if (!existSessionId) {
    const session_id = uuidv4();
    cookies.set("session_id", session_id, { path: "/" });
  }
};
