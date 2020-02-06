import React from "react";

export default class About extends React.Component{

    pageType = 'about';

    constructor(props) {
        super(props);
        this.state = {
            was: props['pageType']
        }

        this.updateType()
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>О нас</h1>
                    <p>Мы команда людей, которая создает проект, позволяющий человеку стать кем он хочет, опробовав на себе какую-то роль. Делая этот проект на базе игры от знаменитой компании Rockstar - Grand Theft Auto 5. Наша команда делает проект, который изменит представление о том, какие РП-проекты должны быть, создавая реальную возможность увидеть последствия своих действий на жизни других людей и целого штата в частности.</p>
                </div>
            </React.Fragment>
        );
    }


    updateType() {
        this.props.updateType({pageType: this.pageType, pageFrom: this.state.was})
    }
}
