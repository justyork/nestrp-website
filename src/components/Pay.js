import React from "react";

export default class Pay extends React.Component{

    pageType = 'about';

    constructor(props) {
        super(props);
        this.state = {
            was: props['pageType'],
            confirmRules: false
        }

        this.updateType()
    }

    render() {
        return (
            <React.Fragment>
                <div className="pay">
                    <h1 className="title-small">Пополнение счета</h1>
                    <form action="post">
                        <div className="field-row">
                            <input type="text" placeholder="Логин в игре"/>
                        </div>
                        <div className="field-row">
                            <input type="text" placeholder="Электронная почта"/>
                        </div>
                        <div className="field-row">
                            <input type="text" placeholder="Сумма"/>
                        </div>
                        <div className="pay__note">
                            Курс <a href="/">Nesters</a> 1 Руб. = $100 (Игровой валюты)
                        </div>

                        <button className="btn btn--outline" disabled={!this.state.confirmRules}>Пополнить</button>

                        <div className="field-row pay__confirm">
                            <label>
                                <input type="checkbox" checked={this.state.confirmRules} onChange={this.onChange.bind(this)}/>
                                Я согласен на обработку моих <a href="/">персональных данных</a>
                            </label>

                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }

    onChange(){
        this.setState({
            confirmRules: !this.state.confirmRules
        })
    }

    updateType() {
        this.props.updateType({pageType: this.pageType, pageFrom: this.state.was})
    }
}
