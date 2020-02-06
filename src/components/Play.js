import React from "react";


export default class Play extends React.Component{
    pageType = 'play';

    constructor(props) {
        super(props);
        this.state = {
            was: props['pageType'],
            isAnimate: true
        }

        this.updateType()
    }

    render() {
        return (
            <React.Fragment>
                {this.content()}
            </React.Fragment>
        );
    }

    content(){
        return (
            <div>
                <div className="play__bg-tr num-1 set-visible"></div>
                <div className="play__bg-tr num-2 set-visible"></div>
                <div className="play__bg-tr num-3 set-visible"></div>
                <div className="play set-visible" >
                    <div className="play__item play__item-1">
                        <div className="play__item-num">1</div>
                        <div className="play__item-data">
                            <h3>Шаг первый</h3>
                            <p>Скачайте оригинальную GTA 5</p>
                            <button className="btn">Тык</button>
                        </div>
                    </div>
                    <div className="play__item play__item-2">
                        <div className="play__item-data">
                            <h3>Шаг второй</h3>
                            <p>Установите ALT:V</p>
                            <button className="btn btn--fixed">Клик</button>
                        </div>

                        <div className="play__item-num" style={{marginLeft: '40px'}}>2</div>
                    </div>
                    <div className="play__item play__item-3">
                        <div className="play__item-num">3</div>
                        <div className="play__item-data" style={{marginLeft: '30px'}}>
                            <h3>Шаг первый</h3>
                            <p>Найдите NEST в списке серверов</p>
                            <button className="btn btn--fixed">Конект</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    updateType() {
        this.props.updateType({pageType: this.pageType, pageFrom: this.state.was})
    }
}
