class details extends HTMLElement{
    static get observedAtributes() {
		return ['materials', 'sizesAvailable', 'brand', 'origin'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallbak() {
		this.render();
	}

    attributeChangedCallbak(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

    render() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/details/details.css">
    <section>
    <p>${this.materials}<p>
    <h1> ${this.sizesAvailable}</h1>
    <p> ${this.brand} </p>
    <p>${this.origin}<p>
    </section>
    `;
	}

}

customElements.define('<details>', details );
export default details;