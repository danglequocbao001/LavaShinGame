import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Frame45Page } from './frame45.page';

describe('Frame45Page', () => {
  let component: Frame45Page;
  let fixture: ComponentFixture<Frame45Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frame45Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Frame45Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
