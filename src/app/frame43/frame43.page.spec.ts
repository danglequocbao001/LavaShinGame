import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frame43Page } from './frame43.page';

describe('Frame43Page', () => {
  let component: Frame43Page;
  let fixture: ComponentFixture<Frame43Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame43Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frame43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
