import { playSound, startProcessingLoop, stopProcessingLoop } from './sound';

export interface ModalElements {
  modal: HTMLElement | null;
  backdrop: HTMLElement | null;
  form?: HTMLFormElement | null;
  successContainer?: HTMLElement | null;
  submitBtn?: HTMLButtonElement | null;
  submitText?: HTMLElement | null;
  submitSpinner?: HTMLElement | null;
  errorBanner?: HTMLElement | null;
  errorBannerText?: HTMLElement | null;
}

export function openModalWithBackdrop(modal: HTMLElement | null, backdrop: HTMLElement | null, focusElement?: HTMLElement | null) {
  if (!modal || !backdrop) return;
  playSound('open');
  backdrop.classList.remove('opacity-0', 'pointer-events-none');
  backdrop.classList.add('opacity-100', 'pointer-events-auto');

  modal.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
  modal.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');

  if (focusElement) {
    setTimeout(() => focusElement.focus(), 100);
  }
}

export function closeModalWithBackdrop(modal: HTMLElement | null, backdrop: HTMLElement | null, onClosed?: () => void) {
  stopProcessingLoop();
  if (!modal || !backdrop) return;
  playSound('close');
  modal.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
  modal.classList.add('opacity-0', 'scale-95', 'pointer-events-none');

  backdrop.classList.remove('opacity-100', 'pointer-events-auto');
  backdrop.classList.add('opacity-0', 'pointer-events-none');

  if (onClosed) {
    setTimeout(onClosed, 350);
  }
}

export function bindInputTypingSound(formSelector: string) {
  document.querySelectorAll(`${formSelector} input[type="text"], ${formSelector} textarea`).forEach(input => {
    input.addEventListener('input', () => playSound('typing', { volume: 0.08 }));
  });
}

export async function submitFormspreeForm(
  form: HTMLFormElement,
  elements: {
    submitBtn?: HTMLButtonElement | null;
    submitText?: HTMLElement | null;
    submitSpinner?: HTMLElement | null;
    errorBanner?: HTMLElement | null;
    errorBannerText?: HTMLElement | null;
    successContainer?: HTMLElement | null;
  },
  defaultErrorMsg: string
): Promise<boolean> {
  startProcessingLoop();
  if (elements.submitBtn) elements.submitBtn.disabled = true;
  if (elements.submitText) elements.submitText.innerText = "Sending...";
  if (elements.submitSpinner) elements.submitSpinner.classList.remove('hidden');

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    stopProcessingLoop();
    if (response.ok) {
      playSound('success');
      form.classList.add('hidden');
      if (elements.successContainer) elements.successContainer.classList.remove('hidden');
      return true;
    } else {
      playSound('error');
      const data = await response.json().catch(() => ({}));
      let msg = defaultErrorMsg;
      if (data && data.errors && data.errors.length > 0) {
        msg = data.errors.map((err: any) => err.message).join(', ');
      }
      if (elements.errorBannerText) elements.errorBannerText.innerText = msg;
      if (elements.errorBanner) elements.errorBanner.classList.remove('hidden');
      return false;
    }
  } catch (err) {
    stopProcessingLoop();
    playSound('error');
    if (elements.errorBannerText) elements.errorBannerText.innerText = "Network error. Please check your connection and try again.";
    if (elements.errorBanner) elements.errorBanner.classList.remove('hidden');
    return false;
  } finally {
    stopProcessingLoop();
    if (elements.submitBtn) elements.submitBtn.disabled = false;
    if (elements.submitText) elements.submitText.innerText = "Send it our way";
    if (elements.submitSpinner) elements.submitSpinner.classList.add('hidden');
  }
}
