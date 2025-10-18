'use client';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ContributionGrid = () => {
  const today = new Date();
  const endDate = new Date(today.setDate(today.getDate()));
  const startDate = new Date(new Date().setDate(endDate.getDate() - 364));

  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const data = dates.map(date => ({
    date: date.toISOString().split('T')[0],
    count: Math.floor(Math.random() * 5), // Random count from 0 to 4
  }));

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const getMonthLabels = () => {
    const monthLabels = [];
    let lastMonth = -1;
    for (let i = 0; i < 53; i++) {
        const firstDayOfWeek = new Date(startDate);
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + i * 7);
        const month = firstDayOfWeek.getMonth();
        if(month !== lastMonth) {
            monthLabels.push({name: monthNames[month], weekIndex: i});
        }
        lastMonth = month;
    }
    return monthLabels;
  }
  
  const monthLabels = getMonthLabels();

  const getColor = (count: number) => {
    if (count === 0) return 'bg-muted/50';
    if (count === 1) return 'bg-primary/20';
    if (count === 2) return 'bg-primary/40';
    if (count === 3) return 'bg-primary/70';
    return 'bg-primary';
  };
  

  const daysByWeek = Array.from({ length: 53 }, () => Array(7).fill(null));

  let dayOfWeekOfFirstDate = startDate.getDay();
  data.forEach((dayData) => {
    const date = new Date(dayData.date);
    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000)
    const dayOfWeek = date.getDay();
    const diffInDays = Math.floor((date.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    const weekIndex = Math.floor((diffInDays + dayOfWeekOfFirstDate) / 7);

    if (weekIndex < 53) {
      daysByWeek[weekIndex][dayOfWeek] = dayData;
    }
  });


  return (
     <TooltipProvider>
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-full text-xs text-muted-foreground mb-1" style={{gridColumn: 'span 53'}}>
        {monthLabels.map(({name, weekIndex}) => (
          <div key={name} style={{minWidth: `${(4/53)*100}%`, transform: `translateX(${weekIndex * 14.5}px)`}} className="absolute -translate-x-1/2">
            {name}
          </div>
        ))}
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-1">
        {daysByWeek.flat().map((day, index) => {
          if (!day) return <div key={index} className="w-3.5 h-3.5 bg-transparent" />;
          return (
            <Tooltip key={day.date}>
              <TooltipTrigger>
                <div
                  className={`w-3.5 h-3.5 rounded-sm ${getColor(day.count)}`}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{day.count} contributions on {new Date(day.date).toDateString()}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
       <div className="flex items-center justify-end w-full mt-2 text-xs text-muted-foreground gap-2">
        <span>Less</span>
        <div className="w-3 h-3 rounded-sm bg-muted/50" />
        <div className="w-3 h-3 rounded-sm bg-primary/20" />
        <div className="w-3 h-3 rounded-sm bg-primary/40" />
        <div className="w-3 h-3 rounded-sm bg-primary/70" />
        <div className="w-3 h-3 rounded-sm bg-primary" />
        <span>More</span>
      </div>
    </div>
     </TooltipProvider>
  );
};

export { ContributionGrid };
