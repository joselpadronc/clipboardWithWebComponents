import {LitElement, html, css} from 'lit-element';

class SectionDescriptionText extends LitElement {
    static get styles() {
        return css `
            .container__text {
                text-align: center;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 0 25px;
                margin-bottom: 20px;
            }

            .container__text h1 {
                font-size: 30px;
                font-weight: 600;
                color: hsl(210, 10%, 33%);
            }

            .container__text p {
                font-size: 16px;
                font-weight: 400;
                color: hsl(210, 10%, 33%);
            }
        `;
    }

    render() {
        return html `
            <div class='container__text'>
                <h1>A history of everything you copy</h1>
                <p>Clipboard allows you to track and organize everything you
                copy. Instantly access your clipboard on all your devices.</p>
            </div>
        `;
    }
}


customElements.define('section-description-text', SectionDescriptionText)