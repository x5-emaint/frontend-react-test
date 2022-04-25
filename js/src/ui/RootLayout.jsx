import "./RootLayout.css";

export const RootLayout = ({ children }) => (
  <div className="RootLayout">
    <main className="RootLayout__content">{children}</main>
  </div>
);
