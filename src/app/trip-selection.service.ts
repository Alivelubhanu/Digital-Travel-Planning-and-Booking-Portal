import { Injectable } from '@angular/core';
import type { Hotel } from '../assets/data/destinations-data';

export interface TripSelection {
  destinationName: string;
  stateName?: string;
  hotel?: Hotel;
}

@Injectable({ providedIn: 'root' })
export class TripSelectionService {
  private readonly storageKey = 'tripSelection';
  private selection: TripSelection | null = null;

  setSelection(selection: TripSelection) {
    this.selection = selection;
    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify(selection));
    } catch {
      // ignore storage errors
    }
  }

  getSelection(): TripSelection | null {
    if (this.selection) return this.selection;
    try {
      const raw = sessionStorage.getItem(this.storageKey);
      if (!raw) return null;
      this.selection = JSON.parse(raw) as TripSelection;
      return this.selection;
    } catch {
      return null;
    }
  }

  clearSelection() {
    this.selection = null;
    try {
      sessionStorage.removeItem(this.storageKey);
    } catch {
      // ignore storage errors
    }
  }
}

