import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormbuktiPage } from './formbukti.page';

describe('FormbuktiPage', () => {
  let component: FormbuktiPage;
  let fixture: ComponentFixture<FormbuktiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormbuktiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
