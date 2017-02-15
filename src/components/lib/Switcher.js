import React, {Component} from 'react';
import '../../stylesheets/Switcher.scss';

class Switcher extends Component {

    static defaultProps = {
        active: true,
        onChange: () => {
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            active: this.props.active,
        }
    }

    handleSwitcher = () => {
        this.setState(prevState => {
            return {active: !prevState.active}
        });

        this.props.onChange({active: !this.state.active});
    }

    render() {

        const activeStyle = this.state.active ? 'active' : '';

        return (
            <div className={"Switcher " + activeStyle} onClick={this.handleSwitcher.bind(this)}><span
                className="control"/></div>
        )
    }

}

export default Switcher;