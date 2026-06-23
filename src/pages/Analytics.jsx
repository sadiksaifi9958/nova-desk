import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trafficData = [
  { month: "Jan", visitors: 1200 },
  { month: "Feb", visitors: 1450 },
  { month: "Mar", visitors: 1100 },
  { month: "Apr", visitors: 1800 },
  { month: "May", visitors: 2100 },
  { month: "Jun", visitors: 2600 },
];

function Analytics() {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Website Traffic</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficData}>
              <XAxis dataKey="month"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Line dataKey="visitors"></Line>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default Analytics;
