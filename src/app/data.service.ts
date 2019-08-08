import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiClient: HttpClient) { }

  getUsers(){
    return this.apiClient.get('https://jsonplaceholder.typicode.com/users')
  }

  //Get the data for single user
  getUser(userId){
    return this.apiClient.get('https://jsonplaceholder.typicode.com/users/' + userId)
  }

  getPosts(){
    return this.apiClient.get('https://jsonplaceholder.typicode.com/posts')
  }
}
