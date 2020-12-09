import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frame48Page } from './frame48.page';

describe('Frame48Page', () => {
  let component: Frame48Page;
  let fixture: ComponentFixture<Frame48Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame48Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frame48Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
