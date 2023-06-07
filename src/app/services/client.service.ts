import { Injectable } from '@angular/core';
import { ClientModel, LivreurModel, UsersModel } from '../model/Client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  AddClient(data: ClientModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl + '/AddClient', data, {
      headers: headers,
    });
  }
  GetClients(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/Clients', {
      headers: headers,
    });
  }
  UpdateClient(id: any, data: ClientModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl + '/Updateclient/' + id, data, {
      headers: headers,
    });
  }
  DeleteClient(id: any) {
    const headers = new HttpHeaders();
    return this.http.delete(environment.apiurl + '/Deleteclient/' + id, {
      headers: headers,
    });
  }
  AddLivreur(data: LivreurModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl + '/AddLivreur', data, {
      headers: headers,
    });
  }
  GetLivreur(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/Livreurs', {
      headers: headers,
    });
  }
  DeleteLivreur(id: any) {
    const headers = new HttpHeaders();
    return this.http.delete(environment.apiurl + '/Deletelivreur/' + id, {
      headers: headers,
    });
  }
  UpdateLivreur(id: any, data: LivreurModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl + '/Updatelivreur/' + id, data, {
      headers: headers,
    });
  }
  getUsersData() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/users', { headers: headers });
  }
  addUser(data: UsersModel): Observable<any> {
    return this.http.post(environment.apiurl + '/createusers', data);
  }
  deleteUser(id: any) {
    return this.http.delete(environment.apiurl + '/Deleteuser/' + id);
  }
  updateUser(id: any, data: UsersModel) {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl + '/Updateuser/' + id, data, {
      headers: headers,
    });
  }
  DeleteUser(id: any) {
    const headers = new HttpHeaders();
    return this.http.delete(environment.apiurl + '/Deleteuser/' + id, {
      headers: headers,
    });
  }
  LoginAuth(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl + '/LoginAuth', data, {
      headers: headers,
    });
  }
}
