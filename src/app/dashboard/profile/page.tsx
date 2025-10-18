import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function ProfilePage() {
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
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-headline">John Doe</CardTitle>
              <CardDescription>john.doe@example.com</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Separator className="my-4" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Age</p>
              <p className="text-lg font-semibold">25</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Member Since
              </p>
              <p className="text-lg font-semibold">July 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <CardHeader>
          <CardTitle>Prodify Score</CardTitle>
          <CardDescription className="text-accent-foreground/80">
            A measure of your productivity journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <p className="text-6xl font-bold">1,280</p>
            <p className="text-sm">points</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
