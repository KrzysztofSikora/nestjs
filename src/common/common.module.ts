import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CommonService } from './common.service';
import { commonProviders } from './common.providers';

@Module({
  imports: [HttpModule],
  providers: [CommonService, CurrencyService, ...commonProviders],
  exports: [HttpModule],
})
export class CommonModule {}
