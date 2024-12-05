import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicoProfesionalService } from '../../servicio/Tecnico_profesional/tecnico-profesional.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  tecnicoprofesional: any;
  constructor(private formBuild: FormBuilder, private solicitudFormularioSrv:SolicitudFormularioService, private tecnicoprofesionalSrv:TecnicoProfesionalService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  ngOnInit(){
    this.obtenerTecnicoProfesional();
  }
  obtenerTecnicoProfesional(){
    this.tecnicoprofesionalSrv.obtenertecnicoprofesional().subscribe(
      (response:any) => {        
        this.tecnicoprofesional = response.profesionales;          
        console.log(this.tecnicoprofesional);
      }, error => {
        console.log(error);
      }
    )
  }
  enviarDatos(){
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response:any) => {
        
        this.datos_formulario = response.solicitud_formulario
        console.log(this.datos_formulario);        
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },error => {
        console.log(error);
      }
    )   
  }


}