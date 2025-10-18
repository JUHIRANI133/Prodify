'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const dayData = [
  { time: '8am', tasks: 2 },
  { time: '10am', tasks: 3 },
  { time: '12pm', tasks: 1 },
  { time: '2pm', tasks: 4 },
  { time: '4pm', tasks: 2 },
  { time: '6pm', tasks: 1 },
];

const weekData = [
    { day: 'Mon', tasks: 10 },
    { day: 'Tue', tasks: 12 },
    { day: 'Wed', tasks: 8 },
    { day: 'Thu', tasks: 15 },
    { day: 'Fri', tasks: 11 },
    { day: 'Sat', tasks: 5 },
    { day: 'Sun', tasks: 3 },
];

const monthData = [
    { week: 'Week 1', tasks: 45 },
    { week: 'Week 2', tasks: 50 },
    { week: 'Week 3', tasks: 40 },
    { week: 'Week 4', tasks: 55 },
];

const yearData = [
    { month: 'Jan', tasks: 200 },
    { month: 'Feb', tasks: 180 },
    { month: 'Mar', tasks: 220 },
    { month: 'Apr', tasks: 210 },
    { month: 'May', tasks: 230 },
    { month: 'Jun', tasks: 250 },
    { month: 'Jul', tasks: 240 },
    { month: 'Aug', tasks: 260 },
    { month: 'Sep', tasks: 230 },
    { month: 'Oct', tasks: 220 },
    { month: 'Nov', tasks: 240 },
    { month: 'Dec', tasks: 270 },
];


const Chart = ({ data, xKey, yKey }: { data: any[], xKey: string, yKey: string }) => (
    <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
            dataKey={xKey}
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
        />
        <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey={yKey} fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
    </ResponsiveContainer>
);

export default function TrackerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-headline">Productivity Tracker</h1>
        <p className="text-muted-foreground">
          Monitor your productivity over time.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Task Completion Stats</CardTitle>
           <CardDescription>
            See how many tasks you&apos;ve completed over different periods.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="week">
            <TabsList>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            <TabsContent value="day">
              <Chart data={dayData} xKey="time" yKey="tasks" />
            </TabsContent>
            <TabsContent value="week">
               <Chart data={weekData} xKey="day" yKey="tasks" />
            </TabsContent>
            <TabsContent value="month">
              <Chart data={monthData} xKey="week" yKey="tasks" />
            </TabsContent>
            <TabsContent value="year">
              <Chart data={yearData} xKey="month" yKey="tasks" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
