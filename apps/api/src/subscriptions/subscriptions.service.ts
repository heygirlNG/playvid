import { Injectable } from '@nestjs/common';
import { subscriptionPlans } from '../data/mock-data';

@Injectable()
export class SubscriptionsService {
  getPlans() {
    return subscriptionPlans;
  }

  createCheckout(planId: string) {
    const plan = subscriptionPlans.find((item) => item.id === planId);

    if (!plan) {
      return {
        success: false,
        message: 'Plan not found',
      };
    }

    return {
      success: true,
      message: 'Checkout initialized for PLAYVID premium plan.',
      plan,
      paymentGateway: 'Paystack',
      redirectUrl: `https://paystack.com/pay/${plan.id}`,
    };
  }
}
