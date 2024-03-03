# Setup kafka and elastic search
Run kafka then run elastic search
## Kafka

First, access folder:

```sh
cd docker-kafka
```
Then, initialize the Kafka:

```sh
docker-compose up -d
```
## Elastic search

First, access folder

```sh
cd docker-elk
```

Then, initialize the Elasticsearch users and groups required by docker-elk by executing the command:

```sh
docker-compose up setup
```

If everything went well and the setup completed without error, start the other stack components:

```sh
docker-compose up -d
```