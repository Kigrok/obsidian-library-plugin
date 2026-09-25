// Runtime stand-in for the `obsidian` module. The real npm package ships types
// only, so vitest.config.ts aliases `obsidian` here. Everything the plugin
// touches at runtime lives in this file; tests configure it through the
// exported helpers (stubRequest, createStubApp, setStubLanguage).
import type {
	App,
	EventRef,
	PluginManifest,
	RequestUrlParam,
	RequestUrlResponse,
	WorkspaceLeaf as WorkspaceLeafApi,
} from "obsidian";

// --- requestUrl ------------------------------------------------------------

interface StubRoute {
	match: string | RegExp;
	method?: string;
	status?: number;
	json?: unknown;
	text?: string;
	networkError?: boolean;
}

const routes: StubRoute[] = [];
export const requestLog: string[] = [];

export function stubRequest(route: StubRoute): void {
	routes.push(route);
}

export function resetRequests(): void {
	routes.length = 0;
	requestLog.length = 0;
}

export function requestUrl(
	param: RequestUrlParam | string,
): Promise<RequestUrlResponse> {
	const url = typeof param === "string" ? param : param.url;
	const method = (
		typeof param === "string" ? "GET" : (param.method ?? "GET")
	).toUpperCase();
	requestLog.push(url);
	for (const route of routes) {
		if ((route.method ?? "GET").toUpperCase() !== method) continue;
		const hit =
			typeof route.match === "string"
				? url.includes(route.match)
				: route.match.test(url);
		if (!hit) continue;
		if (route.networkError) {
			return Promise.reject(new Error("stub network error"));
		}
		return Promise.resolve({
			status: route.status ?? 200,
			headers: {},
			json: route.json,
			text: route.text ?? "",
			arrayBuffer: new ArrayBuffer(0),
		});
	}
	return Promise.resolve({
		status: 404,
		headers: {},
		json: undefined,
		text: "not stubbed",
		arrayBuffer: new ArrayBuffer(0),
	});
}

// --- language --------------------------------------------------------------

let language = "en";

export function getLanguage(): string {
	return language;
}

export function setStubLanguage(value: string): void {
	language = value;
}

// --- misc API --------------------------------------------------------------

export function normalizePath(path: string): string {
	return path
		.replace(/\\/g, "/")
		.replace(/\/+/g, "/")
		.replace(/^\/|\/$/g, "");
}

export function setIcon(el: HTMLElement, icon: string): void {
	el.setAttribute("data-icon", icon);
}

export const Platform = {
	isDesktop: true,
	isDesktopApp: true,
	isMobile: false,
	isMobileApp: false,
	isIosApp: false,
	isAndroidApp: false,
	isMacOS: true,
	isWin: false,
	isLinux: false,
};

export class Notice {
	static instances: Notice[] = [];
	message: string | DocumentFragment;

	constructor(message: string | DocumentFragment) {
		this.message = message;
		Notice.instances.push(this);
	}

	setMessage(message: string | DocumentFragment): this {
		this.message = message;
		return this;
	}

	hide(): void {
		const index = Notice.instances.indexOf(this);
		if (index >= 0) Notice.instances.splice(index, 1);
	}
}

// --- files and views -------------------------------------------------------

export class TFile {
	path: string;
	name: string;
	basename: string;
	extension: string;
	stat = { ctime: 0, mtime: 0, size: 0 };
	parent: null = null;

	constructor(path = "note.md") {
		this.path = path;
		const name = path.split("/").pop() ?? path;
		this.name = name;
		const dot = name.lastIndexOf(".");
		this.basename = dot > 0 ? name.slice(0, dot) : name;
		this.extension = dot > 0 ? name.slice(dot + 1) : "";
	}
}

export class WorkspaceLeaf {
	view: unknown = null;
	app: App = {} as App;
}

export class MarkdownView {
	file: TFile | null = null;
}

export class ItemView {
	app: App;
	leaf: WorkspaceLeaf;
	readonly events: EventRef[] = [];
	private container?: HTMLElement;

	constructor(leaf: WorkspaceLeaf) {
		this.leaf = leaf;
		this.app = leaf.app;
	}

