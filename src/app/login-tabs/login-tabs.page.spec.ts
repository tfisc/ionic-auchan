import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTabsPage } from './login-tabs.page';

describe('TabsPage', () => {
  let component: LoginTabsPage;
  let fixture: ComponentFixture<LoginTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
