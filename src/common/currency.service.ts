import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { Currency } from './entities/currency.entity';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly httpService: HttpService,
    @Inject('CURRENCY_REPOSITORY')
    private currencyRepository: typeof Currency,
  ) {}

  getDailyCurrencies() {
    return this.httpService
      .get('https://api.nbp.pl/api/exchangerates/tables/C/today?format=json')
      .pipe(
        map((response) => {
          this.currencyRepository.bulkCreate(response.data[0].rates, {
            updateOnDuplicate: ['bid', 'ask', 'updatedAt'],
          });
          return response.data[0].rates;
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
