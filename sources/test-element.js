export default class TestElement extends HTMLElement {

  constructor() {
    super();
  } 

  get text() {
    return this.dataset["text"];
  }

  set text(value) {
    this.dataset["text"] = value;
  }

  render() { 
    var model = {
      text: this.dataset['text']
    };
    var html = `<h1>Un bellissimo modo di programmare</h1>
                <p>${model.text}</p>`;
    this.innerHTML = html;
  }

  attachedCallback() {
    this.render();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
}