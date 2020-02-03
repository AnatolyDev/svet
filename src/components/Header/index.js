import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { grey } from '@material-ui/core/colors';

const Header = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const open = Boolean(anchorEl);
    const MenuItemsNames = [
        'Обучающее видео',
        'Оформление заказа',
        'Оплата',
        'Доставка',
        'Гарантия',
        'Возврат',
        'Контакты',
        'Партнёрам'
    ]

    const sideList = () => (
      <div
        className='menu-list'
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
      >
        <List>
            <ListItem button onClick={() => setOpenMenu(false)}>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary='Главная' style={{color: 'black'}}/>
            </ListItem>              

            <ListItem button onClick={() => setOpenMenu(false)}>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary='Афиша' style={{color: 'black'}}/>
            </ListItem>              
        </List>

        
      </div>
    );
  
    const handleMenu = event => {
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
                    <IconButton edge="start" className='menu-button' color="inherit" aria-label="menu" onClick={() => setOpenMenu(true)}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;