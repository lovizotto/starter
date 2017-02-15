import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {inject, observer} from 'mobx-react';

import Menu from './components/Menu';

@inject('ConfigStore')
@observer
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animation: 'page',
            animationDirection: 'left',
            pageLoaded: {},
            logged: false,
        }
    }

    closeMenu = () => {
        this.props.ConfigStore.menuOpened = false;
        this.forceUpdate();
    }

    render() {

        const {menuOpened, animationType} = this.props.ConfigStore;
        const colorBackground = menuOpened === true ? 'colored' : '';
        const overlayOpened = menuOpened === true ? 'opened' : '';

        return (
            <div className={"full-wrapper " + colorBackground}>
                <Menu open={menuOpened} />

                <div className={"App " + (menuOpened === true ? 'wrapper-content' : '')}>
                    <div className={"full-overlay " + overlayOpened} onClick={this.closeMenu.bind(this)} />

                    <ReactCSSTransitionGroup component="div" transitionName={animationType}
                                             transition EnterTimeout={400} transitionLeaveTimeout={400}>
                        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}

                    </ReactCSSTransitionGroup>
                </div>

            </div>
        );
    }
}