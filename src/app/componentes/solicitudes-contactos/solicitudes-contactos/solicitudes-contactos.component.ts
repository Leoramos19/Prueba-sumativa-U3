import { Component } from '@angular/core';
import { SolicitudFormularioService } from '../../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicoProfesionalService } from '../../../servicio/Tecnico_profesional/tecnico-profesional.service';

@Component({
  selector: 'app-solicitudes-contactos',
  templateUrl: './solicitudes-contactos.component.html',
  styleUrl: './solicitudes-contactos.component.css'
})
export class SolicitudesContactosComponent {

  solicitudes_formulario:any;
  datosModal = {
    nombre:String,
    mensaje:String
  }

  constructor(private solicitudFormularioSrv:SolicitudFormularioService, private tecnicoprofesionalSrv:TecnicoProfesionalService){
  }

  ngOnInit(){ 
    this.obtenerTecnicoProfesional
  }

  obtenerTecnicoProfesional(){
    this.tecnicoprofesionalSrv.obtenertecnicoprofesional().subscribe(
      (response:any) => {        
        this.tecnicoprofesionalSrv = response.profesionales;          
        console.log(this.tecnicoprofesionalSrv);
      }, error => {
        console.log(error);
      }
    )
  }

  verMensajeEnModal(solicitudContacto:any){
    this.datosModal.nombre = solicitudContacto.nombre;
    this.datosModal.mensaje = solicitudContacto.mensaje;
  }

  eliminarSolicitudFormulario(_id:string){
    this.solicitudFormularioSrv.eliminarSolicitudesFormulario(_id).subscribe(
      (response:any) => {        
        if(response.profesional.deletedCount == 1){
          console.log(response.profesional);
          alert("Registro eliminado correctamente");
          this.obtenerSolicitudesFormulario()
        }else{
          alert("No se pudo eliminar, algo paso");
        }
      }, error => {
        console.log(error);
      }
    )
  }
}
