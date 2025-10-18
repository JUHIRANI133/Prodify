import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    memberSince: 'July 2024',
    prodifyScore: 0,
  };
  const maxScore = 1000;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-headline">User Profile</h1>
        <p className="text-muted-foreground">
          View and manage your profile details.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarImage
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt={user.name}
              />
              <AvatarFallback>
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-headline">
                {user.name}
              </CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Separator className="my-4" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Age</p>
              <p className="text-lg font-semibold">{user.age}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Member Since
              </p>
              <p className="text-lg font-semibold">{user.memberSince}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prodify Score</CardTitle>
          <CardDescription>
            A measure of your productivity journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <p className="text-6xl font-bold">{user.prodifyScore}</p>
            <p className="text-sm text-muted-foreground">/ {maxScore} points</p>
          </div>
          <Progress value={(user.prodifyScore / maxScore) * 100} className="mt-4" />
        </CardContent>
      </Card>
    </div>
  );
}
