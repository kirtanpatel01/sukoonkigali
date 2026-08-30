import { SONGS } from '../../data/songs';
import { isSongExcluded } from './storage';

export function highlightActiveDrawerSong(index: number) {
  const counterEl = document.getElementById('drawer-counter-text');
  if (counterEl) {
    counterEl.innerText = `${index + 1} / ${SONGS.length} songs`;
  }

  let activeItemEl: HTMLElement | null = null;

  document.querySelectorAll('.drawer-song-item').forEach(item => {
    const btn = item as HTMLElement;
    const idx = parseInt(btn.getAttribute('data-index') || '-1', 10);
    const numEl = btn.querySelector('.drawer-song-num');
    const titleEl = btn.querySelector('.drawer-song-title');
    const displayPos = btn.getAttribute('data-queue-pos') || '0';
    const formattedNum = (parseInt(displayPos, 10) + 1).toString().padStart(2, '0');

    if (idx === index) {
      activeItemEl = btn;
      btn.classList.add('bg-white/[0.06]', 'border-[#e2b170]/30', 'shadow-sm');
      btn.classList.remove('border-transparent');

      if (numEl) {
        numEl.innerHTML = `
          <div class="active-eq-indicator flex items-end space-x-[2px] h-[13px] pt-[1px]" title="Now Playing">
            <span class="w-[3px] bg-[#e2b170] rounded-sm eq-bar-1 inline-block"></span>
            <span class="w-[3px] bg-[#e2b170] rounded-sm eq-bar-2 inline-block"></span>
            <span class="w-[3px] bg-[#e2b170] rounded-sm eq-bar-3 inline-block"></span>
          </div>
        `;
      }
      if (titleEl) {
        titleEl.classList.add('text-[#e2b170]', 'font-medium');
        titleEl.classList.remove('text-[#f5f0e1]', 'font-light');
      }
    } else {
      btn.classList.remove('bg-white/[0.06]', 'border-[#e2b170]/30', 'shadow-sm');
      btn.classList.add('border-transparent');

      if (numEl) {
        numEl.innerHTML = formattedNum;
        numEl.classList.remove('text-[#e2b170]');
        numEl.classList.add('text-stone-500');
      }
      if (titleEl) {
        titleEl.classList.remove('text-[#e2b170]', 'font-medium');
        titleEl.classList.add('text-[#f5f0e1]', 'font-light');
      }
    }
  });

  if (activeItemEl) {
    (activeItemEl as HTMLElement).scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
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
    const formattedNum = (displayIdx + 1).toString().padStart(2, '0');

    const numContent = isCurrentTrack ? `
      <div class="active-eq-indicator flex items-end space-x-[2px] h-[13px] pt-[1px]" title="Now Playing">
        <span class="w-[3px] bg-[#e2b170] rounded-sm eq-bar-1 inline-block"></span>
        <span class="w-[3px] bg-[#e2b170] rounded-sm eq-bar-2 inline-block"></span>
        <span class="w-[3px] bg-[#e2b170] rounded-sm eq-bar-3 inline-block"></span>
      </div>
    ` : formattedNum;

    return `
      <div 
        data-index="${songIndex}" 
        data-queue-pos="${displayIdx}"
        data-youtube-id="${song.youtubeId}"
        data-title="${song.title.toLowerCase()}"
        data-artist="${song.artist.toLowerCase()}"
        class="drawer-song-item w-full text-left transition-all duration-200 flex items-center justify-between px-3 py-2 rounded-xl border ${isCurrentTrack ? 'border-[#e2b170]/30 bg-white/[0.06] shadow-sm' : 'border-transparent hover:bg-white/[0.04]'} ${isExcluded ? 'opacity-35' : ''}"
      >
        <div class="flex items-center space-x-3 flex-1 min-w-0 drawer-song-click-area ${isExcluded ? 'pointer-events-none cursor-not-allowed select-none' : 'cursor-pointer'}">
          <span class="drawer-song-num font-sans text-xs ${isCurrentTrack ? 'text-[#e2b170]' : 'text-stone-500'} group-hover:text-[#e2b170] font-mono w-7 flex-shrink-0 flex items-center justify-start">
            ${numContent}
          </span>
          <div class="flex-1 min-w-0 pr-1">
            <p class="drawer-song-title font-serif ${isCurrentTrack ? 'text-[#e2b170] font-medium' : 'text-[#f5f0e1] font-light'} group-hover:text-[#e2b170] truncate text-base leading-snug">
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
