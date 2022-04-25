import { PropsWithChildren } from "react";
import "./RootLayout.css";

export const RootLayout = ({ children }: PropsWithChildren<{}>) => (
  <div className="RootLayout">
    <main className="RootLayout__content">{children}</main>
  </div>
);
