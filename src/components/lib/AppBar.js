import React, {Component} from 'react';

import '../../stylesheets/AppBar.scss';

export class AppBar extends Component {

    static defaultProps = {
        title: 'TITULO',
        leftElement: <span></span>,
        rightElement: <span></span>,
        inverted: false,
        titleElement: null
    }

    render() {

        const {title, leftElement, rightElement, inverted, titleElement} = this.props;

        const titleEl = titleElement ? titleElement : title;

        return (
            <div className={'AppBar ' + (inverted
                ? 'inverted'
                : '')}>
                <div>
                    <span className="left menu">{leftElement}</span>
                    {titleEl}
                    <span className="right menu">{rightElement}</span>
                </div>
                {this.props.children}
            </div>
        );
    }

}