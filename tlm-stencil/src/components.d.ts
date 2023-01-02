/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Target } from "./components/mw-button/mw-button";
export namespace Components {
    interface MwButton {
        /**
          * Visually and functionally disable button
         */
        "disabled"?: boolean;
        /**
          * If provided the button will act as a link
         */
        "href"?: string;
        /**
          * Label to be displayed
         */
        "label"?: string;
        /**
          * Use secondary button style
         */
        "secondary"?: boolean;
        /**
          * If using href the target prop can be provided
         */
        "target"?: Target;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
    }
    interface MwRadioButton {
        "checked"?: boolean;
        "disabled"?: boolean;
        "name": string;
        "value": string;
    }
}
export interface MwButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMwButtonElement;
}
declare global {
    interface HTMLMwButtonElement extends Components.MwButton, HTMLStencilElement {
    }
    var HTMLMwButtonElement: {
        prototype: HTMLMwButtonElement;
        new (): HTMLMwButtonElement;
    };
    interface HTMLMwRadioButtonElement extends Components.MwRadioButton, HTMLStencilElement {
    }
    var HTMLMwRadioButtonElement: {
        prototype: HTMLMwRadioButtonElement;
        new (): HTMLMwRadioButtonElement;
    };
    interface HTMLElementTagNameMap {
        "mw-button": HTMLMwButtonElement;
        "mw-radio-button": HTMLMwRadioButtonElement;
    }
}
declare namespace LocalJSX {
    interface MwButton {
        /**
          * Visually and functionally disable button
         */
        "disabled"?: boolean;
        /**
          * If provided the button will act as a link
         */
        "href"?: string;
        /**
          * Label to be displayed
         */
        "label"?: string;
        "onClickEmitter"?: (event: MwButtonCustomEvent<string>) => void;
        /**
          * Use secondary button style
         */
        "secondary"?: boolean;
        /**
          * If using href the target prop can be provided
         */
        "target"?: Target;
        /**
          * Must be provided for automated testing
         */
        "testId": string;
    }
    interface MwRadioButton {
        "checked"?: boolean;
        "disabled"?: boolean;
        "name"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "mw-button": MwButton;
        "mw-radio-button": MwRadioButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mw-button": LocalJSX.MwButton & JSXBase.HTMLAttributes<HTMLMwButtonElement>;
            "mw-radio-button": LocalJSX.MwRadioButton & JSXBase.HTMLAttributes<HTMLMwRadioButtonElement>;
        }
    }
}
