import { r as registerInstance, h, g as getElement } from './index-493aad2c.js';

const mwRadioButtonCss = ".container{display:flex;position:relative;cursor:pointer;align-items:center}.container input{display:none}.mw-radio-button{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:20px;width:20px;border:2px solid black;border-radius:50%;margin:14px}.container:hover input~.mw-radio-button{background:#ff4c4c}.container input:checked~.mw-radio-button{border:6px solid red}.container:hover input:checked~.mw-radio-button{border:6px solid #F86F96;background:none}.container input:disabled~.mw-radio-button{border:2px solid grey;cursor:default}.container:hover input:disabled~.mw-radio-button{background:none}.container input:disabled:checked~.mw-radio-button{border:6px solid grey}.container input:disabled:checked~.mw-radio-button{border:6px solid grey}input:focus:checked~.mw-radio-button{border:2px solid black}input:focus~.mw-radio-button{border:2px solid black}";

const MwRadioButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("label", { class: "container" }, h("input", { id: "radio-input", type: "radio", value: this.value, name: this.name, checked: this.checked, disabled: this.disabled }), h("span", { class: "mw-radio-button" }), h("slot", null)));
  }
  get hostElement() { return getElement(this); }
};
MwRadioButton.style = mwRadioButtonCss;

export { MwRadioButton as mw_radio_button };