	get containerEl(): HTMLElement {
		if (!this.container) {
			this.container = document.createElement("div");
			const content = document.createElement("div");
			content.classList.add("view-content");
			this.container.appendChild(content);
		}
		return this.container;
	}

	get contentEl(): HTMLElement {
		return (this.containerEl.lastElementChild ??
			document.createElement("div")) as HTMLElement;
	}

	getViewType(): string {
		return "stub-view";
	}

	getDisplayText(): string {
		return "Stub";
	}

	getIcon(): string {
		return "stub";
	}

	async onOpen(): Promise<void> {
		// stub
	}

	async onClose(): Promise<void> {
		// stub
	}

	registerEvent(ref: EventRef): EventRef {
		this.events.push(ref);
		return ref;
	}

	registerDomEvent(): void {
		// stub
	}
}

// --- modals ----------------------------------------------------------------

export class Modal {
	static instances: Modal[] = [];
	app: App;
	containerEl: HTMLElement;
	modalEl: HTMLElement;
	contentEl: HTMLElement;
	titleEl: HTMLElement;
	opened = false;

	constructor(app: App) {
		this.app = app;
		this.containerEl = document.createElement("div");
		this.modalEl = document.createElement("div");
		this.titleEl = document.createElement("div");
		this.contentEl = document.createElement("div");
		Modal.instances.push(this);
	}

	setTitle(title: string): this {
		this.titleEl.textContent = title;
		return this;
	}

	open(): void {
		this.opened = true;
		this.onOpen();
	}

	close(): void {
		this.opened = false;
		this.onClose();
	}

	onOpen(): void {
		// stub
	}

	onClose(): void {
		// stub
	}
}

export class SuggestModal<T> extends Modal {
	inputEl: HTMLInputElement;
	resultContainerEl: HTMLElement;

	constructor(app: App) {
		super(app);
		this.inputEl = document.createElement("input");
		this.resultContainerEl = document.createElement("div");
	}

	setPlaceholder(_value: string): this {
		return this;
	}

	setInstructions(_instructions: unknown): this {
		return this;
	}

	limit = 0;
	emptyStateText = "";

	getItems(): T[] {
		return [];
	}

	getItemText(_item: T): string {
		return "";
	}

	onChooseItem(_item: T, _event: unknown): void {
		// stub
	}

	renderSuggestion(_item: T, _el: HTMLElement): void {
		// stub
	}
}

export class FuzzySuggestModal<T> extends SuggestModal<T> {
	getItems(): T[] {
		return [];
	}

	getItemText(_item: T): string {
		return "";
	}

	onChooseSuggestion(_item: T, _event: unknown): void {
		// stub
	}
}

// --- plugin API ------------------------------------------------------------

export interface StubCommand {
	id: string;
	name: string;
	callback?: () => void;
	checkCallback?: (checking: boolean) => boolean;
}

export interface StubTextComponent {
	inputEl: HTMLInputElement;
	setPlaceholder(value: string): StubTextComponent;
	setValue(value: string): StubTextComponent;
	onChange(cb: (value: string) => unknown): StubTextComponent;
}

export class TextComponent implements StubTextComponent {
	inputEl = document.createElement("input");
	private handler: ((value: string) => unknown) | null = null;

	setPlaceholder(value: string): this {
		this.inputEl.placeholder = value;
		return this;
	}

	setValue(value: string): this {
		this.inputEl.value = value;
		return this;
	}

	getValue(): string {
		return this.inputEl.value;
	}

	onChange(cb: (value: string) => unknown): this {
		this.handler = cb;
		this.inputEl.addEventListener("input", () => {
			void this.handler?.(this.inputEl.value);
		});
		return this;
	}
}

export class DropdownComponent {
	selectEl = document.createElement("select");
	private handler: ((value: string) => unknown) | null = null;

	addOption(value: string, display: string): this {
		const option = document.createElement("option");
		option.value = value;
		option.textContent = display;
		this.selectEl.appendChild(option);
		return this;
	}

	addOptions(options: Record<string, string>): this {
		for (const [value, display] of Object.entries(options)) {
			this.addOption(value, display);
		}
		return this;
	}

	setValue(value: string): this {
		this.selectEl.value = value;
		return this;
	}

