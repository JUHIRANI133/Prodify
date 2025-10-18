'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { techniquesData, Technique } from '@/lib/techniques';
import { useToast } from '@/hooks/use-toast';

export default function TechniquesPage() {
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  const { toast } = useToast();

  const handleSelectTechnique = (technique: Technique) => {
    setSelectedTechnique(technique);
  };
  
  const handleStartFollowing = () => {
    if (selectedTechnique) {
      toast({
        title: "Technique selected!",
        description: `You are now following the "${selectedTechnique.name}" technique for the next 7 days.`,
      });
    } else {
        toast({
            variant: "destructive",
            title: "No technique selected",
            description: "Please select a technique to start following.",
        });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-headline">Productivity Techniques</h1>
        <p className="text-muted-foreground">
          Choose a technique to follow and boost your productivity.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Choose a Technique</CardTitle>
          <CardDescription>
            Select a domain and then a technique you want to focus on for the next 7 days.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {techniquesData.map((domain) => (
              <AccordionItem value={domain.name} key={domain.name}>
                <AccordionTrigger className="text-lg font-semibold">{domain.name}</AccordionTrigger>
                <AccordionContent>
                  <RadioGroup onValueChange={(value) => handleSelectTechnique(JSON.parse(value))} className="space-y-4 pt-2">
                    {domain.techniques.map((technique) => (
                      <div key={technique.name}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={JSON.stringify(technique)} id={technique.name} />
                          <Label htmlFor={technique.name} className="font-medium">{technique.name}</Label>
                        </div>
                        <p className="pl-6 text-sm text-muted-foreground">{technique.description}</p>
                      </div>
                    ))}
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 flex justify-end">
            <Button onClick={handleStartFollowing}>Start Following for 7 Days</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
