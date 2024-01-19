import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { AngularDelegate,ModalController } from '@ionic/angular';

describe('HelperService', () => {
  let service: HelperService;
  let modal:ModalController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HelperService,ModalController, AngularDelegate]
    });
    service = TestBed.inject(HelperService);
    modal = TestBed.inject(ModalController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
