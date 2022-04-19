install:
	npm install --production

up:
	docker-compose up --build
	# docker-compose up -d

down:
	docker-compose down --remove-orphans