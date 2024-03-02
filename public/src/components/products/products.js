class products extends HTMLElement{
    static get observedAtributes() {
		return ['image', 'title', 'description', 'value','inStock'];
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
    <link rel="stylesheet" href="./src/components/products/products.css">
    <section>
    <p>${this.image}<p>
    <h1> ${this.title}</h1>
    <p> ${this.descrption} </p>
    <p>${this.value}<p>
    <p>${this.inStock}<p>
    </section>
    `;
	}

}

customElements.define('<products>', products);
export default products;