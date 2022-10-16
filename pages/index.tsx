import type { NextPage } from "next";
import { Browser } from "../components/Browser";
import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen h-screen font-display !overflow-y-hidden  flex flex-row">
      <Layout>
        <Sidebar />
        <Browser url="https://www.muchotodo.ga/" />
      </Layout>
    </div>
  );
};

export default Home;
