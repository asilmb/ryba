build:
	docker build . -t asyl/ryba-app

docker:
	docker run -p 49160:8080  asyl/ryba-app