import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarQrPage } from './confirmar-qr.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('ConfirmarQrPage', () => {
  let component: ConfirmarQrPage;
  let fixture: ComponentFixture<ConfirmarQrPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ ConfirmarQrPage ],
      imports:[IonicModule.forRoot(),
              AngularFireModule.initializeApp(environment.firebaseConfig),
              AngularFireAuthModule,],
              providers:[ModalController],
    });

    fixture = TestBed.createComponent(ConfirmarQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
