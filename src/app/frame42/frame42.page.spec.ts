import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frame42Page } from './frame42.page';

describe('Frame42Page', () => {
  let component: Frame42Page;
  let fixture: ComponentFixture<Frame42Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame42Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frame42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
