import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS, getStatusText } from 'angular-in-memory-web-api';
import { movies, moviesInDetail } from '../../mocks';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApiService implements InMemoryDbService {
  omdbMoviesResponse = {
    Response: 'True',
    Search: [...movies],
    totalResults: movies.length.toString()
  };

  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }

  get(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === '') {

      return reqInfo.utils.createResponse$(() => {

        let collection;
        if (reqInfo.query.get('i') && reqInfo.query.get('i').length) {
          collection = moviesInDetail.find(movie => movie.imdbID === reqInfo.query.get('i')[0]);
        } else {
          collection = this.omdbMoviesResponse;
        }

        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const data = collection;
        const options: ResponseOptions = data ?
          { body: dataEncapsulation ? { data } : data, status: STATUS.OK } :
          { body: { error: 'Could not get movies' }, status: STATUS.NOT_FOUND };

        return this.finishOptions(options, reqInfo);
      });
    }
    return undefined;
  }

  createDb() {
    return { movies: this.omdbMoviesResponse };
  }
}
