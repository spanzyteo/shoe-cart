import { Box, Stack, Typography } from '@mui/material'

const ResellerPolicy = () => {
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
          <Typography fontWeight={500} fontSize="3rem" display="flex">
            Reseller Policy
          </Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="column"
          mt="1rem"
          gap={2}
          width={{ lg: '750px', xs: '350px', sm: '500px' }}
          mb="-4rem"
        >
          <Typography
            fontSize="1rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
            mt="2rem"
          >
            Reseller Policy
          </Typography>
          <Typography fontSize="1.2rem" color="rgba(0, 0, 0, 0.75)" mt="1rem">
            Last Updated: June 30, 2023{' '}
          </Typography>
          <Typography
            fontSize="1rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            Sneakers.Store strives to ensure that our customers can enjoy our
            products without fear of adulteration, mishandling or spoliation.
            Our products are intended and designed for sale only through
            Sneakers.Store and our authorized third-party distributors and
            sellers (“Authorized Partners”). This Reseller Policy helps ensure
            our customers receive authentic products and quality service, and
            thereby protects Sneakers.Store’s brand in the marketplace. This
            Reseller Policy strictly prohibits the distribution or sale of
            Sneakers.Store products by unauthorized resellers. Unauthorized
            resale, even of seemingly genuine products, harms customers and
            Sneakers.Store. This Policy is intended to inform consumers and
            resellers, and explains the steps we take to deter unauthorized
            resellers.
          </Typography>
          <Typography
            fontSize="1rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Authorized Partners.</span>
            Authorized Partners are businesses we trust. They are authorized by
            contracts with MrBeast.Store to help make our products available in
            the marketplace. Authorized Partners must meet specific storage,
            safety, hygiene and recycling requirements, and similarly,
            MrBeast.Store must meet their standards as well. We use site visits,
            customer feedback and other measures to ensure those requirements
            are met. As of the Last Updated date above, our US Authorized
            Partners include: Beastables. When sold by an Authorized Partner,
            MrBeast.Store products stay within our chain of distribution.
            Maintaining our chain of distribution helps us ensure product
            authenticity, ingredient integrity and hygiene and safety standards.
            For these reasons, MrBeast.Store can only offer customer support for
            purchases from us and Authorized Partners.
          </Typography>
          <Typography
            fontSize="1rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Unauthorized Sellers.</span>
            An “unauthorized reseller” is anyone selling products labeled as
            Sneakers.Store products outside our website and our Authorized
            Partner channels. Unauthorized resellers may, among other things:
            (i) relabel and/or reseal other liquid products as MrBeast.Store
            products and/or in MrBeast.Store packaging, (ii) adulterate or
            dilute genuine Sneakers.Store products, (iii) resell genuine
            MrBeast.Store products that have been improperly stored or handled
            (such as by exposure to extended periods of freezing or high
            temperatures or UV light), (iv) resell genuine MrBeast.Store
            products marked as “not for retail sale” (or similar) or recalled
            from the marketplace, and/or (v) resell genuine MrBeast.Store
            products months or years after the date when an Authorized Reseller
            would no longer be permitted to sell them for quality, freshness or
            other reasons. In many cases, unauthorized resellers do not know
            whether the products they resell fall into the foregoing categories.
            Unauthorized resellers harm our mission and brand by compromising
            our ability to ensure that products with the MrBeast.Store name have
            been manufactured, shipped, stored and sold in accordance with our
            stringent integrity requirements. Our marketplace monitoring shows
            that sales of unauthorized products routinely generate
            disproportionate customer support inquiries and poorer customer
            feedback. This damages Sneakers.Store’s reputation for quality,
            integrity and satisfaction.
          </Typography>
          <Typography
            fontSize="1rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>
              Unauthorized resellers do not have our consent to sell merchandise
              labeled as Sneakers.Store products.
            </span>
            This includes anyone who obtains genuine MrBeast.Store products,
            even if purchased at clearance, and later resell them on
            marketplaces like eBay or Alibaba. MrBeast.Store products may not be
            sold by unauthorized resellers under any circumstances. Any sale or
            suspected sale of MrBeast.Store products by an unauthorized reseller
            will be reported to us and our marketplace-integrity partners.
          </Typography>
          <Typography
            fontSize="1rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            <span style={{ fontWeight: 'bold' }}>Sneakers.Store Action. </span>
            Because many resellers are not aware of the how their activities
            harm us and our customers, we strive to avoid adversarial language
            in our initial communications with them. Unauthorized resellers are
            generally first contacted by one of our marketplace-integrity
            partners. However, we take legal action whenever necessary to defend
            the integrity of our products and our customers’ satisfaction. If
            our initial efforts are ignored, MrBeast.Store will pursue formal
            actions against an unauthorized reseller. Formal actions may include
            the initiation of lawsuits and notifications to third parties
            enabling the unauthorized reseller, like marketplaces (which
            generally prohibit inaccurate or misleading information in product
            pages). These actions may result in financial penalties and
            suspension or loss of marketplace access.
          </Typography>
          <Typography
            fontSize="1rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
          >
            To notify us of a suspected unauthorized sale of Sneakers.Store
            products, please contact us at: support@sneakers.com
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ResellerPolicy
