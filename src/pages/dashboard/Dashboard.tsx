/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import RenderActiveShape, { data } from "./RenderActiveShape";
import BarCharts from "./BarCharts";


const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
    const onPieEnter = (_: any, index: number) => {
      setActiveIndex(index);
    };


    return (
        <div className="px-10 my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Total projects</CardTitle>
                <CardDescription className="font-semibold">The projects I completed using different technologies.</CardDescription>
              </CardHeader>
              <CardContent>
                <h1 className="text-5xl font-bold"><span className="text-blue-500">20</span>+</h1>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Incomplete projects</CardTitle>
                <CardDescription className="font-semibold">The number of pending projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <h1 className="text-5xl font-bold"><span className="text-blue-500">03</span>+</h1>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Total Technologies</CardTitle>
                <CardDescription className="font-semibold">The extensive range of technologies I am proficient in.</CardDescription>
              </CardHeader>
              <CardContent>
                <h1 className="text-5xl font-bold"><span className="text-blue-500">30</span>+</h1>
              </CardContent>
            </Card>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  font-semibold gap-10 mt-5">
                <Card className="w-full" >
                    <ResponsiveContainer width="100%" height={350}>
                      <PieChart>
                        <Pie
                          activeIndex={activeIndex}
                          activeShape={(props: any) => <RenderActiveShape {...props} />}
                          data={data}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          onMouseEnter={onPieEnter}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                </Card>
                <Card className="h-[350px]  px-5">
                    <h1 className=" my-4">Complete projects follow the Software Development Life Cycle</h1>
                    <div className="mt-10">
                    <BarCharts></BarCharts>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;