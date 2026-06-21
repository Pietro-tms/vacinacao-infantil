import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildrenPage } from './children.page';

describe('ChildrenPage', () => {
  let component: ChildrenPage;
  let fixture: ComponentFixture<ChildrenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
