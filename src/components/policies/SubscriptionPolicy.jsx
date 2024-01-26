import { Box, Stack, Typography } from '@mui/material'

const SubscriptionPolicy = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt="2rem"
      justifyContent="center"
      alignItems="center"
    >
      <Stack display="flex" flexDirection="column">
        <Typography
          fontWeight={600}
          fontSize="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Subscription Policy
        </Typography>
        <Stack
          display="flex"
          flexDirection="column"
          mt="1rem"
          gap={2}
          width={{ lg: '750px', xs: '350px', sm: '500px' }}
          mb="-4rem"
        >
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="-1rem"
            fontWeight={600}
          >
            Cancellation Policy
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="-1rem"
          >
            Some items in our store may be offered to you as a subscription, a
            pre-order or try before you buy. This cancellation policy lays out
            how you can change or cancel these kinds of purchases.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="-1rem"
            fontWeight={600}
          >
            Subscriptions
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="-1rem"
          >
            When you purchase a subscription you'll receive repeat deliveries.
            These are based on the subscription duration and frequency that you
            select. Your payment details will be stored securely and you'll be
            charged for each of these deliveries, unless you choose to pay in
            advance. Some subscriptions may auto-renew at the end of their
            duration. If you don't want to renew a subscription you can cancel
            it. If you want to cancel or change your subscription, you can do it
            at any time. Your order confirmation emails have links to your
            order. You can manage your subscription from there. See our returns
            policy for more details on returns and refunds.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="-1rem"
            fontWeight={600}
          >
            Pre-orders
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="-1rem"
          >
            When you purchase a pre-order, you are buying an out-of-stock or
            soon-to-be-available product not yet in inventory. We may collect no
            payment or a partial deposit at checkout, store your payment method,
            then fulfill and charge the full or remaining payment at a future
            date. You can cancel a partially paid pre-order order that has not
            yet been fulfilled. If the order has been fulfilled, then you can't
            cancel the order, but you can request a full or partial refund. See
            our returns policy for more details on returns and refunds.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="-1rem"
            fontWeight={600}
          >
            Try before you buy
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="-1rem"
          >
            When you purchase a try before you buy item, we authorize your
            payment method before fulfilling the order. You will have a certain
            amount of time to decide if you want to keep the item. Once the time
            period has passed, if you have not returned the item, we will charge
            your payment method for the full amount.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default SubscriptionPolicy
