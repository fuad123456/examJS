import { AnswerType, QuestionsType } from "./types";

export const questionsData:QuestionsType=[
	{
		id:0,
		questionTitle:"Представьтесь пожалуйста",
		type:"simple",
		time:20,
		isAnswered:false,
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:1,
		questionTitle:"Какими технологиями вам прежде приходилось работать? Перечислите через запятую",
		type:"expanded",
		time:20,
		isAnswered:false,
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:2,
		questionTitle:"Какая типизация в JavaScript",
		type:"single",
		time:20,
		isAnswered:false,
		variants:[
			{variant:"Строгая", correct:false, variantID:1},
			{variant:"Нестрогая", correct:true, variantID:2},
		],
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:3,
		questionTitle:"Сколько типов данных есть в JavaScript (ES6)",
		type:"single",
		time:20,
		isAnswered:false,
		variants:[
			{variant:"8", correct:true, variantID:1},
			{variant:"7", correct:false, variantID:2},
			{variant:"6", correct:false, variantID:3},
			{variant:"2", correct:false, variantID:4},
		],
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:4,
		questionTitle:"Сколько есть способов объявления перменной (ES6)",
		type:"single",
		time:20,
		isAnswered:false,
		variants:[
			{variant:"2", correct:false, variantID:1},
			{variant:"3", correct:true, variantID:2},
			{variant:"4", correct:false, variantID:3},
			{variant:"8", correct:false, variantID:4},
		],
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:5,
		questionTitle:"Способами объявления переменной в JavaScript являются ?",
		type:"multiple",
		time:20,
		isAnswered:false,
		variants:[
			{variant:"var", correct:true, variantID:1},
			{variant:"let", correct:true, variantID:2},
			{variant:"int", correct:false, variantID:3},
			{variant:"Bool", correct:false, variantID:4},
			{variant:"char", correct:false, variantID:5},
			{variant:"BigInt", correct:false, variantID:6},
			{variant:"variable", correct:false, variantID:7},
			{variant:"string", correct:false, variantID:8},
			{variant:"const", correct:true, variantID:9},
		],
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:6,
		questionTitle:"Чем отличаются примитивные типы данных от ссылочных",
		type:"multiple",
		time:20,
		isAnswered:false,
		variants:[
			{variant:"Ссылочные типы хранятся по ссылке в памяти, а примитивные хранятся по значению", correct:true, variantID:1},
			{variant:"Ссылочные типы хранятся в LocalStorage, а примитивные хранятся в SessionStorage", correct:false, variantID:2},
			{variant:"К ссылочным типам данных нельзя применить математические операции, а к примитивным можно", correct:false, variantID:3},
			{variant:"Ссылочные типы хранятся на жестком диске, а примитивные хранятся в браузере", correct:false, variantID:4},
			{variant:"Ссылочные и примитивные типы мало чем отличаются", correct:false, variantID:5},
			{variant:"Все вышеперечисленные варианты", correct:false, variantID:6},
		],
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:7,
		questionTitle:"Как называется функция которая является аргументом при объявлении new Promise",
		type:"single",
		time:30,
		isAnswered:false,
		variants:[
			{variant:"then", correct:false, variantID:1},
			{variant:"reject", correct:false, variantID:2},
			{variant:"catch", correct:false, variantID:3},
			{variant:"fulfilled", correct:false, variantID:4},
			{variant:"executor", correct:true, variantID:5},
			{variant:"function declaration", correct:false, variantID:6},
			{variant:"function expression", correct:false, variantID:7},
			{variant:"function of Promise", correct:false, variantID:8},
			{variant:"IIFE (Immidiately Invoked Function Expression)", correct:false, variantID:9},
		],
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:8,
		questionTitle:"Каким типом данных является второй аргумент setTimeout",
		type:"single",
		time:30,
		isAnswered:false,
		variants:[
			{variant:"boolean", correct:false, variantID:1},
			{variant:"integer", correct:false, variantID:2},
			{variant:"string", correct:false, variantID:3},
			{variant:"number", correct:true, variantID:4},
			{variant:"BigInt", correct:false, variantID:5},
			{variant:"object", correct:false, variantID:6},
			{variant:"function", correct:false, variantID:7},
			{variant:"array", correct:false, variantID:8},
		],
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
	{
		id:9,
		questionTitle:"Как найти элемент в DOM по определенному селектору",
		type:"multiple",
		time:30,
		isAnswered:false,
		variants:[
			{variant:"document.getElementById()", correct:true, variantID:1},
			{variant:"document.querySelector()", correct:true, variantID:2},
			{variant:"node.querySelector()", correct:false, variantID:3},
			{variant:"new DOM().querySelector()", correct:false, variantID:4},
			{variant:"DOM.querySelector()", correct:false, variantID:5},
			{variant:"window.getElementById()", correct:false, variantID:6},
		],
		isCorrectAnswered:false,
		answers:{} as AnswerType
	},
]
