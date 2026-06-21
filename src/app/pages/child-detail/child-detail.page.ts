import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonProgressBar,
  IonItem,
  IonLabel,
  IonBadge,
  IonButtons,
} from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Child } from 'src/app/models/child';
import { VaccineRecord } from 'src/app/models/vaccine-record';

import { ChildService } from 'src/app/services/child.service';
import { VaccineRecordService } from 'src/app/services/vaccine-record.service';

import { addIcons } from 'ionicons';
import { checkmarkCircle, alertCircle, warning, medical } from 'ionicons/icons';

addIcons({
  checkmarkCircle,
  alertCircle,
  warning,
  medical,
});

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
  standalone: true,
  imports: [
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
    IonButton,
    IonIcon,
    IonProgressBar,
    IonItem,
    IonLabel,
    IonBadge,
    RouterLink,
    IonButtons
  ],
})
export class ChildDetailPage implements OnInit {
  childId!: number;
  child?: Child;

  vaccineRecords: VaccineRecord[] = [];

  constructor(
    private childService: ChildService,
    private vaccineRecordService: VaccineRecordService,
    private route: ActivatedRoute,
  ) {}

  getAppliedCount(): number {
    return this.vaccineRecords.filter((record) => record.status === 'APLICADA')
      .length;
  }

  getPendingCount(): number {
    return this.vaccineRecords.filter((record) => record.status === 'PENDENTE')
      .length;
  }

  getLateCount(): number {
    return this.vaccineRecords.filter((record) => record.status === 'ATRASADA')
      .length;
  }

  getVaccinationProgress(): number {
    const total = this.vaccineRecords.length;

    if (total === 0) {
      return 0;
    }

    const applied = this.getAppliedCount();

    return Math.round((applied / total) * 100);
  }

  ngOnInit() {
    this.childId = Number(this.route.snapshot.paramMap.get('id'));

    this.child = this.childService
      .getChildren()
      .find((child) => child.id === this.childId);

    this.vaccineRecords = this.vaccineRecordService.getByChildId(this.childId);
  }
}
