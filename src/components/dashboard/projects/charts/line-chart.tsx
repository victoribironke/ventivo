import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartProps } from "@/types/dashboard";
import { DEFAULT_SETTINGS } from "@/constants/constants";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const LineChartComp = ({ data, customization }: ChartProps) => {
  const { line } = customization || DEFAULT_SETTINGS;
  const itemsPerPage = line.dotsPerPage === 0 ? data.length : line.dotsPerPage;

  const [page, setPage] = useState(1);
  const d = data.length / itemsPerPage;
  const c = Number.isInteger(d)
    ? page !== Math.floor(d)
    : page !== Math.floor(d) + 1;

  const chartConfig = {
    field: {
      label: "Value",
      color: "#ff9100",
    },
  } satisfies ChartConfig;

  if (data)
    return (
      <>
        <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
          <LineChart
            accessibilityLayer
            data={
              line.paginateDots
                ? data.slice(
                    page * itemsPerPage - itemsPerPage,
                    page * itemsPerPage
                  )
                : data
            }
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="field"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              // tickFormatter={(value) => {
              //   if (data.length < 5) return value;
              //   else if (data.length >= 5 && data.length <= 12)
              //     return `${value.slice(0, 3)}..`;

              //   return `${value.slice(0, 2)}..`;
              // }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="field" indicator="line" />}
            />
            <Line
              type="natural"
              strokeWidth={2}
              dataKey="value"
              stroke={line.color}
              // stroke="#ff9100"
              dot={{
                fill: line.color,
                // fill: "#ff9100",
              }}
              activeDot={{
                r: 6,
              }}
              // fill="rgb(255 145 0 / 0.9)"
            >
              {line.showCount && (
                <LabelList
                  position="bottom"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              )}
            </Line>
          </LineChart>
        </ChartContainer>

        {line.paginateDots && (
          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-sm rs:mr-auto">
              {page * itemsPerPage - (itemsPerPage - 1)}{" "}
              <span className="text-gray-400">to</span>{" "}
              {c
                ? data.length < itemsPerPage
                  ? data.length
                  : page * itemsPerPage
                : data.length}{" "}
              <span className="text-gray-400">of</span> {data.length}
            </p>

            <div className="flex gap-2">
              <button
                className="text-sm border py-1.5 px-3 rounded-md disabled:cursor-not-allowed"
                onClick={() => page !== 1 && setPage((p) => p - 1)}
                disabled={page === 1}
              >
                <IoIosArrowBack />
              </button>
              <button
                className="text-sm border py-1.5 px-3 rounded-md disabled:cursor-not-allowed"
                onClick={() => c && setPage((p) => p + 1)}
                disabled={!c}
              >
                <IoIosArrowBack className="rotate-180" />
              </button>
            </div>
          </div>
        )}
      </>
    );
};

export default LineChartComp;
