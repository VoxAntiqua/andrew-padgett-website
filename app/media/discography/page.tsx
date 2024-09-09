import { albums } from "@/app/lib/albumData";
import AlbumCard from "@/app/ui/media/discography/AlbumCard";

export default function Discography() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {albums.map((album) => (
        <div key={album.id} className="aspect-square">
          <AlbumCard album={album} />
        </div>
      ))}
    </div>
  );
}