import {LitElement, html, css} from 'lit-element';

class MiniDescriptionsText extends LitElement {
    static get styles() {
        return css `
            .container-minidesc {
                text-align: center;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 0 25px;
                margin-bottom: 40px;
            }

            .container-minidesc h1 {
                font-size: 30px;
                font-weight: 600;
                color: hsl(210, 10%, 33%);
            }

            .container-minidesc p {
                font-size: 16px;
                font-weight: 400;
                color: hsl(210, 10%, 33%);
            }
        `;
    }

    render() {
        return html `
            <article class='container-minidesc'>
                <h2>A history of everything you copy</h2>
                <p>Clipboard allows you to track and organize everything you
                copy. Instantly access your clipboard on all your devices.</p>
            </article>
        `;
    }
}


customElements.define('mini-descriptions-text', MiniDescriptionsText)