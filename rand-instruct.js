/**
 * creates random instruct string with several sentences
 * by Mozer
 * @returns {string} 0-5 random instruct sentences
 */
function getRandInstruct() {
    let new_instruct = '';
	
	let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	let random_n0 = randomInt(0, 99);
	let random_n1 = randomInt(0, 99);
	let random_n2 = randomInt(0, 99);
	let random_n3 = randomInt(0, 99);
	let random_n4 = randomInt(0, 99);

	if (random_n0 < 10) {
		new_instruct += " Начни свой ответ с буквы А.";
	} 
	else if (random_n0 >= 10 && random_n0 < 20){
		new_instruct += " Начни свой ответ с буквы О.";
	}
	else if (random_n0 >= 20 && random_n0 < 30){
		new_instruct += " Начни свой ответ с буквы И.";
	}
	else if (random_n0 >= 30 && random_n0 < 40){
		new_instruct += " Начни свой ответ со слова 'Да'.";
	}
	else if (random_n0 >= 40 && random_n0 < 50){
		new_instruct += " Начни свой ответ со слова: 'Я '.";
	}
	else if (random_n0 >= 50 && random_n0 < 60){
		new_instruct += " Начни свой ответ со слова: 'Короче'.";
	}
	else if (random_n0 >= 60 && random_n0 < 70){
		new_instruct += " Начни свой ответ со слова: 'Блин'.";
	}
	else if (random_n0 >= 70 && random_n0 < 80){
		new_instruct += " Начни свой ответ со слова: 'Нет'.";
	}
	else if (random_n0 >= 80 && random_n0 < 90){
		new_instruct += " Начни свой ответ со слов: 'В общем'.";
	}
	else if (random_n0 >= 90 && random_n0 < 100){
		new_instruct += " Начни свой ответ со слова: 'Конечно'.";
	}
	
	if (random_n1 < 15) {
		new_instruct += " В ответе верни ровно 3 слова.";
	} 
	else if (random_n1 >= 15 && random_n1 < 30){
		new_instruct += " В ответе верни ровно 7 слов.";
	}
	else if (random_n1 >= 30 && random_n1 < 40){
		new_instruct += " В ответе верни ровно 2 предложения.";
	}
	else if (random_n1 >= 40 && random_n1 < 50){
		new_instruct += " В ответе верни ровно 3 предложения.";
	}

	if (random_n2 < 10){
		new_instruct += " Не соглашайся ни с чем!";
	} 
	else if (random_n2 >= 10 && random_n2 < 30){
		new_instruct += " Cоглашайся на всё!";
	}
	else if (random_n2 >= 30 && random_n2 < 40){
		new_instruct += " Вместо ответа пошути.";
	}
	else if (random_n2 >= 40 && random_n2 < 50){
		new_instruct += " Вместо ответа спроси что-нибудь.";
	}
	else if (random_n2 >= 50 && random_n2 < 60){
		new_instruct += " Вместо ответа расскажи шутку.";
	}
	
	if (random_n3 < 15){
		new_instruct += " Будь скромной.";
	}
	else if (random_n3 >= 15 && random_n3 < 30){
		new_instruct += " Будь стеснительной.";
	}
	else if (random_n3 >= 30 && random_n3 < 45){
		new_instruct += " Будь очень пошлой и матерись.";
	}
	else if (random_n3 >= 30 && random_n3 < 45){
		new_instruct += " Будь настойчивой.";
	}
	else if (random_n3 >= 45 && random_n3 < 60){
		new_instruct += " Будь грубой и матерись как сапожник, используй такие слова как 'Блин' или 'Пипец'.";
	}
	else if (random_n3 >= 60 && random_n3 < 75){
		new_instruct += " Будь очень грустной в ответе.";
	}
	else if (random_n3 >= 75 && random_n3 < 80){
		new_instruct += " Будь очень агрессивной и негативной в ответе.";
	}
	else if (random_n3 >= 80 && random_n3 < 90){
		new_instruct += " Будь уставшей и ленивой.";
	}
	else if (random_n3 >= 90 && random_n3 < 100){
		new_instruct += " Будь милой.";
	}	

	if (random_n4 < 15){
		new_instruct += " В конце задай вопрос.";
	}
	else if (random_n4 >= 15 && random_n4 < 30){
		new_instruct += " В конце пошути.";
	}
	else if (random_n4 >= 30 && random_n4 < 40){
		new_instruct += " В конце сделай комплимент.";
	}
	else if (random_n4 >= 40 && random_n4 < 60){
		new_instruct += " В конце обязательно оскорби его грубым обзывательством, например, придурок, дурак и т.д.";
	}
	
	if (new_instruct)
	{
		new_instruct = "[Инструкция:"+new_instruct+"]";
	}	
	
	return new_instruct;
}


module.exports = {
    getRandInstruct
};
