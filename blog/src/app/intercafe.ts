import { ReactNode } from "react";

export interface AllFormProps {
  showForm?: (formName: number) => void;
}

export interface LoginLayoutProps {
  children: ReactNode;
}