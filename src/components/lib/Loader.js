import React, {Component} from 'react';

import loading from '../../images/loading.svg';

import '../../stylesheets/Loader.scss';

export default class Loader extends Component {

    render() {
        return (
            <div className="Loader">
                <img src={loading}/>
            </div>
        );
    }
}