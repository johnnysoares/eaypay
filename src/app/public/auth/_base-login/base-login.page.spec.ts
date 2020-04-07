import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaseLoginPage } from './base-login.page';

describe('BaseLoginPage', () => {
  let component: BaseLoginPage;
  let fixture: ComponentFixture<BaseLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaseLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
