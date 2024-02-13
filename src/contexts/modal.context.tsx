"use client";

import { createContext, useContext, useState } from "react";

type ModalContext = {
  modalElement: React.ReactElement | null;
  open: (modalElement: React.ReactElement) => void;
  close: () => void;
};

const initialValue: ModalContext = {
  modalElement: null,
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalElement, setModalElement] =
    useState<ModalContext["modalElement"]>(null);

  const open: ModalContext["open"] = (modalElement) => {
    setModalElement(modalElement);
  };

  const close: ModalContext["close"] = () => setModalElement(null);

  const value: ModalContext = {
    modalElement,
    open,
    close,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}
