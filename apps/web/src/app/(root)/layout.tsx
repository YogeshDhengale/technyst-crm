import type { ReactNode } from "react";
import Header from "@/components/header";

function layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[auto_1fr] h-svh">
      <Header />
      {children}
    </div>
  );
}

export default layout;
