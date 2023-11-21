import { createContext, useContext, useState } from "react";

// Crea el contexto
const WidgetContext = createContext();

// Componente proveedor del contexto
export const WidgetContextProvider = ({ children }) => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);

  const changeWidgetState = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <WidgetContext.Provider value={{ changeWidgetState, isWidgetOpen }}>
      {children}
    </WidgetContext.Provider>
  );
};

// Función personalizada para acceder al contexto
export const useWidgetContext = () => {
  return useContext(WidgetContext);
};
