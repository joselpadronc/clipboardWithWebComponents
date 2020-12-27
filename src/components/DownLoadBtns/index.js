import { LitElement, css, html } from 'lit-element';

class DownloadBtns extends LitElement {
    static get styles() {
        return css `
            .container-btns {
                max-width: 600px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                grid-gap: 15px;
                margin-top: 80px;
            }

            .downloadbtn {
                width: 100%;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 18px;
                height: 60px;
                width: 100%;
                border-radius: 100px;
                color: #fff;
                font-size: 18px;
                cursor: pointer;
            }

            .downloadbtn:focus {
                outline: none;
            }
        `;
    }

    render() {
        return html `
            <div class='container-btns'>
                <button
                    style='background-color: hsl(171, 66%, 44%);
                    box-shadow: 0 -4px 0 #1ba490 inset;'
                    class='downloadbtn'
                >Download for iOS</button>
                <button
                    style='background-color: hsl(233, 100%, 69%);
                    box-shadow: 0 -4px 0 #5361d7 inset;'
                    class='downloadbtn'
                >Download for Mac</button>
            </div>
        `;
    }
}


customElements.define('download-btns', DownloadBtns);