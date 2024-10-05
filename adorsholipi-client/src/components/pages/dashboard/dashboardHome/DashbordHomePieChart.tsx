import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChevronDown } from "lucide-react";
const chartData = [
  { user: "arrBookUser", users: 275, fill: "var(--color-arrBookUser)" },
  { user: "iosUser", users: 200, fill: "var(--color-iosUser)" },
  { user: "android", users: 287, fill: "var(--color-android)" },
];
const chartConfig = {
  arrBookUser: {
    label: "AR Book",
    color: "#4383ce",
  },
  iosUser: {
    label: "IOS ",
    color: "#b270ec",
  },
  android: {
    label: "Android",
    color: "#6418c3",
  },
} satisfies ChartConfig;

const DashbordHomePieChart = () => {
  const totalusers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.users, 0);
  }, []);

  return (
    <div className="col-span-1 md:col-span-3 bg-white px-4 py-6 rounded-xl">
      <div className="w-full justify-between items-center inline-flex mb-5">
        <h2 className="text-gray-700 text-xl font-bold font-roboto">User</h2>
        <button className="text-[#343a40] px-3 py-1.5 bg-[#f8f9fa] rounded justify-center items-center gap-2 flex text-base font-semibold leading-tight tracking-tight">
          Filter
          <ChevronDown className="w-4 h-4 text-primary" />
        </button>
      </div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="users"
            nameKey="user"
            innerRadius={60}
            // strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalusers.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Users
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="w-[304px] h-[60px] flex-col justify-start items-start gap-3 inline-flex">
        <div className="justify-start items-center gap-3 inline-flex leading-normal tracking-tight">
          <span className="w-2 h-2 bg-[#4383ce] rounded-full p-0.5" />
          <span className="text-gray-700 text-lg font-medium ">
            AR Book User
          </span>
          <span className="text-[#4383ce] text-lg font-bold ">60%</span>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <p className="justify-start items-center gap-3 flex tracking-tight">
            <span className="w-2 h-2 p-0.5 bg-[#b270ec] rounded-full" />
            <span className="text-gray-700 text-base font-normal leading-snug ">
              IOS
            </span>
            <span className="text-[#b270ec] text-lg font-bold leading-normal">
              40
            </span>
          </p>
          <p className="justify-start items-center gap-3 flex">
            <span className="w-2 h-2 p-0.5 bg-[#6418c3] rounded-full" />
            <span className="text-gray-700 text-base font-normal leading-snug tracking-tight">
              Android
            </span>
            <span className="text-[#6418c3] text-lg font-bold leading-normal tracking-tight">
              60%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashbordHomePieChart;
