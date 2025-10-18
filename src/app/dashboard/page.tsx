'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { recommendedBooks } from '@/lib/books';
import { techniquesData } from '@/lib/techniques';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { ProgressRing } from '@/components/ui/progress-ring';
import { chat } from '@/ai/flows/chat-flow';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const todayTasks = [
    'Draft Client Proposal (Estimated 9:00 AM - 11:00 AM)',
    'Review Team Feedback',
    'Schedule Follow-ups',
  ];

  const currentTechnique = techniquesData[1].techniques[0]; // Pomodoro
  const recommendedBook = recommendedBooks[0];
  const bookCover = PlaceHolderImages.find(
    (img) => img.id === recommendedBook.coverImageId
  );

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await chat(input);
      const botMessage: Message = { text: response, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response from bot:', error);
      const errorMessage: Message = {
        text: 'Sorry, I am having trouble responding right now.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Prodify Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center justify-center gap-8">
              <ProgressRing value={78} label="FlowState" />
              <ProgressRing value={45} label="Healthy" size="sm" />
            </div>
            <div className="space-y-4 rounded-lg bg-muted p-4">
               <h3 className="font-semibold">Insight</h3>
               <p className="text-sm text-muted-foreground">
                Based on your current Energy Curve, complex tasks are 15% more
                likely to succeed before noon. Prioritize Task 1 now.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Action Agenda</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>Your Focus Agenda</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc space-y-2 pl-5">
                    {todayTasks.map((task, index) => (
                      <li key={index} className="text-sm">
                        {task}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-4 w-full">Start Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Improvement Opportunity</CardTitle>
                   <CardDescription>
                    Try The {currentTechnique.name} Technique
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Address the root cause of 4 daily context switches.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn & Activate
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Book Recommendation</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-6">
              {bookCover && (
                <div className="relative h-32 w-24 flex-shrink-0">
                  <Image
                    src={bookCover.imageUrl}
                    alt={recommendedBook.title}
                    fill
                    className="rounded-md object-cover"
                    data-ai-hint={bookCover.imageHint}
                  />
                </div>
              )}
              <div>
                <h3 className="font-semibold">{recommendedBook.title}</h3>
                <p className="text-sm text-muted-foreground">
                  by {recommendedBook.author}
                </p>
                <p className="mt-2 text-sm">
                  A great read on {recommendedBook.topic.toLowerCase()}.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="lg:col-span-1 flex flex-col">
          <CardHeader>
            <CardTitle>Chat with Prodify</CardTitle>
            <CardDescription>
              How are you feeling about your tasks?
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-4 overflow-y-auto">
            <div className="flex-grow space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
           <form
              onSubmit={handleSendMessage}
              className="flex items-center gap-2 border-t p-4"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Share your thoughts..."
                className="flex-1"
                autoComplete="off"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
        </Card>
      </div>
    </div>
  );
}

    