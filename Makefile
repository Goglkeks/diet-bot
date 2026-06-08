# Запуск проекта (просто открыть index.html)
start:
	open index.html

# Запуск с live-server (если установлен)
serve:
	npx live-server

# Проверка кода линтером
lint:
	npx eslint js/*.js

# Автоисправление кода
lint-fix:
	npx eslint js/*.js --fix

# Очистка от мусора
clean:
	rm -rf node_modules package-lock.json

# Помощь
help:
	@echo "Команды:"
	@echo "  make start     - открыть index.html"
	@echo "  make serve     - запустить live-server"
	@echo "  make lint      - проверить код"
	@echo "  make lint-fix  - исправить код"
	@echo "  make clean     - удалить зависимости"