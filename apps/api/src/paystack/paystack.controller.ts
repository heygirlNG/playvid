import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaystackService } from './paystack.service';

@Controller('paystack')
export class PaystackController {
  constructor(private readonly paystackService: PaystackService) {}

  @Get('config')
  getConfig() {
    return {
      publicKey: this.paystackService.getPublicKey(),
      currency: 'NGN',
      enabled: !!this.paystackService.getPublicKey(),
    };
  }

  @Post('verify')
  async verifyTransaction(@Body() body: { reference: string }) {
    if (!body?.reference) {
      return {
        success: false,
        message: 'Reference is required',
      };
    }

    const result = await this.paystackService.verifyTransaction(body.reference);
    return result;
  }
}
