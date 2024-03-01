import { Box, Stack, Typography } from '@mui/material'
import { trendingItems } from '../utils/trendingItems'
import { useParams } from 'react-router-dom'

const Product = ({ match }) => {
  const { id } = useParams()

  const itemId = parseInt(id)
  const item = trendingItems.find((item) => item.id === itemId)
  return (
    <Box
      flexDirection={{ xs: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mt: { xs: '0px', lg: '50px' },
        mx: { xs: '0rem', lg: '2rem' },
      }}
    ></Box>
  )
}

export default Product
