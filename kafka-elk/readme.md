# Kafka and ELK stack on Docker

Run the latest version of the [Elastic stack][elk-stack] with Docker and Docker Compose.

### Prerequisities
In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* 4 GB of RAM on docker

#### Environment Variables

* `ELASTIC_VERSION` - elastic search version variables
* `IPADDRESS` - Your ipaddress network 

### Usage
First, Check IP Address in your network and set environment variable IPADDRESS and run command line:
```sh
cd kafka-elk
```
Then, run this command to build docker.
```sh
docker-compose up -d
```

#### Volumes

* `/logstash/config/` - Configure logstash
* `/logstash/pipeline/` - Data pipeline logstash
* `/logstash/vendor/` - Lib for logstash