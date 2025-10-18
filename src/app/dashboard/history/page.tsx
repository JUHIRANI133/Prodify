import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const historyData = [
  {
    technique: 'The Pomodoro Technique',
    startDate: '2024-07-01',
    endDate: '2024-07-07',
    adherence: '85%',
    favorability: 9.2,
  },
  {
    technique: 'Eat the Frog',
    startDate: '2024-06-24',
    endDate: '2024-06-30',
    adherence: '92%',
    favorability: 8.5,
  },
  {
    technique: 'Timeblocking',
    startDate: '2024-06-17',
    endDate: '2024-06-23',
    adherence: '70%',
    favorability: 7.8,
  },
];

export default function HistoryPage() {
  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-2xl font-bold font-headline">Technique History</h1>
        <p className="text-muted-foreground">
            Review your past techniques and their effectiveness.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Past Techniques</CardTitle>
          <CardDescription>A log of the productivity techniques you have followed.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Technique</TableHead>
                        <TableHead>Period</TableHead>
                        <TableHead className="text-center">Adherence</TableHead>
                        <TableHead className="text-right">Favorability Score</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {historyData.map((item) => (
                        <TableRow key={item.technique}>
                            <TableCell className="font-medium">{item.technique}</TableCell>
                            <TableCell>{item.startDate} to {item.endDate}</TableCell>
                            <TableCell className="text-center">
                                <Badge variant={parseInt(item.adherence) > 80 ? 'default' : 'secondary'}>{item.adherence}</Badge>
                            </TableCell>
                            <TableCell className="text-right font-semibold">{item.favorability}/10</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
