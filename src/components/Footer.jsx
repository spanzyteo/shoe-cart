import { Box } from '@mui/material'
import Contact from '../pages/Contact'
import Media from './Media'
import Bottom from './Bottom'
import ContactMarquee from './ContactMarquee'

const Footer = () => {
  return (
    <Box>
      <ContactMarquee />
      <Contact />
      <Media />
      <Bottom />
    </Box>
  )
}

export default Footer
