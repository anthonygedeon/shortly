default: help

help:

tests:

install-tools:
	go get -u github.com/swaggo/swag/cmd/swag

fmt:
	go fmt ./

clean:
	go clean

doc:
	godoc -http=:6060

lint:
	go vet ./

deps:
	go get github.com/joho/godotenv
	go get github.com/lib/pq

swag-docs:
	swag

start-server:

stop-server:

watch-server:

restart-server: