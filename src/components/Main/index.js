import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Preview from '../Preview';

const Main = () => {

    const [typeLight, setTypeLight] = useState(0);

    return (
        <div className='main'>
            <div className='main-picture'>
                <Preview typeLight={typeLight.toString()} />
            </div>
            <div className='main-options'>
                <div className='main-options-table'>
                    <table>
                        <tr>
                            <td>
                                Класс:
                            </td>
                            <td>
                                <button>
                                    Standart
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Потребляемая мощность:
                            </td>
                            <td>
                                59 Вт
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Сила света:
                            </td>
                            <td>
                                3459 Люмен ~ 7,5 ламп накаливания по 40 Вт
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Гарантия:
                            </td>
                            <td>
                                3 года
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Монтаж:
                            </td>
                            <td>
                                да
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Итого сумма:
                            </td>
                            <td>
                                2594 рублей
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='main-options-bar'>
                    <div className='main-options-i'>
                        <p>i</p>
                    </div>
                    <div className='main-options-tooltip'>
                        <p>Выберите цвет свечения</p>
                    </div>
                </div>
                <div className='main-options-smallpict'>
                    <div className='main-options-image' onClick={() => setTypeLight(0)}>
                        <img src='/img/kuh.png' alt='Кухня'/>
                        {typeLight === 0 &&
                            <div className='main-options-imagecb'>
                                <Checkbox 
                                    defaultChecked
                                    value='secondary'
                                    color='primary'
                                    checked={true}
                                />                            
                            </div>
                        }
                        <div className='main-options-imagetext'>
                            <span>
                                Тёплый
                            </span>
                        </div>
                    </div>
                    <div className='main-options-image' onClick={() => setTypeLight(1)}>
                        <img src='/img/kuh.png' alt='Кухня'/>
                        {typeLight === 1 &&
                            <div className='main-options-imagecb'>
                                <Checkbox 
                                    defaultChecked
                                    value='secondary'
                                    color='primary'
                                    checked={true}
                                />                            
                            </div>
                        }
                        <div className='main-options-imagetext'>
                            <span>
                                Дневной
                            </span>
                        </div>
                    </div>
                    <div className='main-options-image' onClick={() => setTypeLight(2)}>
                        <img src='/img/kuh.png' alt='Кухня'/>
                        {typeLight === 2 &&
                            <div className='main-options-imagecb'>
                                <Checkbox 
                                    defaultChecked
                                    value='secondary'
                                    color='primary'
                                    checked={true}
                                />                            
                            </div>
                        }
                        <div className='main-options-imagetext'>
                            <span>
                                Холодный
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;