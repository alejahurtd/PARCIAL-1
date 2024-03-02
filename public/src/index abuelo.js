import * as components from './components/index papa.js';
import data from './data.js';

class Appcontainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
    connectedCallbak() {
		this.render();
	}
    
    render (){
        data.forEach((user) => {
			this.shadowRoot.innerHTML += `
			<tienda image= "${$user.image}" title= "${$user.title}" description="${$user.description}" value= "${$user.value}" inStock= "${$user.inStock}" ></tienda>
      `;
		});
        
    }
}

customElements.define('app-container', Appcontainer);















