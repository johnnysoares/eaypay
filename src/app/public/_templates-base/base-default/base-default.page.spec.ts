import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaseDefaultPage } from './base-default.page';

describe('BaseDefaultPage', () => {
  let component: BaseDefaultPage;
  let fixture: ComponentFixture<BaseDefaultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDefaultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaseDefaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
