import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsWebDesignComponent } from './ns-web-design.component';

describe('NsWebDesignComponent', () => {
  let component: NsWebDesignComponent;
  let fixture: ComponentFixture<NsWebDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NsWebDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NsWebDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
