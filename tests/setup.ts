// Runs before every test file. Provides the DOM helpers Obsidian adds to the
// global prototypes (createEl/createDiv/… , setText/addClass/…) and the
// `activeDocument` global that plugin code relies on.
import { TextDecoder as NodeTextDecoder, TextEncoder as NodeTextEncoder } from "node:util";
import type {} from "obsidian";

// jsdom replaces the global built-ins with its own realm's, so a Node
// TextEncoder would produce "foreign" Uint8Arrays — esbuild's startup
// invariant check (and its input validation) then fails. Put the Node realm
// back in charge of encoding.
define(globalThis, "TextEncoder", NodeTextEncoder);
define(globalThis, "TextDecoder", NodeTextDecoder);
define(
	globalThis,
	"Uint8Array",
	(new NodeTextEncoder().encode("") as Uint8Array).constructor,
);

interface DomElementInfo {
	cls?: string | string[];
	text?: string;
	attr?: Record<string, string | number | boolean | null>;
	parent?: Node;
	prepend?: boolean;
	value?: string;
	type?: string;
	placeholder?: string;
	href?: string;
	title?: string;
}

function applyText(el: HTMLElement, text: string | DocumentFragment): void {
	if (typeof text === "string") el.textContent = text;
	else el.appendChild(text);
}

function applyClasses(el: HTMLElement, cls: string | string[] | undefined): void {
	if (!cls) return;
	for (const name of Array.isArray(cls) ? cls : cls.split(" ")) {
		if (name) el.classList.add(name);
	}
}

function applyAttrs(
	el: HTMLElement,
	attr: Record<string, string | number | boolean | null> | undefined,
): void {
	if (!attr) return;
	for (const [key, value] of Object.entries(attr)) {
		if (value === null || value === false) continue;
		el.setAttribute(key, value === true ? "" : String(value));
	}
}

function createElement(tag: string, info?: DomElementInfo | string): HTMLElement {
	const el = document.createElement(tag);
	if (typeof info === "string") {
		applyText(el, info);
		return el;
	}
	if (!info) return el;
	applyClasses(el, info.cls);
	applyAttrs(el, info.attr);
	if (info.text !== undefined) applyText(el, info.text);
	if (info.value !== undefined && "value" in el) {
		(el as HTMLInputElement).value = info.value;
	}
	if (info.type && "type" in el) (el as HTMLInputElement).type = info.type;
	if (info.placeholder && "placeholder" in el) {
		(el as HTMLInputElement).placeholder = info.placeholder;
	}
	if (info.href && "href" in el) (el as HTMLAnchorElement).href = info.href;
	if (info.title) el.title = info.title;
	info.parent?.appendChild(el);
	return el;
}

function define(target: object, name: string, value: unknown): void {
	Object.defineProperty(target, name, {
		value,
		writable: true,
		configurable: true,
	});
}

define(Node.prototype, "createEl", function (
	this: Node,
	tag: string,
	info?: DomElementInfo | string,
	callback?: (el: HTMLElement) => void,
) {
	const el = createElement(tag, info);
	// `document.createDiv()` has to land in <body>; a Document cannot take
	// children directly.
	const parent =
		this.nodeType === Node.DOCUMENT_NODE
			? ((this as Document).body ?? (this as Document).documentElement)
			: this;
	parent.appendChild(el);
	callback?.(el);
	return el;
});
define(Node.prototype, "createDiv", function (
	this: Node,
	info?: DomElementInfo | string,
	callback?: (el: HTMLElement) => void,
) {
	return (this as Node & {
		createEl: (tag: string, info?: unknown, cb?: (el: HTMLElement) => void) => HTMLElement;
	}).createEl("div", info, callback);
});
define(Node.prototype, "createSpan", function (
	this: Node,
	info?: DomElementInfo | string,
) {
	return (this as unknown as {
		createEl: (tag: string, info?: unknown) => HTMLElement;
	}).createEl("span", info);
});
define(Element.prototype, "setText", function (
	this: HTMLElement,
	value: string | DocumentFragment,
) {
	applyText(this, value);
});
define(Element.prototype, "appendText", function (
	this: HTMLElement,
	value: string,
) {
	this.appendChild(document.createTextNode(value));
});
define(Element.prototype, "setCssStyles", function (
	this: HTMLElement,
	styles: Record<string, string>,
) {
	for (const [prop, value] of Object.entries(styles)) {
		this.style.setProperty(prop, value);
	}
});
define(Element.prototype, "getText", function (this: HTMLElement) {
	return this.textContent ?? "";
});
define(Element.prototype, "empty", function (this: HTMLElement) {
	while (this.firstChild) this.removeChild(this.firstChild);
});
define(Element.prototype, "detach", function (this: HTMLElement) {
	this.remove();
});
define(Element.prototype, "addClass", function (
	this: HTMLElement,
	...classes: string[]
) {
	for (const cls of classes) this.classList.add(cls);
});
define(Element.prototype, "removeClass", function (
	this: HTMLElement,
	...classes: string[]
) {
	for (const cls of classes) this.classList.remove(cls);
});
define(Element.prototype, "toggleClass", function (
	this: HTMLElement,
	classes: string | string[],
	value: boolean,
) {
	for (const cls of Array.isArray(classes) ? classes : [classes]) {
		this.classList.toggle(cls, value);
	}
});
define(Element.prototype, "hasClass", function (this: HTMLElement, cls: string) {
	return this.classList.contains(cls);
});

define(globalThis, "createEl", (tag: string, info?: DomElementInfo | string) =>
	createElement(tag, info),
);
define(globalThis, "createDiv", (info?: DomElementInfo | string) =>
	createElement("div", info),
);
define(globalThis, "createSpan", (info?: DomElementInfo | string) =>
	createElement("span", info),
);

if (!window.matchMedia) {
	define(window, "matchMedia", (query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => undefined,
		removeListener: () => undefined,
		addEventListener: () => undefined,
		removeEventListener: () => undefined,
		dispatchEvent: () => false,
	}));
}

define(globalThis, "activeDocument", document);
define(globalThis, "activeWindow", window);
