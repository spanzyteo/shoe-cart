import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Faq = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mt="2rem"
      justifyContent="center"
      alignItems="center"
    >
      <Stack display="flex" flexDirection="column">
        <Stack
          display="flex"
          flexDirection="column"
          mt="1rem"
          gap={2}
          width={{ lg: '750px', xs: '350px', sm: '500px' }}
        >
          <Typography fontWeight={600} fontSize="3rem" display="flex">
            FAQs
          </Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="column"
          mt="1rem"
          gap={2}
          width={{ lg: '750px', xs: '350px', sm: '500px' }}
        >
          <Typography fontSize="1.1rem" mt="2rem">
            SHIPPING AND DELIVERY
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
          >
            WHERE IS MY ORDER/WHEN WILL I RECEIVE MY ITEMS?
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Please note orders including items from both in-stock and pre-order
            will ship separately. Keep your eyes peeled for two tracking
            numbers!
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Once your order has been placed, the order will be processed within
            24-48 hours. Once your order is prepared for shipment and leaves our
            warehouse, the shipping time begins.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Orders placed before 12pm will ship within 24 hours. Orders placed
            after 12pm will ship within 24-48 hours.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            To keep you informed about your order, we aim to provide you with a
            tracking number within 48 hours after your order has been prepared
            for shipping. This tracking number will enable you to monitor the
            progress of your package. Should you have any inquiries or require
            assistance during this process, please don't hesitate to reach out
            to our support team.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Please be sure to check the product description for estimated start
            ship dates.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Once shipped, US shipments (depending on shipping method) will take
            2-9 business days and international shipments will take 4-20
            business days to be delivered.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Orders being shipped to South America, Middle East and Asia may take
            1-3 months to be delivered once shipped.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
            mt="2rem"
          >
            WHAT IS A PRE-ORDER/BACKORDERED PRODUCT?
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            A pre-order is designed to reduce inventory waste and to manufacture
            to demand, in addition to that pre-orders may also be offered when
            products are in transit to our warehouses so we can prepare orders
            as soon as they arrive and ship them to you.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            A backorder is a product that has been reordered to be manufactured
            after the existing stock has sold out.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
            mt="2rem"
          >
            DO YOU SHIP INTERNATIONALLY
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            We ship to most countries around the world with the exception of
            limited countries based on international agreements and freight
            forwarder restrictions. If we are unable to ship to your country,
            you will be notified at checkout and your purchase will be blocked.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
            mt="2rem"
          >
            HOW MUCH DOES SHIPPING COST
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Shipping costs are displayed on the checkout page and are calculated
            based on the freight forwarder’s rates and depending on weight,
            shipping method and destination.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
            mt="2rem"
          >
            WILL I HAVE TO PAY TAXES/IMPORT DUTIES IN MY COUNTRY?
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Depending on the service requested at checkout MrBeast.Store now
            offers DDP shipping which means your price now includes duties,
            taxes and freight. Be sure to select this service for a faster and
            more convenient purchasing experience.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Import duties are taxes collected on imports and some exports by a
            country's customs authorities. A good's value will usually dictate
            the import duty.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            While the cost of shipment for your package is included in your
            order total, you may be subject to taxes/import duties for your
            package upon arrival to your destination country.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            We do everything on our end to declare customs (value, items,
            weight, material) to ensure that there is no added customs charge
            when your order arrives to your country. Most of our packages ship
            without any additional fees or charges, but each country has a
            unique customs process and occasionally random packages will be
            pulled for inspection. We cannot control if your order gets pulled
            and there are additional fees during the customs process in your
            country. We do our due diligence on our end to prevent this from
            happening, but unfortunately we are not in control of each order and
            it is up to your country's postal service how your order is handled.
            We recommend speaking with your local post office if you have any
            specific questions regarding your country's customs process.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Unpaid duty and tax orders will be considered abandoned and not
            liable for a refund.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
            mt="2rem"
          >
            CAN I UPDATE MY SHIPPING ADDRESS AFTER I HAVE ORDERED?
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            If you have incorrectly formatted or entered your address, please
            contact customer support on info@shopmrbeast.com immediately with
            your order number and correct shipping address. If you fail to
            communicate a shipping address change before your order is shipped
            you will have to contact the courier to reroute your order.
            MrBeast.Store is not responsible for shipment to an incorrect
            address if we are not provided the information prior to dispatch.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            If your package fails to be delivered due to an insufficient
            delivery address the goods will be returned to us. Please contact us
            if this occurs and we will organize a reshipment to an updated
            shipping address at an additional shipping cost.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
            mt="2rem"
          >
            HOW DO I TRACK MY ORDER
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Tracking information will be sent to the contact information you
            provide us. This will be sent via email/sms when your order has been
            fulfilled. For specific tracking details or if your delivery is
            late, you can contact the carrier directly for the most up-to-date
            information, including any carrier or regional delays.
          </Typography>
          <Typography fontSize="1.1rem" mt="2rem">
            EXCHANGES AND RETURNS
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
          >
            CAN I EXCHANGE ITEMS ONCE I’VE PLACED MY ORDER?
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Sneakers.Store now offers exchanges through our return portal
            providing goods are returned in their original packaging and are
            unworn.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Sneakers.Store now offers exchanges through our return portal
            providing goods are returned in their original packaging and are
            unworn.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Return shipping costs are not included and an additional cost that
            you will need to pay, please consider the environment when
            purchasing and returning products as they carry a large carbon
            footprint.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
          >
            DOES SNEAKERS SHOP ACCEPT RETURNS?
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Returns are accepted through our{' '}
            <Link
              to="/apps/redo/returns-portal"
              style={{ color: 'rgba(0, 0, 0, 0.75)' }}
            >
              return portal
            </Link>
            {` `}
            providing goods are returned in their original packaging and are
            unworn.
          </Typography>
          <Typography fontSize="1.1rem" mt="2rem">
            PAYMENT
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
          >
            WHAT PAYMENT METHODS ARE ACCEPTED?
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            We accept all major credit cards including Visa, Mastercard,
            American Express, and Discover. We also accept PayPal and prepaid
            gift cards from all major banks.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            You may also select alternative payment options such as Klarna and
            Shop Pay,
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            At this time, we do not accept any form of cryptocurrency.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
          >
            IS MY PAYMENT SECURE
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Yes, your payment is secure. Our website uses the most up-to-date
            SSL encryption security techniques. The payment provider we work
            with, Stripe, is Level 1 PCI certified (the highest level
            attainable) and uses the most up-to-date SSL encryption to ensure
            all payments are secure.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Faq
