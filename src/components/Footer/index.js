import React from 'react';

const btnTexts = [
    'Вариант кухни',
    'Размеры',
    'Сенсор',
    'Питающий кабель',
    'Блок питания',
    'Цвер сечения',
    'Монтаж',
    'Корзина'
]

const Footer = () => {
    return (
        <div className='footer'>
            {btnTexts.map(
                btn => (
                    <button className='footer-btn'>
                        {btn}
                    </button>
                )
            )}
        </div>
    )
}

export default Footer;