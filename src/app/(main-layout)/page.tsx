import { memo } from "react";
// SSR - Server Side Rendering
// CSR - Client Side Rendering
// SSG - Static Site Generation
// ISR - Incremental Static Regeneration

const Home = async () => {
  return (
    <div className="bg-slate-200 h-screen">
      <div className=" container text-center flex flex-col">
        <h2 className="font-bold text-6xl text-slate-800 mt-40">
          Welcome to Next JS!
        </h2>
        <p className="mt-10 text-3xl font-semibold text-[#3b3b3b]">
          This is the Home Page !
        </p>
      </div>
    </div>
  );
};

export default memo(Home);
