import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DashboardPage() {
  const animeCharacterImage = PlaceHolderImages.find(
    (img) => img.id === 'anime-character'
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8 rounded-xl border-2 border-dashed border-border bg-card p-8 text-center h-full">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight font-headline">
          Welcome to Prodify, John!
        </h1>
        <p className="text-muted-foreground">
          This is your space to focus, track, and grow. Let&apos;s make today productive.
        </p>
      </div>
      {animeCharacterImage && (
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={animeCharacterImage.imageUrl}
            alt={animeCharacterImage.description}
            width={400}
            height={500}
            className="object-cover"
            data-ai-hint={animeCharacterImage.imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
    </div>
  );
}
