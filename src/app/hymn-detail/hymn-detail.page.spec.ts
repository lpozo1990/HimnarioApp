import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HymnDetailPage } from './hymn-detail.page';

describe('HymnDetailPage', () => {
  let component: HymnDetailPage;
  let fixture: ComponentFixture<HymnDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HymnDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HymnDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
