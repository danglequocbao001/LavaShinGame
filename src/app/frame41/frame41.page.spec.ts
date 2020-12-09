import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frame41Page } from './frame41.page';

describe('Frame41Page', () => {
  let component: Frame41Page;
  let fixture: ComponentFixture<Frame41Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame41Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frame41Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
