import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ ratings }) => {
  // Optional: Sort so 5 star appears on top
  const sortedRatings = [...ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );

  return (
    <div className="md:w-[85%] sm:w-[90%] w-[95%] mx-auto mt-10 inter">
      <h1 className="font-semibold text-2xl mb-4">Ratings</h1>

      <div className="w-full h-96 bg-gray-50 rounded-xl shadow p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sortedRatings}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip formatter={(val) => val.toLocaleString()} />
            <Bar
              dataKey="count"
              fill="#FF8811"
              barSize={25}
            />
            <defs>
              
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
