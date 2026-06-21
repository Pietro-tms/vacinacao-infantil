import { Injectable } from '@angular/core';
import { CAMPAIGNS } from '../data/campaign.mock';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  getActiveCampaigns() {
    return CAMPAIGNS.filter(
      campaign => campaign.active
    );
  }

}