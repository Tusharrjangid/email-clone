import { Box, Divider, Typography, styled } from '@mui/material'
import React from 'react'

const Component=styled(Box)({
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    marginTop:50,
    opacity:'0.8',
    width:'100%'
})

const StyledDivider=styled(Divider)({

})

const NoMails = ({message}) => {
  return (
    <Component>
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <StyledDivider/>
    </Component>
  )
}

export default NoMails
