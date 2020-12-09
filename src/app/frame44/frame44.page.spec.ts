import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frame44Page } from './frame44.page';

describe('Frame44Page', () => {
  let component: Frame44Page;
  let fixture: ComponentFixture<Frame44Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame44Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frame44Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
