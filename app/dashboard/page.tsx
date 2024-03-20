"use client"
import Link from 'next/link';
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHackathons } from '@/hooks/useHackathons';
import { useEffect } from 'react';

export default function page() {
  const { hackathons, getHackathons } = useHackathons();
  useEffect(() => {
    getHackathons();
  }, []);

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Your Hackathons
          </h2>
          <div className="hidden md:flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Link href="/dashboard/create-hackathon" passHref>
              <Button>Create New</Button>
            </Link>
            
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Active</TabsTrigger>
            <TabsTrigger value="analytics">Past</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              {hackathons.map((hackathon) => (
                <Card key={hackathon.id}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {hackathon.location}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{hackathon.hackathon_name}</div>
                    <p className="text-xs text-muted-foreground">
                      Additional information
                    </p>
                  </CardContent>
                </Card>
              ))}
              
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
