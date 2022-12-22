import React, { useEffect } from "react";

const userContext = React.createContext();

const ContextProvider = ({ children }) => {
  const localUser = JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = React.useState(localUser);
  const localCart = JSON.parse(localStorage.getItem("cart")) || null;

  const [cart, setCart] = React.useState(localCart);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [user, cart]);
  return (
    <userContext.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </userContext.Provider>
  );
};

export { userContext, ContextProvider };