	getValue(): string {
		return this.selectEl.value;
	}

	setDisabled(disabled: boolean): this {
		this.selectEl.disabled = disabled;
		return this;
	}

	onChange(cb: (value: string) => unknown): this {
		this.handler = cb;
		this.selectEl.addEventListener("change", () => {
			void this.handler?.(this.selectEl.value);
		});
		return this;
	}
}

export class ButtonComponent {
	buttonEl = document.createElement("button");
	clickHandler: (() => unknown) | null = null;

	setButtonText(value: string): this {
		this.buttonEl.textContent = value;
		return this;
	}

	setIcon(icon: string): this {
		this.buttonEl.setAttribute("data-icon", icon);
		return this;
	}

	setTooltip(value: string): this {
		this.buttonEl.title = value;
		return this;
	}

	setWarning(): this {
		this.buttonEl.classList.add("mod-warning");
		return this;
	}

	setCta(): this {
		this.buttonEl.classList.add("mod-cta");
		return this;
	}

	setDisabled(disabled: boolean): this {
		this.buttonEl.disabled = disabled;
		return this;
	}

	// A click on the button plays the user's press, as in the app.
	onClick(cb: () => unknown): this {
		this.clickHandler = cb;
		this.buttonEl.addEventListener("click", () => {
			void this.clickHandler?.();
		});
		return this;
	}
}

export class Setting {
	settingEl: HTMLElement;
	nameEl: HTMLElement;
	descEl: HTMLElement;
	controlEl: HTMLElement;

	constructor(containerEl: HTMLElement) {
		this.settingEl = document.createElement("div");
		this.settingEl.classList.add("setting-item");
		this.nameEl = document.createElement("div");
		this.descEl = document.createElement("div");
		this.controlEl = document.createElement("div");
		this.settingEl.appendChild(this.nameEl);
		this.settingEl.appendChild(this.descEl);
		this.settingEl.appendChild(this.controlEl);
		containerEl.appendChild(this.settingEl);
	}

	setName(name: string): this {
		this.nameEl.textContent = name;
		return this;
	}

	setDesc(desc: string): this {
		this.descEl.textContent = desc;
		return this;
	}

	setHeading(): this {
		this.settingEl.classList.add("setting-item-heading");
		return this;
	}

	setClass(cls: string): this {
		this.settingEl.classList.add(cls);
		return this;
	}

	addText(cb: (component: TextComponent) => unknown): this {
		const component = new TextComponent();
		cb(component);
		this.controlEl.appendChild(component.inputEl);
		return this;
	}

	addDropdown(cb: (component: DropdownComponent) => unknown): this {
		const component = new DropdownComponent();
		cb(component);
		this.controlEl.appendChild(component.selectEl);
		return this;
	}

	addButton(cb: (component: ButtonComponent) => unknown): this {
		const component = new ButtonComponent();
		cb(component);
		this.controlEl.appendChild(component.buttonEl);
		return this;
	}

	addToggle(cb: (component: { toggleEl: HTMLElement; setValue(v: boolean): unknown; onChange(cb: (v: boolean) => unknown): unknown }) => unknown): this {
		const toggleEl = document.createElement("input");
		toggleEl.type = "checkbox";
		const component = {
			toggleEl,
			setValue: (v: boolean) => {
				toggleEl.checked = v;
				return component;
			},
			// A `change` event on the checkbox plays the user's click.
			onChange: (cb: (v: boolean) => unknown) => {
				toggleEl.addEventListener("change", () => {
					void cb(toggleEl.checked);
				});
				return component;
			},
		};
		cb(component);
		this.controlEl.appendChild(toggleEl);
		return this;
	}
}

export class PluginSettingTab {
	app: App;
	containerEl: HTMLElement;

	constructor(app: App, _plugin: unknown) {
		this.app = app;
		this.containerEl = document.createElement("div");
	}

	display(): void {
		// stub
	}

	hide(): void {
		// stub
	}
}

export class Plugin {
	app: App;
	manifest: PluginManifest;
	commands: StubCommand[] = [];
	settingTabs: PluginSettingTab[] = [];
	views = new Map<string, (leaf: WorkspaceLeaf) => unknown>();
	ribbonIcons: string[] = [];
	events: EventRef[] = [];
	domEvents: number = 0;
	intervals: number[] = [];
	disposers: Array<() => void> = [];
	private data: unknown = null;

