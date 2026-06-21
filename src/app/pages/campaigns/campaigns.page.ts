import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
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
import { CampaignService } from 'src/app/services/campaing.service';
import { Campaign } from 'src/app/models/campaign';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.page.html',
  styleUrls: ['./campaigns.page.scss'],
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
    IonButton,
    IonIcon,
    RouterLink
  ],
})
export class CampaignsPage implements OnInit {
campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService) {
    this.campaigns = this.campaignService.getActiveCampaigns();
  }

  ngOnInit() {
    
  }
}
