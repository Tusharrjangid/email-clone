import React from 'react'
import { AppBar, Toolbar, styled,InputBase,Box } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {gmailLogo} from "../constants/constant"
import {Search as SearchIcon,Tune as TuneIcon,HelpOutlineOutlined,SettingsOutlined,Apps,AccountCircle} from '@mui/icons-material';

const StyledAppBar=styled(AppBar)({
  background:'#F5F5F5',
  boxShadow:"none"
})

const SearchWrapper=styled(Box)({
  background:'#EAF1FB',
  marginLeft:80,
  borderRadius:'8px',
  minWidth:690,
  maxWidth:720,
  height:48,
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  padding:'0 20px',
  ' & > div' :{
    width:'100%',
    padding:'0 10px'
  }
})

const OptionsWrapper=styled(Box)({
  width:'100%',
  display:'flex',
  justifyContent:'flex-end',
  '& > svg':{
    marginLeft:20,
  }  
})

const Header = ({toggleDrawer}) => {
  return (
    <StyledAppBar>
      <Toolbar>
        <MenuIcon color='action' onClick={toggleDrawer} />
        <img src={gmailLogo} alt="logo" style={{width:110,marginLeft:15}} />
        <SearchWrapper>
          <SearchIcon color='action' />
          <InputBase
          placeholder='Search mail'
          />
          <TuneIcon color='action' />
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutlineOutlined color='action' />
          <SettingsOutlined color='action' />
          <Apps color='action' />
          <AccountCircle color='action'/>
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header
