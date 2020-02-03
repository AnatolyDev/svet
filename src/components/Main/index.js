import React from 'react';

const Main = () => {
    return (
        <div className='main'>
            <div className='main-picture'>

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

                </div>
                <div className='main-options-smallpict'>

                </div>
            </div>
        </div>
    )
}

export default Main;