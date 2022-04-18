install:
	npm install --production

up:
	docker-compose build
	docker-compose up -d

down:
	docker-compose down --remove-orphans