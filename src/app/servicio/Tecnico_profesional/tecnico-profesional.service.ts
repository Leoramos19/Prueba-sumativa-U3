import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TecnicoProfesionalService {
  backend = environment.backend+"/profesional";
  constructor(private http: HttpClient) { }

  obtenertecnicoprofesional(){
    return this.http.get(`${this.backend}/obtener-profesionales`);
  }
}
