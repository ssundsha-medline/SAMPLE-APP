import dynamic from "next/dynamic";

const Page = dynamic(() => import("../components/Header/Header"));

//@ts-ignore
export const getServerSideProps = async (ctx) => {
  let header = import("../components/Header/Header");
  const loadData = (await header).loadData;
  if (loadData) {
    return loadData(ctx);
  }

  return {};
};

export default Page;
