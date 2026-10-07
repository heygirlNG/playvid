import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get('plans')
  getPlans() {
    return this.subscriptionsService.getPlans();
  }

  @Post('checkout')
  createCheckout(
    @Body() body: { planId: string; email?: string },
  ) {
    return this.subscriptionsService.createCheckout(body.planId, body.email);
  }

  @Get('status/:planId')
  getStatus(@Param('planId') planId: string) {
    const plans = this.subscriptionsService.getPlans();
    const selected = plans.find((plan) => plan.id === planId);

    return {
      plan: selected ?? null,
      adsBlocked: planId === 'premium' || planId === 'family',
      status: selected ? 'active' : 'not_found',
    };
  }
}
