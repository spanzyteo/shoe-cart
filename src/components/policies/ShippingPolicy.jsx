import { Box, Stack, Typography } from '@mui/material'

const ShippingPolicy = () => {
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
          Shipping Policy
        </Typography>
        <Stack
          display="flex"
          flexDirection="column"
          mt="1rem"
          gap={2}
          width={{ lg: '750px', xs: '350px', sm: '500px' }}
        >
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
          >
            Sneakers.Store Shipping and Returns Policy{' '}
          </Typography>
          <Typography fontSize="1.2rem" color="rgba(0, 0, 0, 0.75)">
            Last Updated: June 30, 2023{' '}
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            Please ensure that you have read and fully understood the terms and
            conditions laid out prior to purchasing any products from
            Gamechanger247, LLC d/b/a Sneakers.Store. The terms “MrBeast”,
            “Sneakers.Store”, “Shop Sneakers”, “we”, “us” and “our” refer to
            Gamechanger247, LLC d/b/a Sneakers.Store. By using sneakers.store
            (the “Site”) and placing an order, indicates you have accepted these
            online purchase, delivery and returns terms and conditions below.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>
              Online Purchase Terms & Conditions.
            </span>
            Our website service permits you to purchase products made available
            to you on this Site. These purchases can be made and are permitted
            strictly pursuant to the terms and conditions set out below and
            MrBeast.Store’s other applicable website policies that may be found
            here: mrbeast.store. Your purchase order cannot be accepted until
            payment in full for the products ordered has been received by us at
            which time a legally binding agreement on the terms set out herein
            will become effective. You may purchase products on the Site only
            for personal use and not for resale. By placing your order, you
            certify that you are purchasing products for personal use only and
            not for resale and you accept our General Terms and Conditions.
            MRBEAST RESERVES THE RIGHT TO REFUSE ORDERS FOR ANY REASON WITHOUT
            EXPLANATION.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            All credit/debit cardholders are subject to validation checks and
            authorization by the card issuer. If the issuer of your payment card
            refuses or does not for any reason, authorize payment to us, whether
            in advance or subsequent to a payment, or alerts us to a ‘warning
            that this transaction has been identified as potentially high risk’,
            we will not be liable for any delay or non-delivery.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Price & Payment</span>
            The price to be paid by you for any products will be as quoted on
            our Site except in cases of obvious error.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Delivery. {` `}</span>
            We do not accept any liability whatsoever for delayed delivery
            caused by any third parties. This includes delivery address
            mistakes, it is the buyer's responsibility to ensure the correct
            delivery details are present at the time of purchasing the goods. We
            can not take any responsibility for delayed orders to other
            countries outside the US due to individual custom regulations.
            Please check with your country’s customs office regarding the import
            of the products you wish to order. As the buyer, you are responsible
            for any import restrictions, prohibited import items, taxes,
            tariffs, fees and other duties. You are responsible for complying
            with international, national or local laws regulating the
            importation of products that you may purchase. If an order is
            refused delivery by customs due to unauthorized ingredients or
            contents, MrBeast is not responsible for any losses or costs
            incurred by you, the customer. You are solely responsible for any
            taxes, duties, levies, fees and/or any other expenses related to
            importing the products you order. If the shipment is abandoned or
            discarded by customs, you will not receive a refund or credit of any
            kind. By ordering you agree to these terms.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Returns. {` `}</span>
            You have 30 calendar days to return an item from the date you
            received it. To place a return, Please reach out to
            support@shopmrbeast.com with your order number and the products
            you'd like to exchange or return, and we'll take care of the rest.
            Just a reminder, if you are returning a gift, make sure to have the
            order number or email address of the person who purchased the order.
            If an item is returned due to defect or through any fault of
            MrBeast, we will refund your purchase price in full. To complete
            your return, we require a receipt or proof of purchase.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>
              Conditions Of Returns. {` `}
            </span>
            We accept most* products in brand-new condition (unworn and
            unwashed) which are returned to us within 30 days of delivery. You
            can pay the cost of return postage at your local post office, or we
            will generate a pre-paid label for you once we're in touch. If you
            choose the pre-paid return label, the cost of the label will be
            deducted from the refund you receive for the return.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Damaged Goods. {` `}</span>
            For an item that has arrived damaged, please reach out to
            support@sneakers.com within 7 days of receiving the damaged item and
            we’ll be happy to assist you.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Refunds. {` `}</span>
            Once your return is received and inspected, we will send you an
            email to notify you that we have received your returned item. We
            will also notify you of the approval or rejection of your refund. If
            you are approved, then your refund will be processed, and a credit
            will automatically be applied to your credit card or original method
            of payment, within 5-10 business days. The original shipping cost
            will not be refunded. If you haven’t received a refund yet, first
            check your bank account again. Then contact your credit card
            company, it may take some time before your refund is officially
            posted. Next contact your bank. There is often some processing time
            before a refund is posted. If you’ve done all of this and you still
            have not received your refund yet, please contact us at
            support@shopmrbeast.com.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Sale Items. {` `}</span>
            All sale items are final sale and cannot be refunded.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Exchanges. {` `}</span>
            Please notify us within 7 days of receipt of any damages. We will
            gladly replace damaged or broken items promptly. If you were gifted
            anything from MrBeast.Store, you can return your items for store
            credit. Please reach out to support@shopmrbeast.com with the
            gifter's first and last name, email address, and the products you’d
            like to return or exchange. The gifter won’t be notified of any
            changes.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Miscellaneous. {` `}</span>
            You will be subject to the policies in force at the time that you
            order products from us, unless any change to those policies is
            required to be made by law or governmental authority (in which case
            it will apply to orders previously placed by you), or if we notify
            you of the change to those policies before we send you the invoice.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            By clicking the accept button you acknowledge that you have read,
            understood and agree to be bound by this Purchase, Delivery and
            Returns Policy and all other applicable MrBeast polices, which are
            available at sneakers.store.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ShippingPolicy
