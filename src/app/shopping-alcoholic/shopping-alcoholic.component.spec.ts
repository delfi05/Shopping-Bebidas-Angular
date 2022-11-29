import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingAlcoholicComponent } from './shopping-alcoholic.component';

describe('ShoppingAlcoholicComponent', () => {
  let component: ShoppingAlcoholicComponent;
  let fixture: ComponentFixture<ShoppingAlcoholicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingAlcoholicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingAlcoholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
