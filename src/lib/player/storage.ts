export const STORAGE_KEYS = {
  TRACK_INDEX: 'skg_track_index',
  TRACK_TIME: 'skg_track_time',
  VOLUME: 'skg_volume',
  IS_MUTED: 'skg_is_muted',
  IS_SHUFFLE: 'skg_is_shuffle',
  IS_REPEAT_SONG: 'skg_is_repeat_song',
  EXCLUDED_SONGS: 'skg_excluded_songs'
};

let excludedSongIds = new Set<string>((function() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.EXCLUDED_SONGS);
    if (saved) {
      const arr = JSON.parse(saved);
      if (Array.isArray(arr)) return new Set<string>(arr);
    }
  } catch (e) {}
  return new Set<string>();
})());

export function isSongExcluded(youtubeId: string): boolean {
  return youtubeId ? excludedSongIds.has(youtubeId) : false;
}

export function getExcludedSongIds(): Set<string> {
  return excludedSongIds;
}

export function toggleExcludeSongId(youtubeId: string): boolean {
  if (!youtubeId) return false;
  const willExclude = !excludedSongIds.has(youtubeId);
  if (excludedSongIds.has(youtubeId)) {
    excludedSongIds.delete(youtubeId);
  } else {
    excludedSongIds.add(youtubeId);
  }
  try {
    localStorage.setItem(STORAGE_KEYS.EXCLUDED_SONGS, JSON.stringify(Array.from(excludedSongIds)));
  } catch (e) {}
  return willExclude;
}

export function getInitialSavedIndex(totalSongs: number): number {
  try {
    const idx = localStorage.getItem(STORAGE_KEYS.TRACK_INDEX);
    if (idx !== null) {
      const parsed = parseInt(idx, 10);
      return (!isNaN(parsed) && parsed >= 0 && parsed < totalSongs) ? parsed : 0;
    }
    return 0;
  } catch (e) { return 0; }
}

export function getInitialSavedTime(): number {
  try {
    const t = localStorage.getItem(STORAGE_KEYS.TRACK_TIME);
    return t !== null ? Math.max(0, parseFloat(t)) : 0;
  } catch (e) { return 0; }
}

export function saveStateToStorage(state: {
  isRestored: boolean;
  currentIndex: number;
  isShuffle: boolean;
  isRepeatSong: boolean;
  isMuted: boolean;
  volumeVal?: string;
}) {
  if (!state.isRestored) return;
  try {
    localStorage.setItem(STORAGE_KEYS.TRACK_INDEX, state.currentIndex.toString());
    localStorage.setItem(STORAGE_KEYS.IS_SHUFFLE, state.isShuffle ? 'true' : 'false');
    localStorage.setItem(STORAGE_KEYS.IS_REPEAT_SONG, state.isRepeatSong ? 'true' : 'false');
    localStorage.setItem(STORAGE_KEYS.IS_MUTED, state.isMuted ? 'true' : 'false');
    if (state.volumeVal !== undefined) {
      localStorage.setItem(STORAGE_KEYS.VOLUME, state.volumeVal);
    }
  } catch (e) {}
}

export function saveTimePositionToStorage(isRestored: boolean, currentTime: number) {
  if (!isRestored) return;
  try {
    if (currentTime > 0) {
      localStorage.setItem(STORAGE_KEYS.TRACK_TIME, Math.floor(currentTime).toString());
    }
  } catch (e) {}
}
