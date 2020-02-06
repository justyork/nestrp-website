import React from "react";
import SimpleBar from "simplebar-react";
import {NavLink, Route, withRouter} from "react-router-dom";
import ShopType from "./ShopType";

class Shop extends React.Component{
    pageType = 'shop';

    constructor(props) {
        super(props);
        this.state = {
            was: props['pageType']
        }
        this.url = props['url']
        this.updateType()
    }

    render() {
        let id = this.props.match.params.id
        // console.log(this.data(), id)
        return (
            <React.Fragment>
                <div className="shop__submenu-wrapper">
                    <div className="shop__submenu">
                        <ul className="menu">
                            <li><NavLink to={`/shop/vip`} >Набор VIP</NavLink></li>
                            <li><NavLink to={`/shop/start`}>Стартовые наборы</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className={"container content-data content shop-content"} id="scroll-container">
                    <div className={"container--small"} >
                        <h1 className="title-medium">Магазин</h1>
                        <div className="shop">

                            <Route path="/shop/:id">
                                <ShopType data={this.data()[id]} />
                            </Route>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    data(){
        return {
            vip:[
                {
                    image: 'snares.png',
                    title_big: 'VIP',
                    title: 'SNARES PENGUIN',
                    params: [
                        'PAYDAY $300',
                        'Продажа имущества в гос 75%',
                        'Скидка в VIP магазине 1%',
                        'Лимит несткоинов в день 130',
                        'Кейс Snares penguin x1',
                    ],
                    price: 350,
                    color: 'white',
                },
                {
                    image: 'king.png',
                    title_big: 'VIP',
                    title: 'KING PENGUIN',
                    params: [
                        'PAYDAY $500',
                        'Продажа имущества в гос 80%',
                        'Скидка в VIP магазине 2%',
                        'Скидка на апгрейд бизнеса 5%',
                        'Снижение % ставки кредита в банке на 2%',
                        'Лимит несткоинов в день 150',
                        'Кейс Snares penguin x2',
                        'Кейс King penguin x1',
                    ],
                    price: 600,
                    color: 'gold'
                },
                {
                    image: 'emperor.png',
                    title_big: 'VIP',
                    title: 'EMPEROR PENGUIN',
                    params: [
                        'PAYDAY $900',
                        'Продажа имущества в гос 85%',
                        'Скидка в VIP магазине 3%',
                        'Скидка на апгрейд бизнеса 7%',
                        'Снижение % ставки кредита в банке на 3%',
                        'Лимит несткоинов в день 180',
                        'Кейс Snares penguin x3',
                        'Кейс King penguin x2',
                        'Кейс Emperor penguin x1',
                    ],
                    price: 1200,
                    color: 'orange',
                },

            ],
            start:[
                {
                    image: 'adelie.png',
                    title_big: 'ADELIE',
                    title: 'PENGUIN',
                    params: [
                        'Игровая валюта 99 800',
                        'Nestcoin 100',
                        'VIP Snares penguin на 7 дней',
                        'FOCUS 2003',
                    ],
                    price: 499,
                    color: 'white',
                },
                {
                    image: 'magellanic.png',
                    title_big: 'MAGELLANIC',
                    title: 'PENGUIN',
                    params: [
                        'Игровая валюта 300 000',
                        'Nestcoin 400',
                        'VIP King penguin на 15 дней',
                        'Subaru WRX',
                    ],
                    price: 1500,
                    color: 'white',
                },
                {
                    image: 'humboldt.png',
                    title_big: 'HUMBOLDT',
                    title: 'PENGUIN',
                    params: [
                        'Игровая валюта 580 000',
                        'Nestcoin 900',
                        'VIP Emperor penguin на 30 дней',
                        'AUDI SQ7',
                    ],
                    price: 2900,
                    color: 'green',
                },
                {
                    image: 'royal.png',
                    title_big: 'ROYAL',
                    title: 'PENGUIN',
                    params: [
                        'Игровая валюта 1 000 000',
                        'Nestcoin 1700',
                        'VIP Emperor penguin на 60 дней',
                        'AUDI SQ7, Lamborghini Hurracan Performante',
                    ],
                    price: 5000,
                    color: 'orange',
                },
            ]
        }
    }

    updateType() {
        this.props.updateType({pageType: this.pageType, pageFrom: this.state.was})
    }
}

export default withRouter(Shop)
