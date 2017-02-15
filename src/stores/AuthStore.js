import {observable, action, computed} from 'mobx';

const API_URI = "";

class User {
    @observable username;
    @observable id;
    @observable fullname;
    @observable email;
    @observable foto;

    constructor(user) {
        this.id = user.id;
        this.username = user.email;
        this.email = user.email;
        this.fullname = user.fullname;
        this.foto = user.foto;
        this.status = user.status;
        this.tipo = user.tipo;
    }
}

/**
 * Gerencia autenticação do usuário
 */
class AuthStore {
    @observable user;
    @observable isLogged;
    @observable isFetching = false;

    constructor() {
        if (localStorage.getItem('user')) {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.isLogged = localStorage.getItem('isLogged');
        }
    }

    @action
    async doLogin(data) {

        this.isFetching = true;

        await fetch(API_URI + "pessoa/authentication",
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    "emailPessoa": data.username,
                    "passPessoa": data.password
                })
            }
        ).then(
            response => response.json()
        ).then(
            json => {

                if (json.erro) {
                    this.isLogged = false;
                } else if (json.sucesso) {

                    let user = JSON.parse(json.sucesso.conteudo);

                    this.user = new User(user);

                    this.isLogged = true;

                    localStorage.setItem('user', JSON.stringify(this.user));
                    localStorage.setItem('isLogged', true);
                }

                this.isFetching = false;
            }
        ).catch(
            error => {
                console.log(error);
                this.isLogged = false
            }
        );
    }

    @action doLogout() {
        localStorage.removeItem('isLogged');
        localStorage.removeItem('user');
        this.user = null;
        this.isLogged = false;
    }

    @computed get checkAuth() {
        return this.isLogged;
    }
}

export default new AuthStore();