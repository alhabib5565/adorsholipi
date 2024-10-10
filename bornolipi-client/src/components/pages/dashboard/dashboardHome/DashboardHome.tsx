import PageHeader from "@/components/shared/PageHeader";
import DashboardHomeBarChart from "./DashboardHomeBarChart";
import DashbordHomePieChart from "./DashbordHomePieChart";

import DashboardHomeLeaderBoard from "./DashboardHomeLeaderBoard";

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <PageHeader />
      <div className="flex flex-wrap gap-6">
        <OverVeiwCard />
        <OverVeiwCard />
        <OverVeiwCard2 />
        <OverVeiwCard2 />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-11 gap-6">
        <DashbordHomePieChart />
        <DashboardHomeBarChart />
        <DashboardHomeLeaderBoard />
      </div>
    </div>
  );
};

export default DashboardHome;

const OverVeiwCard2 = () => {
  return (
    <div className="min-w-[258px] flex-1 py-4 px-5 space-y-2 relative bg-white rounded-2xl shadow border border-gray-100">
      <h4 className="self-stretch text-gray-700 text-lg font-bold font-['Nunito'] leading-normal tracking-tight">
        New Kids Profile
      </h4>
      <div className="text-[#4383ce] text-[32px] font-bold text-center leading-[38.40px] tracking-tight">
        1K
      </div>
    </div>
  );
};

const OverVeiwCard = () => {
  return (
    <div className="min-w-[258px] flex-1 py-4 px-5 space-y-2 relative bg-white rounded-2xl shadow border border-gray-100">
      <h4 className="self-stretch text-gray-700 text-lg font-bold font-['Nunito'] leading-normal tracking-tight">
        Active User
      </h4>
      <p className="flex justify-between items-center">
        <span className="text-[#343a40] text-base font-normal leading-snug tracking-tight">
          Parents Account
        </span>
        <span className=" text-[#343a40] text-base font-semibold leading-tight tracking-tight">
          150K
        </span>
      </p>
      <p className="flex justify-between items-center">
        <span className="text-[#343a40] text-base font-normal leading-snug tracking-tight">
          Kids Profile
        </span>
        <span className=" text-[#343a40] text-base font-semibold leading-tight tracking-tight">
          150K
        </span>
      </p>
    </div>
  );
};
