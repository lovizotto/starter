import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import navBack from '../../images/ic-nav-back.svg';

@inject('Navigator', 'ConfigStore')
@observer
export default class NavBackArrow extends Component {

    static defaultProps = {
        inverted: false,
        animationType: 'right',
    }

    gotoHistoryBack = () => {
        this.props.ConfigStore.animationType = this.props.animationType;
        this.props.Navigator.goBack();
    }

    render() {

        return (
            <span className="AppBar-icons" onClick={this.gotoHistoryBack.bind(this)}>
                <img src={navBack} width={22} role="presentation"/>
            </span>
        );
    }

}