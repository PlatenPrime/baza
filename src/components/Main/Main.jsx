import React from 'react';
import style from './Main.module.css';

const Main = () => {
	return (
		<div className={style.main}>
			<h3>Добро пожаловать на сайт, где на данный момент во вкладке "Инструменты" собраны все основные внешние ресурсы, которые используются для обучения и работы! <br />
				Переходи в нужную категорию и получай удовольствие!
			</h3>
		</div>
	);
};

export default Main;