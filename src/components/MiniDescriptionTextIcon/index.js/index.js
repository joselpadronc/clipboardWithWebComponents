import {LitElement, html, css} from 'lit-element';

class MiniDescriptionTextIcon extends LitElement {
    static get styles() {
        return css `
            .container-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 25px;
            }

            .container-item__text {
                text-align: center;
            }

            .container-item__text h1 {
                font-size: 30px;
                font-weight: 600;
                color: hsl(210, 10%, 33%);
            }

            .container-item__text p {
                font-size: 16px;
                font-weight: 400;
                color: hsl(210, 10%, 33%);
            }
        `;
    }

    render() {
        return html `
            <article class='container-item'>
                <picture class='container-item__text'>
                    <img src='https://raw.githubusercontent.com/joselpadronc/clipboardWithWebComponents/2a3f3630a28900173c7226f7255f77c48aa97ed7/src/static/images/icon-preview.svg'>
                </picture>
                <div class='container-item__text'>
                    <h2>A history of everything you copy</h2>
                    <p>Clipboard allows you to track and organize everything you
                    copy. Instantly access your clipboard on all your devices.</p>
                </div>
            </article>
        `;
    }
}


customElements.define('mini-description-text-icon', MiniDescriptionTextIcon);