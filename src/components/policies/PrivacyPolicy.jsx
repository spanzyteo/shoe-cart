import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
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
          Privacy policy
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
            Sneakers.Store
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            fontWeight={600}
          >
            Privacy policy
          </Typography>
          <Typography fontSize="1.2rem" color="rgba(0, 0, 0, 0.75)">
            Effective Date: April 30, 2024
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Privacy is important to Sneakers store. The following describes the
            information we collect and the ways we use that information. By
            using sneakers.store (the “Website”) and engaging with our services
            and products (collectively, the “Services”), you are consenting to
            the collection, use, sharing, and storage of your personal
            information, as described below. This Privacy Policy supplements and
            is incorporated into our Terms of Service which, together with this
            Privacy Policy and our other online policies, govern your use of the
            Services. We have endeavored to make this Privacy Policy as clear as
            possible. If, however, you have any questions, comments or concerns
            about this Privacy Policy, please send us an email at
            support@sneakersstore.com.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            The terms “Sneakers” or “Sneakers.Store” or “us” or “we” or “our”
            refer to Gamechanger247, LLC d/b/a Sneakers.Store the owner of the
            Services. The terms “you” or “your” refer to the user or viewer of
            the Services.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
          >
            1.{' '}
            <span style={{ fontWeight: 'bold' }}>Information We Collect.</span>{' '}
            We collect information from those who visit and interact with our
            Services. This information may include:
          </Typography>
          <Stack>
            <Typography
              fontSize="1.2rem"
              color="rgba(0, 0, 0, 0.75)"
              lineHeight="2rem"
              ml="1rem"
            >
              <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>{' '}
              full name, email address, physical address, and phone number;
            </Typography>
            <Typography
              fontSize="1.2rem"
              color="rgba(0, 0, 0, 0.75)"
              lineHeight="2rem"
              ml="1rem"
            >
              <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>{' '}
              credit card and payment information; and{' '}
            </Typography>
            <Typography
              fontSize="1.2rem"
              color="rgba(0, 0, 0, 0.75)"
              lineHeight="2rem"
              ml="1rem"
            >
              <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>{' '}
              interests, comments, requests, and other information you may
              offer.
            </Typography>
          </Stack>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="1rem"
          >
            The categories of personal information we collect depend on whether
            you are a customer, user, or visitor, and the requirements of
            then-applicable law (collectively, “Personal Information”). We may
            also automatically collect other information as you interact with
            the Services. We may collect and maintain device, browser, and
            operating system information, your Internet Protocol (“IP”) address,
            Services visits, page response times, download errors, length of
            visits to certain pages, and page interaction information (such as
            swipes, share lists, and recommendations). We also may automatically
            collect information from cookies that are placed throughout the
            Services. Generally, this information is collected in aggregate
            form, which means we cannot personally identify you through these
            mechanisms. We may also automatically collect other information as
            you interact with the Services. We may collect and maintain device,
            browser, and operating system information, your Internet Protocol
            (“IP”) address, Services visits, page response times, download
            errors, length of visits to certain pages, and page interaction
            information (such as swipes, share lists, and recommendations). We
            also may automatically collect information from cookies that are
            placed throughout the Services. Generally, this information is
            collected in aggregate form, which means we cannot personally
            identify you through these mechanisms. The above information may
            also be collected by third-party service providers, such as
            Shopify/or any other Third Party Entity.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            fontWeight={600}
          >
            1. We collect certain information using the following technologies:
          </Typography>
          <Stack>
            <Typography
              fontSize="1.2rem"
              color="rgba(0, 0, 0, 0.75)"
              lineHeight="2rem"
              ml="1rem"
            >
              <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>{' '}
              “Cookies” are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, visit
              {` `}
              <Link
                to="http://www.allaboutcookies.org"
                style={{ color: 'rgba(0, 0, 0, 0.75)' }}
              >
                http://www.allaboutcookies.org.
              </Link>
            </Typography>
            <Typography
              fontSize="1.2rem"
              color="rgba(0, 0, 0, 0.75)"
              lineHeight="2rem"
              ml="1rem"
            >
              <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>{' '}
              “Log files” track actions occurring on the Site, and collect data
              including your IP address, browser type, Internet service
              provider, referring/exit pages, and date/time stamps.
            </Typography>
            <Typography
              fontSize="1.2rem"
              color="rgba(0, 0, 0, 0.75)"
              lineHeight="2rem"
              ml="1rem"
            >
              <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>{' '}
              “Web beacons”, “tags”, and “pixels” are electronic files used to
              record information about how you browse the Site.
            </Typography>
          </Stack>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="2rem"
          >
            1.{' '}
            <span style={{ fontWeight: 'bold' }}>
              How do we use your personal information?
            </span>{' '}
            We use this information to facilitate the provision of your
            requested services, such as to fulfill orders. We also use this
            information to track user behavior, improve our products and
            services, communicate with you regarding the Services, and generate
            statistics and trend data for internal and external business
            purposes, such as marketing campaigns and social media advertising.
            We use this information to facilitate the provision of your
            requested services, such as to fulfill orders. We also use this
            information to track user behavior, improve our products and
            services, communicate with you regarding the Services, and generate
            statistics and trend data for internal and external business
            purposes, such as marketing campaigns and social media advertising.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
          >
            1.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Sharing your Personal Information.
            </span>{' '}
            We do not share your information for commercial purposes. However,
            we may share your information in the following ways:
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
          >
            <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>{' '}
            With service providers: We may share your information with third
            parties that perform tasks on our behalf and that help us better
            provide our Services to you.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
          >
            <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>
            To protect us, our users, or to law enforcement officials: We may
            share your information to comply with legal processes (including to
            comply with the law, to enforce our Terms of Service, or to respond
            to subpoenas, discovery requests, or similar legal processes or
            proceedings), cooperate with law enforcement or when we believe it
            is prudent to share information with legal authorities, and
            investigate and prevent fraud or imminent harm to you, our users, or
            to us. We may also share your information to ensure the security of
            our network and services.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
          >
            <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>
            In the event of a business transfer: We may share your information
            with another entity as a result of a corporate sale, merger,
            consolidation, asset sale, or in the unlikely event of bankruptcy or
            we go out of business. User information is generally considered an
            asset that is transferred in one of these types of corporate
            transactions.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
          >
            <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>•</span>
            With your consent: We may also share your information in other
            circumstances when we have obtained your consent.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
          >
            1.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Consent to Data Processing in the United States.
            </span>
            Whether you are a resident of the United States, the European
            Economic Area, or any other global jurisdiction, we may send and
            store your personal information outside of the country in which you
            reside. We currently store your data in the United States. By using
            our Services and consenting to this Privacy Policy, you agree and
            hereby consent to the storage and processing of your Personal Data
            in the United States.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            2. <span style={{ fontWeight: 'bold' }}>Third Parties </span>
            Your information may be held by third parties or we may link to
            other sites or applications not affiliated, owned, or controlled by
            us. When you click on a link or an advertisement, you will be
            directed to that third party’s website. The fact that we link to a
            third party’s website or advertisement does not in any way create a
            relationship between us and that third party. We do not endorse or
            represent any third parties. The privacy practices of any third
            parties are outside the scope of this Privacy Policy and their use
            or disclosure of your information (including your personal
            information) will be governed by their own privacy practices or
            policies. We encourage you to review the privacy practices or
            policies of those third parties.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            1.{' '}
            <span style={{ fontWeight: 'bold' }}>Behavioral Advertising </span>
            As described above, we use your Personal Information to provide you
            with targeted advertisements or marketing communications we believe
            may be of interest to you. For more information about how targeted
            advertising works, you can visit the Network Advertising
            Initiative’s (“NAI”) educational page at
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            Additionally, you can opt out of some of these services by visiting
            the Digital Advertising Alliance’s opt-out portal at:{` `}
            <Link
              to="http://optout.aboutads.info"
              style={{ color: 'rgba(0, 0, 0, 0.75)' }}
            >
              http://optout.aboutads.info/.
            </Link>
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="2rem"
          >
            1.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Google Analytics and Advertising.{' '}
            </span>
            We use Google Analytics to better understand how users interact with
            the Platform. For information on Google Analytics’ information
            handling practices and how you can control the use of information
            sent to Google, please visit:
            www.google.com/policies/privacy/partners/. To disable Google
            Analytics, please download and install the Google Analytics Opt-out
            Browser Add-On, which is available here:
            https://tools.google.com/dlpage/gaoptout/. We may also utilize
            certain forms of display advertising and other advanced features
            through Google Analytics, such as Remarketing with Google Analytics,
            Google Display Network Impression Reporting, the DoubleClick
            Campaign Manager Integration, and Google Analytics Demographics and
            Interest Reporting. These features enable us to use first-party
            cookies (such as the Google Analytics cookie) and third-party
            cookies (such as the DoubleClick or Google Dynamic Remarketing
            advertising cookie) together to inform, optimize, and display
            advertisements based on your past visits to the Platform. You may
            control your advertising preferences or opt out of certain Google
            advertising products by visiting the Google Ads Preferences Manager,
            currently available at: https://google.com/ads/preferences or by
            visiting the NAI opt-out tool linked to above.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="2rem"
          >
            1. <span style={{ fontWeight: 'bold' }}>Do not track.{` `} </span>
            Please note that we do not alter our Site’s data collection and use
            practices when we see a Do Not Track signal from your browser.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            2. <span style={{ fontWeight: 'bold' }}>Your Rights.{` `}</span>
            If you would like to access, modify, or delete your personal
            information, you may submit a request to support@shopmrbeast.com.
            For more information or to see if these rights apply to you, please
            contact us. We will promptly review all such requests in accordance
            with applicable laws. Additionally, if you are a European resident
            we note that we are processing your information in order to fulfill
            contracts we might have with you (for example if you make an order
            through the Site), or otherwise to pursue our legitimate business
            interests listed above. Additionally, please note that your
            information will be transferred outside of Europe, including to
            Canada and the United States.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="2rem"
          >
            1. <span style={{ fontWeight: 'bold' }}>Data Retention.{` `}</span>
            When you place an order through the Site, we will maintain your
            order information, including all provided Personal Information, for
            our records unless and until you ask us to delete this information.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            2. <span style={{ fontWeight: 'bold' }}>Security.{` `}</span>
            The security of your information is important to us. We maintain
            various safeguards in order to keep your personal information safe.
            We always strive to do our best to protect your information, but we
            cannot guarantee that your information will always be secure.
            However, you can play your part in ensuring your information remains
            secure. You should never disclose your login credentials or personal
            information with anyone else, and you should keep such information
            in a safe and confidential manner. You should also adopt passwords
            that are hard to decipher and be sure to log out of your account
            whenever it is not being used by you. We will notify you, by email
            or through the Services, if we believe your information has been
            breached. Such notification will be made to you as soon as
            practically possible given our need to determine the scope of such
            breach and to comply with the needs of law enforcement. Please note
            that you transmit your personal information at your own risk and
            that we are not responsible for any deliberate or accidental
            circumvention of our privacy and security measures.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            3.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Children’s Online Privacy Protection Act.{` `}
            </span>
            The Services are intended for general audiences and is not directed
            to children under 13 years old. We do not target this Services to
            children under 13, and we do not intentionally collect any
            information from users under 13. If you become aware that your child
            has used the Services, and we may have personal information about a
            user under 13, please contact us at support@shopmrbeast.com, so we
            may delete the information.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            4. <span style={{ fontWeight: 'bold' }}>Cookies.{` `}</span>
            Cookies are small bits of electronic information that a website or
            application sends to your browser and are stored on your hard drive.
            We use cookies to identify users, track your behavior on the
            Website, keep the Services secure, and improve the Services’
            performance. Some cookies are necessary in order to use the
            Services, and these cannot be disabled. Other cookies are not
            required to browse our Services and may be disabled or deleted, but
            this may prevent you from properly using the Services. Most browsers
            allow you to adjust your cookie settings, which can be done through
            your browser’s settings. Third-party services, such as Shopify, may
            employ cookies on the Services in order to better perform their
            services. We have no control over third-party cookies, and
            therefore, disclaim any and all liability related to third-party
            cookies.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            5.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Supplemental Privacy Rights.{` `}
            </span>
            If you are a California, Colorado, Connecticut, Nevada, Utah or
            Vermont resident, the law may provide you with additional rights
            regarding our use of your Personal Information. Please review our
            Supplemental Privacy Policy[DF1] carefully to learn more about these
            rights.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            6.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Appealing Privacy Rights Decisions.{` `}
            </span>
            Depending on your U.S. state residency, you may have the right to
            appeal a decision we have made in connection with your privacy
            rights request. To appeal a decision, please contact
            support@shopmrbeast.com. If you are unsatisfied with the way that we
            have handled your appeal, you may have the right to complain to your
            state’s Attorney General.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            7.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Changes and Updates to Privacy Policy.{` `}
            </span>
            This Privacy Policy may be revised periodically, and this will be
            reflected by the date above. Please revisit this page to stay aware
            of any changes. Your continued use of the Services constitutes your
            agreement to this Privacy Policy and any future revisions.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="-1rem"
          >
            8.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Contact Information.{` `}
            </span>
            If you have any questions or concerns about this Privacy Policy,
            please contact us by email at the following address:
            support@shopmrbeast.com.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            mt="2rem"
            fontWeight={600}
          >
            U.S. Supplemental Privacy Policy
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            Updated as of: June 30, 2023
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
          >
            This US Supplemental Privacy Notice (“Supplemental Notice”) applies
            only to information collected about consumers in the following
            states: (1) California, (2) Colorado, (3) Connecticut, (4) Nevada,
            (5) Utah, and (6) Virginia. This Supplemental Notice describes
            Gamechanger247, LLC d/b/a MrBeast.Store’s (“we,” “us,” “our”)
            practices regarding the collection, use, and disclosure of Personal
            Information and provides instructions for submitting data subject
            requests. This Supplemental Notice is in addition to, and
            incorporated into, our Privacy Policy. Some portions of this
            Supplemental Notice apply only to consumers of particular states. In
            those instances, we have indicated that such language applies only
            to those consumers. To the extent terms used in this Supplemental
            Notice are defined terms under the applicable US State Privacy Law,
            they shall have the meanings afforded to them in those statutes,
            whether or not capitalized herein. As there are some variations
            between such definitions in each of the state statutes, the
            definitions applicable to you are those provided in the statute for
            the state in which you are a consumer. For example, if you are a
            Virginia consumer, terms used in this Supplemental Notice that are
            defined terms in the VCDPA shall have the meanings afforded to them
            in the VCDPA as this Supplemental Notice applies to you.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="1rem"
            mt="1rem"
          >
            1.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Supplemental Notice for California Residents.{` `}
            </span>
            This Supplemental Notice for California Residents only applies to
            our processing of personal information that is subject to the
            California Consumer Privacy Act of 2018 (“CCPA”). The CCPA provides
            California residents with the right to know what categories of
            personal information MrBeast has collected about them, and whether
            we disclosed that personal information for a business purpose (e.g.,
            to a service provider) in the preceding 12 months.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="2rem"
            mt="-1rem"
          >
            1.{' '}
            <span style={{ fontWeight: 'bold' }}>
              Disclosure for California Consumers: {` `}
            </span>
            Unless specifically stated, we have not sold or shared Personal
            Information about California consumers to third parties for their
            own use in the past twelve months. Relatedly, we do not have actual
            knowledge that we sell or share Personal Information of California
            consumers under 16 years of age. However, we may share your personal
            information with our affiliates and trusted partners in arrangements
            that may meet the broad definition of “sale” or “share” under
            California law. In these arrangements, use of the information we
            share is limited by policies, contracts, or similar restrictions.
            That said, we may share information with third-party advertising
            partners or analytics providers for the purpose of promoting our
            Services as described above, including for cross-context behavioral
            advertising. To the extent that such sharing is considered a “sale”
            under the CCPA, you may opt-out of having your personal information
            shared with such advertising partners or analytics providers by
            emailing us here: support@shopmrbeast.com. For purposes of
            California law, a “sale” is the disclosure of Personal Information
            to a Third Party for monetary or other valuable consideration, and a
            “share” is the disclosure of Personal Information to a Third Party
            for cross-context behavioral advertising, whether or not for
            monetary or other valuable consideration.
          </Typography>
          <Typography
            fontSize="1.2rem"
            color="rgba(0, 0, 0, 0.75)"
            lineHeight="2rem"
            ml="2rem"
            mt="-1rem"
          >
            2.{` `}
            The following chart details which categories of personal information
            we have collected from and about California residents in the past
            twelve (12) months, the source(s) of each category of information,
            the categories of third parties to whom we have disclosed each
            category of information for a business purpose, and the categories
            of third parties to whom we have “sold” or with whom we have
            “shared” each category of information (as such terms are defined in
            the CCPA) (where applicable). Please note that the first column in
            the chart lists by category the types of information described in
            the “Collection of Personal Information” section above, as required
            by the CCPA.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default PrivacyPolicy
