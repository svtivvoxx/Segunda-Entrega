import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaPage } from './asistencia.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('AsistenciaPage', () => {
  let component: AsistenciaPage;
  let fixture: ComponentFixture<AsistenciaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaPage ],
      imports:[IonicModule.forRoot(),
              AngularFireModule.initializeApp(environment.firebaseConfig),
              AngularFireAuthModule,],
              providers:[ModalController],
    });


    fixture = TestBed.createComponent(AsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
