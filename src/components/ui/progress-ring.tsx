'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ProgressRingProps extends React.SVGProps<SVGSVGElement> {
  value: number;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ProgressRing = React.forwardRef<SVGSVGElement, ProgressRingProps>(
  ({ className, value, label, size = 'md', ...props }, ref) => {
    const sizeMap = {
      sm: { radius: 30, stroke: 8, circumference: 188.4, textSize: 'text-lg'},
      md: { radius: 50, stroke: 10, circumference: 314, textSize: 'text-2xl'},
      lg: { radius: 70, stroke: 12, circumference: 439.6, textSize: 'text-4xl'},
    };

    const { radius, stroke, circumference, textSize } = sizeMap[size];
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="relative flex flex-col items-center justify-center">
        <svg
          ref={ref}
          width={radius * 2 + stroke}
          height={radius * 2 + stroke}
          viewBox={`0 0 ${radius * 2 + stroke} ${radius * 2 + stroke}`}
          className={cn('-rotate-90', className)}
          {...props}
        >
          <circle
            className="text-muted"
            strokeWidth={stroke}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={radius + stroke / 2}
            cy={radius + stroke / 2}
          />
          <circle
            className="text-primary"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={radius + stroke / 2}
            cy={radius + stroke / 2}
            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className={`font-bold ${textSize}`}>{value}</span>
           {label && <span className="text-sm text-muted-foreground">{label}</span>}
        </div>
      </div>
    );
  }
);
ProgressRing.displayName = 'ProgressRing';

export { ProgressRing };

    