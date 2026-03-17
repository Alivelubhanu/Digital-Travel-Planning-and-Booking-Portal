import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrls: ['./toast.css'],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  toast = computed(() => this.toastService.toast());
}

