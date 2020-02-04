import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className='header-main'>
            <AppBar position="static">
                <Toolbar className='header-toolbar'>
                    <Typography variant="h6" className='header-title'>
                        Fulogy
                    </Typography>
                    <IconButton edge='start' className='menu-button' color='inherit' aria-label='menu' onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <SendIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </StyledMenuItem>
            </StyledMenu>
        </div>
    )
}

export default Header;