import { ReactNode, createContext, useContext, useState } from "react";

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebarContext = () => {
  const value = useContext(SidebarContext);
  if (value == null) throw Error("cannot use outside of SidebarProvider");

  return value;
};

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  const isScreenSmall = () => {
    return window.innerWidth < 1024;
  };

  const toggle = () => {
    if (isScreenSmall()) {
      setIsSmallOpen((small) => !small);
    } else {
      setIsLargeOpen((large) => !large);
    }
  };

  const close = () => {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  };

  return (
    <SidebarContext.Provider
      value={{ isLargeOpen, isSmallOpen, toggle, close }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
