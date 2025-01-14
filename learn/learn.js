/* main.js */

function toggleDarkMode() {
	if (document.body.className == 'dark') {
		document.body.className = 'light';
	} else {
		document.body.className = 'dark';
	}
	if (typeof setEditorThemes != 'undefined') setEditorThemes();

	// Save the preference
	localStorage.setItem('darkMode', document.body.className);
}

{
	let pref = localStorage.getItem('darkMode');
	pref ??= window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light';

	document.body.className = pref;
}

/* learn.js */

let args = {};

{
	let url = location.href.split('?');
	if (url.length > 1) {
		let params = new URLSearchParams(url[1]);
		for (let pair of params.entries()) {
			args[pair[0]] = pair[1];
		}
	}
}

let pages = document.getElementsByClassName('page');
let pageNav = document.getElementById('pageNav');
let currentPage = 0;

async function start() {
	function loadScript(src) {
		return new Promise(function (resolve) {
			let script = document.createElement('script');
			script.src = src;
			script.onload = resolve;
			document.body.appendChild(script);
		});
	}

	async function loadScripts(sources) {
		for (let src of sources) await loadScript(src);
	}

	if (navigator.onLine) {
		await loadScripts([
			'https://cdn.jsdelivr.net/npm/ace-builds@1.18.0/src-min-noconflict/ace.min.js',
			'https://cdn.jsdelivr.net/npm/ace-builds@1.18.0/src-min-noconflict/ext-language_tools.js',
			'https://cdn.jsdelivr.net/npm/marked@4.3.0/marked.min.js'
		]);
	} else {
		await loadScripts([
			'ace/ace.min.js',
			'ace/ext-language_tools.js',
			'ace/mode-javascript.js',
			'ace/theme-dracula.js',
			'ace/theme-xcode.js',
			'marked/marked.min.js'
		]);
	}

	if (pageNav) {
		let previousPage = document.getElementById('prevPage');
		previousPage.onclick = function () {
			if (currentPage - 1 > -1) {
				let i = currentPage - 1;
				let url = `?page=${i}`;
				history.pushState({}, 'p5play : Sprite : ' + i, url);
				loadPage(i);
			}
		};

		let nextPage = document.getElementById('nextPage');
		nextPage.onclick = function () {
			if (currentPage + 1 < pages.length) {
				let i = currentPage + 1;
				let url = `?page=${i}`;
				history.pushState({}, 'p5play : Sprite : ' + i, url);
				loadPage(i);
			}
		};

		mie.load();
		loadPage();
	}
}
start();

function loadPage(pageNum) {
	pageNum = pageNum ?? args.page ?? 0;

	for (let i = 0; i < pages.length; i++) {
		let el = pageNav.children[i];
		if (el.dataset.page == pageNum) {
			el.className = 'active';
		} else {
			el.className = '';
		}
	}
	for (let mini of mie) {
		mini.remove();
	}
	for (let page of pages) {
		page.style.display = 'none';
	}
	let page = document.getElementById('page-' + pageNum);
	page.style.display = 'flex';
	mie.loadMinis(page);
	setEditorThemes();
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // Chrome, Firefox, and Opera
	currentPage = parseInt(pageNum);

	document.getElementById('toc').style.display = 'flex';
}

function setEditorThemes() {
	if (document.body.className == 'dark') {
		mie.theme = 'dark';
	} else {
		mie.theme = 'light';
	}
}

// function setup() {
// 	noCanvas();
// 	pagesRead = getItem('pagesRead');
// 	if (pagesRead === null) {
// 		pagesRead = [];
// 	}
// 	let base = location.href.split('/');
// 	base = base[base.length - 1];
// 	if (pagesRead.indexOf(base) === -1) {
// 		pagesRead.push(base);
// 		storeItem('pagesRead', pagesRead);
// 	}
// }

window.addEventListener('keydown', function (e) {
	if (
		(e.key == ' ' ||
			e.key == '/' ||
			e.key == 'ArrowUp' ||
			e.key == 'ArrowDown' ||
			e.key == 'ArrowLeft' ||
			e.key == 'ArrowRight') &&
		e.target == document.body
	) {
		e.preventDefault();
	}
});
