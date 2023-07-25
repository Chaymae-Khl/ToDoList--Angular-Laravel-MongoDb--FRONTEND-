import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponenentComponent } from './list-componenent.component';

describe('ListComponenentComponent', () => {
  let component: ListComponenentComponent;
  let fixture: ComponentFixture<ListComponenentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponenentComponent]
    });
    fixture = TestBed.createComponent(ListComponenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
