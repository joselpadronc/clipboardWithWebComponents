import {LitElement, html, css} from 'lit-element';

class MiniDescriptionTextIcon extends LitElement {
    static get properties() {
        return {
            icon: { type: String },
            title: { type: String },
            paragraph: { type: String },
        }
    }

    constructor() {
        super();
        this.icon;
        this.title;
        this.paragraph;
    }

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

            .container-item__text h2 {
                font-size: 24px;
                font-weight: 600;
                color: hsl(210, 10%, 33%);
            }

            .container-item__text p {
                font-size: 16px;
                font-weight: 400;
                color: hsl(201, 11%, 66%);
            }
        `;
    }

    render() {
        return html `
            <article class='container-item'>
                <picture class='container-item__icon'>
                    <img src='${this.icon}'>
                </picture>
                <div class='container-item__text'>
                    <h2>${this.title}</h2>
                    <p>${this.paragraph}</p>
                </div>
            </article>
        `;
    }
}


customElements.define('mini-description-text-icon', MiniDescriptionTextIcon);