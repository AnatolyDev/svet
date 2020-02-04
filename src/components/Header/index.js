import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClearIcon from '@material-ui/icons/Clear';
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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    '&:hover': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);

const menuNames = [
  'Обучающее видео',
  'Оформление заказа',
  'Оплата',
  'Доставка',
  'Гарантия',
  'Возврат',
  'Контакты',
  'Партнёрам',
]

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
                        {anchorEl ? <ClearIcon />:<MenuIcon />}
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
              {
                menuNames.map(
                  item => (
                    <StyledMenuItem>
                      <ListItemText primary={item} />
                    </StyledMenuItem>
                  )
                )
              }
            </StyledMenu>
        </div>
    )
}

export default Header;