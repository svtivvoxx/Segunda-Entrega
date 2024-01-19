import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraPage } from './camara.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ CamaraPage ],
      imports:[IonicModule.forRoot(),
              AngularFireModule.initializeApp(environment.firebaseConfig),
              AngularFireAuthModule,],
              providers:[ModalController],
    });

    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
