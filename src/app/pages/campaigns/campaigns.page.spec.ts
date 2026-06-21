import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampaignsPage } from './campaigns.page';

describe('CampaignsPage', () => {
  let component: CampaignsPage;
  let fixture: ComponentFixture<CampaignsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
