import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaPage } from './asignatura.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('AsignaturaPage', () => {
  let component: AsignaturaPage;
  let fixture: ComponentFixture<AsignaturaPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AsignaturaPage],
      imports:[IonicModule.forRoot(),
              AngularFireModule.initializeApp(environment.firebaseConfig),
              AngularFireAuthModule,],
              providers:[ModalController],
    });


    fixture = TestBed.createComponent(AsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
