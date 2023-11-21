import { createContext, useContext, useEffect, useState } from "react";
import httpClient from "../common/Axios/httpClient";

// Crea el contexto
const UserContext = createContext();

// Componente proveedor del contexto
export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userInfoLoading, setUserInfoLoading] = useState(true);

  // useEffect(() => {
  //   const asyncFunction = async () => {
  //     setUserInfoLoading(true);
  //     httpClient
  //       .get("api/users/current-user")
  //       .then((res) => {
  //         const data = res.data;
  //         setUserInfo(data.currentUser);
  //         setUserInfoLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         setUserInfoLoading(false);
  //       });
  //   };
  //   asyncFunction();
  // }, []);

  return (
    <UserContext.Provider value={{ userInfo, userInfoLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
