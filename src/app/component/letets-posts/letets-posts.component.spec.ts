import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetetsPostsComponent } from './letets-posts.component';

describe('LetetsPostsComponent', () => {
  let component: LetetsPostsComponent;
  let fixture: ComponentFixture<LetetsPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetetsPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetetsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
