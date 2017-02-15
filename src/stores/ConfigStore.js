import {observable, action} from 'mobx';

export const FlashMessageType = {
    SUCCESS:"success",
    ERROR: "error",
}

export const AnimationType = {
    TO_LEFT: 'left',
    TO_RIGHT: 'right',
    TO_TOP: 'top',
    TO_BOTTOM: 'bottom',
    FADE: 'fade'
}

export class FlashMessage {
    @observable type;
    @observable title;
    @observable message;
    @observable buttonLabel;
    @observable link;
    @observable animationType;

    constructor(options) {
        this.type = options.type;
        this.title = options.title;
        this.message = options.message;
        this.buttonLabel = options.buttonLabel;
        this.link = options.link;
        this.animationType = options.animationType;
    }
}

class ConfigStore {
    @observable menuOpened = false;
    @observable animationType = 'left';
    @observable flashMessage = new FlashMessage({
        type: FlashMessageType.SUCCESS,
        title: "Sucesso!",
        message: "Operação efetuada com Sucesso",
        buttonLabel: "OK",
        link: '/',
        animationType: AnimationType.TO_LEFT
    });

    @action closeMenu = () => {
        this.menuOpened = false;
    }

    @action openMenu = () => {
        this.menuOpened = true;
    }
}

export default new ConfigStore();
