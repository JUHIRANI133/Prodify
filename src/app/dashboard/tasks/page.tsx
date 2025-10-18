'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Goal = {
  id: number;
  text: string;
};

export default function TasksPage() {
  const [dailyTasks, setDailyTasks] = useState<Task[]>([
    { id: 1, text: 'Drink 8 glasses of water', completed: false },
    { id: 2, text: 'Read for 30 minutes', completed: true },
    { id: 3, text: 'Exercise for 20 minutes', completed: false },
  ]);

  const [shortTermGoals, setShortTermGoals] = useState<Goal[]>([
    { id: 1, text: 'Finish the project report' },
    { id: 2, text: 'Plan weekend trip' },
  ]);

  const [longTermGoals, setLongTermGoals] = useState<Goal[]>([
    { id: 1, text: 'Learn a new programming language' },
    { id: 2, text: 'Run a half-marathon' },
  ]);

  const [newDailyTask, setNewDailyTask] = useState('');
  const [newShortTermGoal, setNewShortTermGoal] = useState('');
  const [newLongTermGoal, setNewLongTermGoal] = useState('');
  
  const handleToggleTask = (id: number) => {
    setDailyTasks(dailyTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };
  
  const addTask = (type: 'daily' | 'short' | 'long') => {
      if(type === 'daily' && newDailyTask.trim() !== '') {
          setDailyTasks([...dailyTasks, { id: Date.now(), text: newDailyTask, completed: false }]);
          setNewDailyTask('');
      } else if (type === 'short' && newShortTermGoal.trim() !== '') {
          setShortTermGoals([...shortTermGoals, { id: Date.now(), text: newShortTermGoal }]);
          setNewShortTermGoal('');
      } else if (type === 'long' && newLongTermGoal.trim() !== '') {
          setLongTermGoals([...longTermGoals, { id: Date.now(), text: newLongTermGoal }]);
          setNewLongTermGoal('');
      }
  };

  const removeGoal = (id: number, type: 'short' | 'long') => {
      if(type === 'short') {
          setShortTermGoals(shortTermGoals.filter(goal => goal.id !== id));
      } else {
          setLongTermGoals(longTermGoals.filter(goal => goal.id !== id));
      }
  }


  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-2xl font-bold font-headline">Tasks & Goals</h1>
        <p className="text-muted-foreground">
          Manage your daily activities and long-term aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Daily Tickable Chart</CardTitle>
            <CardDescription>Track your daily recurring activities.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
                {dailyTasks.map(task => (
                    <div key={task.id} className="flex items-center space-x-2">
                        <Checkbox id={`task-${task.id}`} checked={task.completed} onCheckedChange={() => handleToggleTask(task.id)} />
                        <Label htmlFor={`task-${task.id}`} className={task.completed ? 'line-through text-muted-foreground' : ''}>
                            {task.text}
                        </Label>
                    </div>
                ))}
            </div>
            <div className="flex space-x-2">
                <Input value={newDailyTask} onChange={(e) => setNewDailyTask(e.target.value)} placeholder="Add a new daily task"/>
                <Button onClick={() => addTask('daily')} size="icon"><PlusCircle /></Button>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Short-Term Goals</CardTitle>
                    <CardDescription>What you want to accomplish soon.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ul className="space-y-2">
                        {shortTermGoals.map(goal => (
                            <li key={goal.id} className="flex items-center justify-between">
                               <span>{goal.text}</span>
                               <Button variant="ghost" size="icon" onClick={() => removeGoal(goal.id, 'short')}>
                                   <Trash2 className="h-4 w-4 text-muted-foreground"/>
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-2">
                        <Input value={newShortTermGoal} onChange={(e) => setNewShortTermGoal(e.target.value)} placeholder="Add a new short-term goal"/>
                        <Button onClick={() => addTask('short')} size="icon"><PlusCircle /></Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Long-Term Goals</CardTitle>
                    <CardDescription>Your bigger ambitions for the future.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ul className="space-y-2">
                        {longTermGoals.map(goal => (
                            <li key={goal.id} className="flex items-center justify-between">
                               <span>{goal.text}</span>
                               <Button variant="ghost" size="icon" onClick={() => removeGoal(goal.id, 'long')}>
                                   <Trash2 className="h-4 w-4 text-muted-foreground"/>
                                </Button>
                            </li>
                        ))}
                    </ul>
                     <div className="flex space-x-2">
                        <Input value={newLongTermGoal} onChange={(e) => setNewLongTermGoal(e.target.value)} placeholder="Add a new long-term goal"/>
                        <Button onClick={() => addTask('long')} size="icon"><PlusCircle /></Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