	constructor(app: App, manifest: PluginManifest) {
		this.app = app;
		this.manifest = manifest;
	}

	onload(): void {
		// stub
	}

	onunload(): void {
		// stub
	}

	addCommand(command: StubCommand): StubCommand {
		this.commands.push(command);
		return command;
	}

	addRibbonIcon(icon: string): HTMLElement {
		this.ribbonIcons.push(icon);
		return document.createElement("div");
	}

	addSettingTab(tab: PluginSettingTab): void {
		this.settingTabs.push(tab);
	}

	registerView(
		type: string,
		factory: (leaf: WorkspaceLeaf) => unknown,
	): void {
		this.views.set(type, factory);
	}

	registerEvent(ref: EventRef): EventRef {
		this.events.push(ref);
		return ref;
	}

	registerDomEvent(): void {
		this.domEvents += 1;
	}

	registerInterval(id: number): number {
		this.intervals.push(id);
		return id;
	}

	register(disposer: () => void): void {
		this.disposers.push(disposer);
	}

	async loadData(): Promise<unknown> {
		return this.data;
	}

	async saveData(data: unknown): Promise<void> {
		this.data = data;
	}
}

// --- app factory for the bundle smoke test ---------------------------------

type Listener = (...args: unknown[]) => void;

export interface StubEmitter {
	on(name: string, cb: Listener): EventRef;
	off(ref: EventRef): void;
	emit(name: string, ...args: unknown[]): void;
}

function createEmitter(): StubEmitter {
	const listeners = new Map<string, Listener[]>();
	return {
		on(name, cb) {
			const list = listeners.get(name) ?? [];
			list.push(cb);
			listeners.set(name, list);
			return { name, cb };
		},
		off(ref) {
			const entry = ref as unknown as { name: string; cb: Listener };
			const list = listeners.get(entry.name);
			if (!list) return;
			const index = list.indexOf(entry.cb);
			if (index >= 0) list.splice(index, 1);
		},
		emit(name, ...args) {
			for (const cb of [...(listeners.get(name) ?? [])]) cb(...args);
		},
	};
}

export interface StubApp {
	app: App;
	workspace: StubEmitter;
	metadataCache: StubEmitter;
	vault: StubEmitter;
	setActiveFile(file: TFile | null): void;
	setActiveView(view: unknown): void;
	runLayoutReady(): void;
}

export function createStubApp(): StubApp {
	const workspace = createEmitter();
	const metadataCache = createEmitter();
	const vault = createEmitter();
	const readyCallbacks: Array<() => void> = [];
	let activeFile: TFile | null = null;
	let activeView: unknown = null;

	const app = {
		workspace: {
			...workspace,
			onLayoutReady: (cb: () => void) => {
				readyCallbacks.push(cb);
			},
			getActiveFile: () => activeFile,
			getLeavesOfType: () => [] as WorkspaceLeafApi[],
			getActiveViewOfType: () => activeView,
			detachLeavesOfType: () => undefined,
			getLeaf: () => new WorkspaceLeaf(),
			revealLeaf: () => undefined,
			setActiveLeaf: () => undefined,
		},
		metadataCache: {
			...metadataCache,
			getFileCache: () => null,
			getFirstLinkpathDest: () => null,
		},
		vault: {
			...vault,
			getFiles: () => [] as TFile[],
			getMarkdownFiles: () => [] as TFile[],
			getAbstractFileByPath: () => null,
			getFileByPath: () => null,
			getResourcePath: () => "",
			read: () => Promise.resolve(""),
			readBinary: () => Promise.resolve(new ArrayBuffer(0)),
		},
		fileManager: {
			processFrontMatter: () => Promise.resolve(),
		},
	};

	return {
		app: app as unknown as App,
		workspace,
		metadataCache,
		vault,
		setActiveFile: (file) => {
			activeFile = file;
		},
		setActiveView: (view) => {
			activeView = view;
		},
		runLayoutReady: () => {
			for (const cb of readyCallbacks.splice(0)) cb();
		},
	};
}
