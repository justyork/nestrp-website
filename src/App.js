import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import ScrollArea from 'react-scrollbar';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import About from "./components/About";
import Home from "./components/Home";
import Play from "./components/Play";
import Shop from "./components/Shop";
import Pay from "./components/Pay";

export default class App extends React.Component{

    animCount = 0
    prevOffset = 0;
    scrolProcess = false
    constructor(props) {
        super(props);

        this.state = {
            pageType: null,
            pageFrom: null,
            indexFrom: 0,
            headerClass: '',
        }
    }


    render(){
        let pageType = this.state.pageType;
        let pageFrom = this.state.pageFrom;

        let animClass = '';

        if(pageType === 'home' && pageFrom === 'play')
            animClass = 'fromPlayToHome'
        else if(pageType === 'play' && pageFrom === 'home')
            animClass = 'fromHomeToPlay'
        else if(pageType === 'home' && (pageFrom !== 'play' && pageFrom === null))
            animClass = 'homePage'
        else if(pageType === 'play' && (pageFrom !== 'home' && pageFrom === null))
            animClass = 'playPage'
        else if(pageType === 'play' && pageFrom !== 'home' )
            animClass = 'playPage from-' + this.state.indexFrom % 3
        else if(pageType === 'home' && pageFrom !== 'play' )
            animClass = 'homePage from-' + this.state.indexFrom % 3
        else if(pageFrom === 'home')
            animClass = 'fromHome'
        else if(pageFrom === 'play' || this.animCount !== 0)
            animClass = 'moveSide-'+(this.animCount % 3)


        let bgTr = (
            <div className="bg__tr">
                <div className={"bg__tr-1"}></div>
                <div className={"bg__tr-2"}></div>
            </div>
        );

        let hasScroll = pageType !== 'home' && pageType !== 'play' && pageType !== 'pay';

        let header = document.getElementById('header');
        let content = document.getElementsByClassName('content')[0];

        return (
            <section className={"page__wrapper " + animClass + (pageType === 'shop' ? ' shop-page': '') +(' '+this.state.headerClass)}>
                <Router>
                    <div className={'header-wrapper '}>
                        <header className="header container" id="header">
                            <div className="logo">
                                <NavLink exact to="/">
                                    <img src="/static/img/general/logo.png" alt=""/>
                                    <span><b>NEST</b> ROLE PLAY</span>
                                </NavLink>
                            </div>

                            <ul className="menu">
                                <li>
                                    <NavLink to="/about">О нас</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/play">Играть</NavLink>
                                </li>
                                <li>
                                    <a href="/">Форум</a>
                                </li>
                                <li>
                                    <NavLink to="/shop/vip">Магазин</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pay">Пополнение счета</NavLink>
                                </li>
                            </ul>

                            <ul className="social">
                                <li>
                                    <a href="/">
                                        <img src="/static/img/general/discord.svg" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="/static/img/general/vk.svg" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <img src="/static/img/general/youtube.svg" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </header>
                    </div>

                    <div className="container--small">
                        {animClass === 'fromHome' ? this.fromHomePage(pageType) : null}
                        {pageType !== 'home' || pageType !== 'play' ?  bgTr : null}
                    </div>
                    <Switch>
                        <Route path="/pay">
                            <div className={"container content-data content" }>
                                <div className={"container--small"} >
                                    <Pay pageType={pageType} updateType={this.updateType.bind(this)}/>
                                </div>
                            </div>
                        </Route>
                        <Route path="/shop/:id">
                            <Shop pageType={pageType} updateType={this.updateType.bind(this)}/>
                        </Route>
                        <Route path="/about">
                            <SimpleBar className={"container content-data content"} >
                                <div className={"container--small"} >
                                    <About pageType={pageType} updateType={this.updateType.bind(this)}/>
                                </div>
                            </SimpleBar>
                        </Route>
                        <Route path="/play">
                            <div className={"container content-data " + (hasScroll ? ' content' : '')}>
                                <div className={"container--small"} >
                                    <Home  pageType={pageType} updateType={this.updateType.bind(this)}/>
                                    <Play  pageType={pageType} updateType={this.updateType.bind(this)}/>
                                </div>
                            </div>
                        </Route>
                        <Route path="/">
                            <div className={"container content-data "}>
                                <div className={"container--small"} >
                                    <Play  pageType={pageType} updateType={this.updateType.bind(this)}/>
                                    <Home  pageType={pageType} updateType={this.updateType.bind(this)}/>
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </section>
        );
    }

    fromHomePage(){
        return (
            <div className="play-alt">
                <Home noUpdate={true}/>
            </div>
        );
    }

    handleScroll(){
        let scrollTop = window.pageYOffset
        let th = this
        if(th.prevOffset < 50)
            th.setState({headerClass: 'nav-top'})
        else if(th.prevOffset < scrollTop)
            th.setState({headerClass: 'nav-hide'})
        else
            th.setState({headerClass: 'nav-show'})

        this.prevOffset = scrollTop;
    }

    updateType(data){
        if(data.pageType === 'play')
            this.animCount = 0
        else if(data.pageType === 'home')
            this.animCount = 2
        else{
            this.animCount += 1
            this.state.indexFrom = this.animCount % 3
        }

        this.setState({pageType: data.pageType, pageFrom: data.pageFrom})
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this), true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
}
