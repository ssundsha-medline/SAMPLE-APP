import { getServerSideProps } from "@/pages";
import type { FC } from "react";
import { GetServerSidePropsContext } from "next";
import { HeaderProps } from "@/interfaces/header-interfaces";
import axios from "axios";

const Header: FC = (props) => {
  return (
    <header>
      <h1>My Header</h1>
    </header>
  );
};

export async function loadData(
  ctx: GetServerSidePropsContext
): Promise<{ props: HeaderProps }> {
  const promise = await axios.get<HeaderProps>(
    "https://dummy.restapiexample.com/api/v1/employees"
  );

  const data = promise.data;

  return {
    props: data,
  };
}

export default Header;
