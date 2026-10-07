import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class PaystackService {
  constructor(private readonly configService: ConfigService) {}

  getPublicKey(): string {
    return this.configService.get<string>('NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY') ?? this.configService.get<string>('PAYSTACK_PUBLIC_KEY') ?? '';
  }

  async verifyTransaction(reference: string) {
    const secretKey = this.configService.get<string>('PAYSTACK_SECRET_KEY');

    if (!secretKey) {
      return {
        success: false,
        message: 'Paystack secret key is not configured.',
      };
    }

    try {
      const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Unable to verify transaction with Paystack.',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}
