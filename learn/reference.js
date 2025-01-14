let refs = {
	'Sprite.html': {
		0: [
			'x',
			'y',
			'w / width',
			'h / height',
			'd / diameter',
			'r / radius',
			'pos / position',
			'rotation',
			'color / fill',
			'stroke',
			'text',
			'textColor',
			'textSize',
			'visible'
		],
		1: ['collider', 'dynamic', 'kinematic', 'static'],
		2: ['vel / velocity', 'speed', 'direction', 'move', 'moveTo', 'moveTowards', 'angleTo'],
		3: ['img / image', 'scale', 'debug'],
		5: ['collides', 'colliding', 'collided'],
		6: ['overlap', 'overlapping', 'overlapped', 'layer'],
		7: ['rotate', 'rotateTo', 'rotateTowards', 'rotationSpeed'],
		9: ['bounciness', 'friction', 'density', 'drag', 'mass', 'rotationDrag', 'rotationLock'],
		11: ['shape'],
		12: ['draw', 'update'],
		'group.html?page=6': ['life'],
		'sprite_animation.html?page=2': ['ani / animation', 'addAni / addAnimation', 'mirror'],
		'sprite_animation.html?page=4': ['spriteSheet', 'anis / animations', 'addAnis / addAnimations', 'pixelPerfect'],
		'tiles.html?page=0': ['tile'],
		'tiles.html?page=1': ['tileSize'],
		'world.html?page=0': ['allowSleeping', 'sleeping'],
		'input_devices.html?page=3': ['mouse']
	},
	'Group.html': {
		0: ['sprite properties', 'GroupSprite', 'move functions'],
		1: ['collide functions', 'amount', 'arrow setters'],
		2: ['overlap functions', 'remove'],
		3: ['allSprites'],
		5: ['removeAll', 'SubGroup'],
		'group.html?page=6': ['autoCull', 'cull']
	},
	'Sprite_Animation.html': {
		0: ['animation', 'loadAni / loadAnimation', 'frameDelay'],
		1: ['play', 'stop', 'rewind', 'loop', 'noLoop', 'frame', 'nextFrame', 'previousFrame', 'scale'],
		4: ['offset']
	},
	'Input_Devices.html': {
		0: ['mouse', 'presses', 'pressing', 'released', 'kb / keyboard'],
		4: ['contro / controllers']
	},
	'Camera.html': {
		0: ['x', 'y'],
		1: ['zoom', 'zoomTo', 'on', 'off', 'mouse']
	},
	'Canvas.html': {
		0: ['w', 'h', '"w:h"'],
		1: ['"pixelated"']
	},
	'World.html': {
		0: ['gravity', 'allowSleeping'],
		1: ['autoStep', 'step']
	},
	'q5.js basics': {
		'https://p5js.org/reference/#/p5': [
			'let',
			'const',
			'===',
			'>=',
			'<',
			'<=',
			'if-else',
			'function',
			'return',
			'boolean',
			'string',
			'number',
			'object',
			'for',
			'while',
			'console',
			'random',
			'round',
			'sin',
			'cos',
			'max',
			'min',
			'dist'
		]
	},
	'q5.js environment': {
		'https://p5js.org/reference/#/p5': [
			'width',
			'height',
			'frameCount',
			'frameRate',
			'noCursor',
			'noLoop',
			'loadImage',
			'loadFont',
			'loadJSON',
			'storeItem',
			'getItem',
			'clearStorage'
		]
	},
	'q5.js 2D': {
		'https://p5js.org/reference/#/p5': [
			'background',
			'clear',
			'fill',
			'noFill',
			'stroke',
			'noStroke',
			'circle',
			'rect',
			'line',
			'image',
			'tint',
			'text',
			'textAlign',
			'textSize',
			'textFont'
		]
	},
	'q5.js sound': {
		'https://p5js.org/reference/#/p5': ['loadSound'],
		'https://p5js.org/reference/#/p5.SoundFile': ['play', 'stop', 'loop', 'setVolume', 'pan']
	}
};

let refsDiv = document.getElementById('refs');

for (let refPage in refs) {
	let ref = refs[refPage];
	let className = refPage;
	let p5playRef = true;
	if (className.slice(0, 2) != 'q5') {
		className = className.split('.')[0];
		if (className == 'Sprite_Animation') className = 'Animation';
		if (className == 'Input_Devices') className = 'Input';
		refPage = refPage.toLowerCase();
	} else {
		if (className == 'q5.js basics') className = 'JavaScript basics';
		refPage = 'https://p5js.org/reference';
		p5playRef = false;
	}

	let div = document.createElement('div');
	if (className == 'Sprite') div.className = 'full';
	let heading = document.createElement('h2');
	heading.innerHTML = `<a href="${refPage}">${className}</a>`;
	div.append(heading);
	refsDiv.append(div);

	let links = [];
	for (let pageNum in ref) {
		let url;
		if (pageNum.length <= 2) {
			url = refPage + '?page=' + pageNum;
		} else {
			url = pageNum;
		}
		let topics = ref[pageNum];
		for (let topic of topics) {
			let a = document.createElement('a');
			if (p5playRef) {
				a.href = url;
			} else {
				a.href = url + '/' + topic;
				a.target = '_blank';
			}
			a.innerHTML = topic;
			links.push(a);
		}
	}

	// if (className == 'Sprite') {
	// 	links = [
	// 		...links.slice(0, 4),
	// 		...links.slice(4).sort((a, b) => {
	// 			let aText = a.innerHTML;
	// 			let bText = b.innerHTML;
	// 			if (aText < bText) {
	// 				return -1;
	// 			} else if (aText > bText) {
	// 				return 1;
	// 			} else {
	// 				return 0;
	// 			}
	// 		})
	// 	];
	// }

	for (let link of links) {
		div.append(link);
	}
}
