import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frame46Page } from './frame46.page';

describe('Frame46Page', () => {
  let component: Frame46Page;
  let fixture: ComponentFixture<Frame46Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame46Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frame46Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
