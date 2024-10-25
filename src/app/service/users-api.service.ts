import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CacheUsersService } from './cache-users.service';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient, private cache: CacheUsersService) {}

  getUsers(
    page: number,
    perPage: number,
    searchTerm?: string
  ): Observable<UsersResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    const dataCache = this.cache.get(
      `users-page:${page}-prePage:${perPage}-search:${searchTerm}`
    );
    if (dataCache) return dataCache;

    const data = this.http.get<UsersResponse>(this.apiUrl, { params });
    this.cache.set(
      `users-page:${page}-prePage:${perPage}-search:${searchTerm}`,
      data
    );
    return data;
  }

  getUserById(userId: string): Observable<User> {
    const dataCache = this.cache.get(`user-id:${userId}`);
    if (dataCache) return dataCache;
    const data = this.http
      .get<{ data: User }>(`${this.apiUrl}/${userId}`)
      .pipe(map((response) => response.data));
    return data;
  }
}
