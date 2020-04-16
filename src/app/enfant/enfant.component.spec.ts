import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnfantComponent } from './enfant.component';

describe('LoginComponent', () => {
  let component: EnfantComponent;
  let fixture: ComponentFixture<EnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
