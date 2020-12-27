import {LitElement, html, css} from 'lit-element';

class SectionDescriptionText extends LitElement {
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
            .container__text {
                max-width: 600px;
                text-align: center;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 50px;
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
                color: hsl(201, 11%, 66%);
            }
        `;
    }

    render() {
        return html `
            <div class='container__text'>
                <h1>${this.title}</h1>
                <p>${this.paragraph}</p>
            </div>
        `;
    }
}


customElements.define('section-description-text', SectionDescriptionText)