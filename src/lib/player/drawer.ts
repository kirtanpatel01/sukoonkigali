import { SONGS } from '../../data/songs';
import { isSongExcluded } from './storage';

export function highlightActiveDrawerSong(index: number) {
  const counterEl = document.getElementById('drawer-counter-text');
  if (counterEl) {
    counterEl.innerText = `${index + 1} of ${SONGS.length}`;
  }

  document.querySelectorAll('.drawer-song-item').forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-index') || '-1', 10);
    const numEl = btn.querySelector('.drawer-song-num');
    const titleEl = btn.querySelector('.drawer-song-title');

    if (idx === index) {
      btn.classList.add('border-b', 'border-[#e2b170]/70');
      btn.classList.remove('border-transparent');
      if (numEl) {
        numEl.classList.add('text-[#e2b170]');
        numEl.classList.remove('text-stone-500');
      }
      if (titleEl) {
        titleEl.classList.add('text-[#e2b170]');
        titleEl.classList.remove('text-[#f5f0e1]');
      }
    } else {
      btn.classList.remove('border-b', 'border-[#e2b170]/70');
      btn.classList.add('border-transparent');
      if (numEl) {
        numEl.classList.remove('text-[#e2b170]');
        numEl.classList.add('text-stone-500');
      }
      if (titleEl) {
        titleEl.classList.remove('text-[#e2b170]');
        titleEl.classList.add('text-[#f5f0e1]');
      }
    }
  });
}

export function renderDrawerList(
  currentIndex: number, 
  isShuffle: boolean, 
  shuffledQueue: number[], 
  generateShuffledQueue: () => void
) {
  const container = document.getElementById('drawer-songs-list');
  if (!container) return;

  if (isShuffle && shuffledQueue.length === 0) {
    generateShuffledQueue();
  }

  const indicesToRender = isShuffle
    ? shuffledQueue
    : Array.from({ length: SONGS.length }, (_, i) => i);

  container.innerHTML = indicesToRender.map((songIndex, displayIdx) => {
    const song = SONGS[songIndex];
    const isExcluded = isSongExcluded(song.youtubeId);
    const isCurrentTrack = songIndex === currentIndex;
    return `
      <div 
        data-index="${songIndex}" 
        data-queue-pos="${displayIdx}"
        data-youtube-id="${song.youtubeId}"
        data-title="${song.title.toLowerCase()}"
        data-artist="${song.artist.toLowerCase()}"
        class="drawer-song-item w-full text-left transition-all flex items-center justify-between space-x-3 group py-1.5 border-b border-transparent ${isExcluded ? 'opacity-35' : ''}"
      >
        <div class="flex items-start space-x-3.5 flex-1 min-w-0 drawer-song-click-area ${isExcluded ? 'pointer-events-none cursor-not-allowed select-none' : 'cursor-pointer'}">
          <span class="drawer-song-num font-sans text-xs ${isCurrentTrack ? 'text-[#e2b170]' : 'text-stone-500'} group-hover:text-[#e2b170] pt-0.5 font-mono min-w-[20px]">
            ${(displayIdx + 1).toString().padStart(2, '0')}
          </span>
          <div class="flex-1 min-w-0">
            <p class="drawer-song-title font-serif ${isCurrentTrack ? 'text-[#e2b170]' : 'text-[#f5f0e1]'} group-hover:text-[#e2b170] truncate font-light text-base leading-snug">
              ${song.title}
            </p>
            <p class="drawer-song-artist font-sans text-xs text-stone-400/80 truncate mt-0.5">
              ${song.artist}
            </p>
          </div>
        </div>
        <label 
          class="exclude-checkbox-label relative flex items-center justify-center p-1.5 cursor-pointer group/checkbox select-none flex-shrink-0" 
          title="${isExcluded ? 'Re-include song' : 'Exclude song'}"
        >
          <input 
            type="checkbox" 
            class="exclude-song-checkbox sr-only" 
            data-youtube-id="${song.youtubeId}"
            ${isExcluded ? 'checked' : ''} 
          />
          <div class="checkbox-box w-4 h-4 rounded border ${isExcluded ? 'border-[#e2b170] bg-[#e2b170]/20' : 'border-stone-500/60 bg-black/20'} group-hover/checkbox:border-[#e2b170] transition-all flex items-center justify-center">
            <svg class="checkbox-check w-3 h-3 text-[#e2b170] ${isExcluded ? '' : 'hidden'}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>
            </svg>
          </div>
        </label>
      </div>
    `;
  }).join('');

  highlightActiveDrawerSong(currentIndex);

  const searchInput = document.getElementById('drawer-search-input') as HTMLInputElement | null;
  if (searchInput && searchInput.value) {
    searchInput.dispatchEvent(new Event('input'));
  }
}
