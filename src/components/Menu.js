import React from 'react';
import {observer, inject} from 'mobx-react';

import '../stylesheets/Menu.scss';

@inject('ConfigStore', 'AuthStore', 'Navigator')
@observer
export default class Menu extends React.Component {

    closeMenu = (url) => {
        this.props.ConfigStore.animationType = 'fade';
        this.props.ConfigStore.closeMenu();
        this.props.Navigator.push(url);
    }

    loggout = () => {
        this.props.AuthStore.doLogout();
        this.props.ConfigStore.closeMenu();
        this.props.Navigator.push('/');
    }

    render() {

        const {user} = this.props.AuthStore;
        if (!user)
            return false;

        const {menuOpened} = this.props.ConfigStore;
        const avatar = user.foto && user.foto.length > 0 ? user.foto : user.foto;

        return (
            <div className={"Menu " + (menuOpened === true ? 'open' : '')}>

                <div className="profile" onClick={this.closeMenu.bind(this, '/perfil')}>
                    <div className="avatar" style={{backgroundImage: 'url("' + avatar + '")'}}></div>
                    <div className="profile-description">
                        { user.name.split(" ")[0] }<br />
                        <span>Meu perfil</span>
                    </div>
                </div>

                <div className="items">
                    <ul>
                        <li className="sobre-ico" onClick={this.closeMenu.bind(this, '/sobre')}>Sobre</li>
                        <li className="configuracoes-ico" onClick={this.closeMenu.bind(this, '/configuracoes')}>Configurações</li>
                        <li className="logout-ico" onClick={this.loggout.bind(this)}>Sair</li>
                    </ul>
                </div>
            </div>
        )
    }
}