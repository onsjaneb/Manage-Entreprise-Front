import { Injectable } from '@angular/core';
import {
  CaisseModel,
  ClientModel,
  LivreurModel,
  RecuModel,
  UsersModel,
  Validation,
} from '../model/Client.model';
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
  AddRecu(data: RecuModel) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl + '/AddRecu', data, {
      headers: headers,
    });
  }
  GetRecu(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/Recus', {
      headers: headers,
    });
  }
  updateRecu(id: any, data: RecuModel) {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl + '/UpdateRecu/' + id, data, {
      headers: headers,
    });
  }
  DeleteRecu(id: any) {
    const headers = new HttpHeaders();
    return this.http.delete(environment.apiurl + '/DeleteRecu/' + id, {
      headers: headers,
    });
  }
  ToatlRecuTod(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/TotalRecuTod', {
      headers: headers,
    });
  }
  SumCommission(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/SumCommission', {
      headers: headers,
    });
  }
  SumPartLivreur(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/SumPartLivreur', {
      headers: headers,
    });
  }
  SumPartEntreprise(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/SumPartEntreprise', {
      headers: headers,
    });
  }
  SumRecuNet(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/SumRecuNet', {
      headers: headers,
    });
  }
  SumRetour(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/SumRetour', {
      headers: headers,
    });
  }
  SumAvance(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/SumAvance', {
      headers: headers,
    });
  }
  SumLivreur(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/SumLivreur', {
      headers: headers,
    });
  }
  AddCaisse(data: CaisseModel) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl + '/CreateCaisse', data, {
      headers: headers,
    });
  }
  GetCaisse(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/Caisses', {
      headers: headers,
    });
  }
  AddValidation(data: Validation) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl + '/CreateValidation', data, {
      headers: headers,
    });
  }
  GetValidation(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/Validation', {
      headers: headers,
    });
  }
  Getstats() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/StatsC', {
      headers: headers,
    });
  }
  Getstats1() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/StatsC1', {
      headers: headers,
    });
  }
  Getstats2() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/StatsC2', {
      headers: headers,
    });
  }
  Getstats3() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/StatsC3', {
      headers: headers,
    });
  }
  Getstats4() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/StatsC4', {
      headers: headers,
    });
  }
  Getstats5() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/StatsC5', {
      headers: headers,
    });
  }
  Getstats6() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/StatsC6', {
      headers: headers,
    });
  }
  GetClientFidele() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/ClientFidele', {
      headers: headers,
    });
  }
  GetClientMoyen() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/ClientMoyen', {
      headers: headers,
    });
  }
  GetClientNouveau() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/ClientNouveau', {
      headers: headers,
    });
  }
  GetClientGentil() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/ClientGentil', {
      headers: headers,
    });
  }
  ClientMechant() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/ClientMechant', {
      headers: headers,
    });
  }
  ClientNormal() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/ClientNormal', {
      headers: headers,
    });
  }
}
