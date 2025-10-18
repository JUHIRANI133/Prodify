import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { recommendedBooks } from '@/lib/books';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export default function BooksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-headline">Recommended Books</h1>
        <p className="text-muted-foreground">
          Expand your knowledge with these productivity-focused books.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedBooks.map((book) => {
            const coverImage = PlaceHolderImages.find(img => img.id === book.coverImageId);
            return (
                <Card key={book.title} className="flex flex-col">
                    <CardHeader>
                        {coverImage && (
                             <div className="relative h-60">
                                <Image
                                    src={coverImage.imageUrl}
                                    alt={book.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                    data-ai-hint={coverImage.imageHint}
                                />
                             </div>
                        )}
                        <CardTitle className="pt-4">{book.title}</CardTitle>
                        <CardDescription>{book.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow"></CardContent>
                    <CardFooter>
                        <Badge variant="secondary">{book.topic}</Badge>
                    </CardFooter>
                </Card>
            )
        })}
      </div>
    </div>
  );
}
