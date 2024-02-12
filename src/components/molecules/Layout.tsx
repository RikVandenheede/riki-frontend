import { Sidebar } from "./Sidebar";

import { Dispatch, SetStateAction } from "react";

interface LayoutProps {
  children: React.ReactNode;
  loggedIn?: boolean;
  setFilterOption?: Dispatch<SetStateAction<string>>;
  filterOption?: string;
  className?: string;
}

export const Layout = ({
  children,
  loggedIn,
  filterOption,
  setFilterOption,
  className,
}: LayoutProps) => {
  return (
    <section className={loggedIn ? "layout logged-in" : "layout"}>
      {loggedIn && setFilterOption && filterOption && (
        <Sidebar
          filterOption={filterOption}
          setFilterOption={setFilterOption}
        />
      )}
      <main className={className}>{children}</main>
    </section>
  );
};
