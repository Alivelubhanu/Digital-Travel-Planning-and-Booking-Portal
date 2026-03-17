import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'info' | 'error';

export interface ToastPayload {
  title: string;
  message?: string;
  type?: ToastType;
  durationMs?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private hideTimer: number | null = null;
  readonly toast = signal<(ToastPayload & { type: ToastType; durationMs: number }) | null>(null);

  show(payload: ToastPayload) {
    const next = {
      title: payload.title,
      message: payload.message,
      type: payload.type ?? 'info',
      durationMs: payload.durationMs ?? 1600,
    };

    this.toast.set(next);

    if (this.hideTimer) {
      window.clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }

    this.hideTimer = window.setTimeout(() => {
      this.toast.set(null);
      this.hideTimer = null;
    }, next.durationMs);
  }

  clear() {
    if (this.hideTimer) {
      window.clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
    this.toast.set(null);
  }
}

