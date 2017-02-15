import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import iconMenu from '../../images/ic-menu.svg';

@inject('ConfigStore')
@observer
export default class ButtonHamburger extends Component {

    render() {
        return (
            <span className="AppBar-icons" onClick={() => this.props.ConfigStore.openMenu()}>
            <img src={iconMenu} width={24}/></span>
        )
    }
}
