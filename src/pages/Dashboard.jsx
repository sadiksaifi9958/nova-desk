import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";

const stats = [
  { title: "Total Users", value: "8,492", icon: <Users /> },
  { title: "Total Revenue", value: "$42,300", icon: <DollarSign /> },
  { title: "Active Sessions", value: "1,204", icon: <Activity /> },
  { title: "Conversion Rate", value: "3.8%", icon: <TrendingUp /> },
];

function Dashboard() {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-4 gap-4">
        {stats.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <span>{item.icon}</span>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>{item.value}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
