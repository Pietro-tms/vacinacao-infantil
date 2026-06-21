import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Child } from 'src/app/models/child';
import { ChildService } from 'src/app/services/child.service';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonTitle,
    IonToolbar,
    IonBadge,
    RouterLink,
    IonButton,
    IonIcon,
    IonBadge,
    IonAvatar
  ],
})
export class ChildrenPage implements OnInit {
  children: Child[] = [];

  constructor(private childService: ChildService) {
    this.children = this.childService.getChildren();
    addIcons({
      arrowBack,
    });
  }

  statusColor(child: Child): string {
    switch (child.status) {
      case 'EM_DIA':
        return 'success';
      case 'ATRASADA':
        return 'danger';
      default:
        return 'medium';
    }
  }

  statusText(child: Child): string {
    switch (child.status) {
      case 'EM_DIA':
        return 'Em Dia';
      case 'ATRASADA':
        return 'Em atraso';
      default:
        return 'Desconhecido';
    }
  }

  

  ngOnInit() {}
}
