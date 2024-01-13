import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumBlogsComponent } from './medium-blogs.component';

describe('MediumBlogsComponent', () => {
  let component: MediumBlogsComponent;
  let fixture: ComponentFixture<MediumBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
