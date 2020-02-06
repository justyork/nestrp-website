import React from "react";


export default class ShopType extends React.Component {

    render() {


        const item_list = this.props.data.map((item, key) => this.renderList(item, key))

        return (
            <React.Fragment>
                {item_list}
            </React.Fragment>
        );
    }

    renderList(data, key){
        const params = data.params.map((item, key) =><li key={key}>{item}</li>)

        return (
            <div key={key} className={`shop__item shop__item-${data.color}`}>
                <div className="shop__item-image">
                    <img src={`/static/img/content/${data.image}`} alt="" />
                </div>
                <div className="shop__item-data">
                    <div className="shop__item-title gradient"><b>{data.title_big}</b> {data.title}</div>
                    <ul className="shop__item-params">{params}</ul>
                    <div className="shop__item-bottom">
                        <div className="shop__item-price  gradient">{data.price} RUB</div>
                        <a href="/" className="btn">Купить</a>
                    </div>
                </div>
            </div>
        );
    }
}
