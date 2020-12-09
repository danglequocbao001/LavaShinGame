import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frame47Page } from './frame47.page';

describe('Frame47Page', () => {
  let component: Frame47Page;
  let fixture: ComponentFixture<Frame47Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame47Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frame47Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
