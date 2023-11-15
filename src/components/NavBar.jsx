import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import menuIcon from '../images/icon-menu.svg'
import cartIcon from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

const NavBar = () => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      borderBottom="1px solid #E8E8E8"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          gap: { xs: '10px', lg: '15px' },
          my: { sm: '17px', lg: '26px' },
        }}
        px="10px"
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={{ xs: '10px', lg: '25px' }}
        >
          <Stack display={{ xs: 'block', lg: 'none' }}>
            <img
              style={{
                height: '20px',
                width: '20px',
                marginTop: '10px',
                marginRight: '14px',
              }}
              src={menuIcon}
              alt="menu icon"
            />
          </Stack>
          <Typography variant="h3" fontWeight={700}>
            sneakers
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            display={{ xs: 'none', lg: 'flex' }}
            gap="36px"
            sx={{ ml: '15px' }}
          >
            <Typography fontSize="16px" color="#0c1321">
              Collection
            </Typography>
            <Typography fontSize="16px" color="#0c1321">
              Men
            </Typography>
            <Typography fontSize="16px" color="#0c1321">
              Women
            </Typography>
            <Typography fontSize="16px" color="#0c1321">
              About
            </Typography>
            <Typography fontSize="16px" color="#0c1321">
              Contact
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          gap={{ xs: '25px', lg: '35px' }}
        >
          <img src={cartIcon} alt="cart icon" />
          <img
            style={{ height: '40px', width: '40px' }}
            src={avatar}
            alt="image avatar"
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default NavBar
