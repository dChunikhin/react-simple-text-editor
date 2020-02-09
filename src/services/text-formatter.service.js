class TextFormatterService {

    defaultActions = {
        bold: 'bold',
        italic: 'italic',
        underline: 'underline',
        replace: 'insertText'
    };

    constructor(settings = {}) {
        this.actions = settings.actions || this.defaultActions;
    }

    formatSelectedText(action) {
        const actionToPerform = this.actions[action];
        if (actionToPerform) {
            document.execCommand(actionToPerform)
        }
    }

    replaceSelectedTextWith(text) {
        const actionToPerform = this.actions['replace'];
        if (actionToPerform) {
            document.execCommand(actionToPerform, null, text)
        }
    }


}

export default new TextFormatterService();
