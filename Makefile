run:
	git pull
	sudo docker-compose up -d

build:
	git pull
	sudo docker build -t backend-example . 
	sudo docker-compose up -d

buildlink:
	git pull
	sudo docker stop backend-example
	sudo docker rm backend-example
	sudo docker run -d --name backend-example --link mariadb:mariadb -p 80:80 backend-example

buildport:
	git pull
	sudo docker build -t backend-example . 
	sudo docker stop backend-example
	sudo docker rm backend-example
	sudo docker run -d --name backend-example -p 80:80 backend-example