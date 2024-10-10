type Song = {
  id: number;
  title: string;
  artist: string;
  creationDate: string;
  duration: number;
};

class Playlist {
  private songs: Song[] = [];
  private idSong: number = 0;

  addSong(song: Song): void {
    let newSong: Song = { ...song, id: this.idSong++ };
    this.songs.push(newSong);
  }

  findSongIndex(key: keyof Song, element: string | number): number {
    const index = this.songs.findIndex((song) => song[key] === element);
    return index;
  }

  removeSong(id: number, title: string): string {
    const deleteSong = title
      ? this.findSongIndex('title', title)
      : this.findSongIndex('id', id);

    if (deleteSong === -1) {
      return `song ${deleteSong} not found`;
    }
    this.songs.splice(deleteSong, 1);
    return `Song ${deleteSong} deleted successfully`;
  }

  getTotalDuration(): string {
    const totalDuration = this.songs.reduce((total, currentValue) => {
      return total + currentValue.duration;
    }, 0);
    return `The total duration is: ${totalDuration}`;
  }

  getSongsByArtist(artist: string): Song[] {
    const filteredSongs = this.songs.filter((songs) => songs.artist === artist);
    return filteredSongs;
  }
}
