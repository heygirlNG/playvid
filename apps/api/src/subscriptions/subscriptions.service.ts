import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { subscriptionPlans } from '../data/mock-data';

@Injectable()
export class SubscriptionsService {
  constructor(private readonly configService: ConfigService) {}

  getPlans() {
    return subscriptionPlans;
  }

  createCheckout(planId: string, email = 'demo@playvid.africa') {
    const plan = subscriptionPlans.find((item) => item.id === planId);

    if (!plan) {
      return {
        success: false,
        message: 'Plan not found',
      };
    }

    const secretKey = this.configService.get<string>('PAYSTACK_SECRET_KEY');

    if (!secretKey) {
      return {
        success: false,
        message: 'Paystack secret key is not configured.',
      };
    }

    return axios
      .post(
        'https://api.paystack.co/transaction/initialize',
        {
          email,
          amount: Number(plan.amount) * 100,
          currency: 'NGN',
          callback_url: `${this.configService.get<string>('APP_URL') ?? 'http://localhost:3000'}/pricing`,
          metadata: {
            planId: plan.id,
            planName: plan.name,
            app: 'PLAYVID',
          },
        },
        {
          headers: {
            Authorization: `Bearer ${secretKey}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => ({
        success: true,
        message: 'Checkout initialized for PLAYVID premium plan.',
        plan,
        paymentGateway: 'Paystack',
        data: response.data,
      }))
      .catch((error) => ({
        success: false,
        message: 'Unable to initialize Paystack checkout.',
        error: error?.response?.data ?? error.message,
      }));
  }
}
