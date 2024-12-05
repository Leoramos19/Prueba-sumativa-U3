import { Component } from '@angular/core';
import { ServicioDeLaEmpresaService } from '../../servicios/Servicio_de_la_Empresa/servicio-de-la-empresa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  ServicioEmpresa:any;
  constructor( private ObtenerservicioSrv:ServicioDeLaEmpresaService){}
  ngOnInit(){
    this.obtenerServiciodelaEmpresa();
  }
  obtenerServiciodelaEmpresa(){
    this.ObtenerservicioSrv.obtenerServiciodelaEmpresa().subscribe(
      (response:any) => {        
        this.ServicioEmpresa = response.profesionales;          
        console.log(this.ServicioEmpresa);
      }, error => {
        console.log(error);
      }
    )
  }
}
