import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  //   ChartLegend,
  //   ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChevronDown } from "lucide-react";

const chartData = [
  { month: "Sunday", apps: 186, mobile: 80 },
  { month: "Monday", apps: 305, mobile: 200 },
  { month: "Tuesday", apps: 237, mobile: 120 },
  { month: "Wednesday", apps: 73, mobile: 190 },
  { month: "Thursday", apps: 209, mobile: 130 },
  { month: "Friday", apps: 214, mobile: 140 },
  { month: "Saturday", apps: 124, mobile: 140 },
];

const chartConfig = {
  apps: {
    // icon: Monitor,
    label: "Apps",
    color: "#0de5e5",
  },
  mobile: {
    label: "AR Book",
    color: "#4383ce",
  },
} satisfies ChartConfig;

const DashboardHomeBarChart = () => {
  return (
    <div className="col-span-1 md:col-span-5  bg-white px-4 py-6 space-y-6 rounded-xl">
      <div className="w-full justify-between items-center inline-flex">
        <h2 className="text-gray-700 text-xl font-bold font-roboto">
          Learning Time
        </h2>
        <button className="text-[#343a40] px-3 py-1.5 bg-[#f8f9fa] rounded justify-center items-center gap-2 flex text-base font-semibold leading-tight tracking-tight">
          Filter
          <ChevronDown className="w-4 h-4 text-primary" />
        </button>
      </div>

      <div className=" justify-end gap-6 items-center flex">
        <p className="justify-start items-center gap-3 flex">
          <span className="w-2 h-2 p-0.5 bg-[#0de5e5] rounded-full" />
          <span className="text-gray-700 text-base font-normal leading-snug tracking-tight">
            Apps
          </span>
        </p>
        <p className="justify-start items-center gap-3 flex">
          <span className="w-2 h-2 p-0.5 bg-[#4383ce] rounded-full" />
          <span className="text-gray-700 text-base font-normal leading-snug tracking-tight">
            AR Book
          </span>
        </p>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          {/* <ChartLegend content={<ChartLegendContent />} /> */}
          <CartesianGrid />
          <XAxis
            dataKey="month"
            tickLine={true}
            tickMargin={10}
            axisLine={true}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            dataKey="apps"
            tickLine={true}
            tickMargin={10}
            axisLine={true}
            //   tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar dataKey="apps" fill="var(--color-apps)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default DashboardHomeBarChart;
