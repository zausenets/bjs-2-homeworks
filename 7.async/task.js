class AlarmClock {
	constructor() {
		this.alarmCollection = []; // коллекция звонков
		this.intervalId = null; // id таймера
	}

	addClock(time, callback) { // добавляет новый звонок в коллекцию существующих, если его еще нет
		if (!callback || !time) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some(alarmItem => alarmItem.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		const newAlarm = {
			callback,
			time,
			canCall: true
		};
		this.alarmCollection.push(newAlarm);
	}

	removeClock(time) { // удаляет звонки по определённому времени
		this.alarmCollection = this.alarmCollection.filter(alarmItem => alarmItem.time !== time);
	}

	getCurrentFormattedTime() { // возвращает текущее время в строковом формате HH:MM
		let now = new Date();
		let currentHours = now.getHours();
		let currentMinutes = now.getMinutes();

		let currentHH = currentHours < 10 ? "0" + currentHours : currentHours;
		let currentMM = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
		let cerrentTime = currentHH + ":" + currentMM;
		return cerrentTime;
	}

	start() { // запускает будильник
		if (this.intervalId || this.alarmCollection.length === 0) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(alarmItem => {
				if (alarmItem.time === this.getCurrentFormattedTime() && alarmItem.canCall) {
					alarmItem.canCall = false;
					alarmItem.callback();
				}
			})
		}, 1000)
	}

	stop() { // останавливает выполнение интервала будильника
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() { // сбрасывает возможность запуска всех звонков
		this.alarmCollection.forEach(alarmItem => alarmItem.canCall = true);
	}

	clearAlarms() { // удаляет все звонки
		this.stop();
		this.alarmCollection = [];
	}
}