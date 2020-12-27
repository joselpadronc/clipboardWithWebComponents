import { LitElement, css, html } from 'lit-element';

// import logo from '../../static/images/logo.svg'

class BannerElement extends LitElement {
    static get styles() {
        return css `
            .banner {
                background-image: url('https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png');
            }

            .banner-container {
                widht:
            }
        `;
    }

    constructor() {
        super();
        this.logo = new Image()
    }

    render() {
        return html `
            <main class='banner'>
                <div class='banner-container'>
                    <picture class='logo'>
                    </picture>
                    <div class='banner-container__text'>
                        <h1>A history of everything you copy</h1>
                        <p>Clipboard allows you to track and organize everything you
                        copy. Instantly access your clipboard on all your devices.</p>
                    </div>
                    <div class='banner-container__btns'>
                        <button>Download for iOS</button>
                        <button>Download for Mac</button>
                    </div>
                </div>
            </main>
        `;
    }
}


customElements.define('banner-element', BannerElement);