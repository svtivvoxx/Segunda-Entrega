
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: 'asignatura.page.html',
  styleUrls: ['asignatura.page.scss'],
})
export class AsignaturaPage {
  asignatura:any = [];
  pk:string="";
  constructor(private router: Router,private activatedRoute: ActivatedRoute,
    private storage: StorageService) {}

  ngOnInit(){
    this.pk = this.activatedRoute.snapshot.params["primaryKey"];
    this.obtenerAsignatura();
    console.log("PK", this.pk);
  }

  goBack() {

    this.router.navigateByUrl('/visualizar');

  }

  logout() {

    this.router.navigateByUrl('/home');
  }

  async obtenerAsignatura(){
    this.asignatura = (await this.storage.obtenerAsistencias()).filter((asis:any) => asis.primaryKey === this.pk);
    console.log("Asignatura", this.asignatura);
  }
}
