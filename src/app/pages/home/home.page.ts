import { Component } from '@angular/core';
import { ChildService } from '../../services/child.service';
import { Child } from '../../models/child';
import { Campaign } from '../../models/campaign';
import { Vaccine } from '../../models/vaccine';
import { CampaignService } from '../../services/campaing.service';
import { VaccineService } from '../../services/vaccine.service';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import {
  people,
  medical,
  megaphone,
  arrowBack,
  warning,
  checkmarkCircle,
  alertCircle,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  people,
  medical,
  megaphone,
  arrowBack,
  warning,
  checkmarkCircle,
  alertCircle,
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    RouterLink,
    IonIcon,
  ],
})
export class HomePage {
  children: Child[] = [];
  campaigns: Campaign[] = [];
  vaccines: Vaccine[] = [];

  constructor(
    private childService: ChildService,
    private campaignService: CampaignService,
    private vaccineService: VaccineService,
  ) {
    this.children = this.childService.getChildren();
    this.campaigns = this.campaignService.getActiveCampaigns();
    this.vaccines = this.vaccineService.getVaccines();
  }
}
