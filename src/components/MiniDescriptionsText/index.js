import {LitElement, html, css} from 'lit-element';

class MiniDescriptionsText extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            paragraph: { type: String },
        }
    }

    constructor() {
        super();
        this.title;
        this.paragraph;
    }

    static get styles() {
        return css `
            .container-minidesc {
                text-align: center;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: 40px;
            }

            .container-minidesc h2 {
                font-size: 30px;
                font-weight: 600;
                color: hsl(210, 10%, 33%);
            }

            .container-minidesc p {
                font-size: 16px;
                font-weight: 400;
                color: hsl(201, 11%, 66%);
            }

            @media screen and (min-width: 1024px) {
                .container-minidesc {
                    text-align: left;
                    padding: 0 0 0 25px;
                }
            }
        `;
    }

    render() {
        return html `
            <article class='container-minidesc'>
                <h2>${this.title}</h2>
                <p>${this.paragraph}</p>
            </article>
        `;
    }
}


customElements.define('mini-descriptions-text', MiniDescriptionsText)