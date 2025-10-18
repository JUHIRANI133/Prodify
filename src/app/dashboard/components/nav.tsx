'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  CheckSquare,
  History,
  Lightbulb,
  Settings,
  TrendingUp,
  User,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const menuItems = [
  { href: '/dashboard/profile', label: 'Profile', icon: User },
  { href: '/dashboard#tracker', label: 'Productivity Tracker', icon: TrendingUp },
  { href: '/dashboard#techniques', label: 'Techniques', icon: Lightbulb },
  { href: '/dashboard#books', label: 'Books', icon: BookOpen },
  { href: '/dashboard#tasks', label: 'Tasks', icon: CheckSquare },
  { href: '/dashboard#history', label: 'History', icon: History },
  { href: '/dashboard#settings', label: 'Settings', icon: Settings },
];

export function MainNav() {
  const pathname = usePathname();
  
  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
            tooltip={item.label}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
