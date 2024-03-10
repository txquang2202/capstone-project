# Kafka and ELK stack on Docker

Run the latest version of the [Elastic stack][elk-stack] with Docker and Docker Compose.

### Prerequisities
In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* 4 GB of RAM on docker

#### Set Environment Variables

* `ELASTIC_VERSION` - elastic search version variables
* `HOST_IP` - Your ipaddress network 

### Usage
#### 1. Run command line:
```sh
cd kafka-elk
```
#### 2. First, Check IP Address in your network and set .env `HOST_IP`
  ```
  HOST_IP=${your_ip_addres}
  ```
#### 3. Then, run this command to build docker.
```sh
docker-compose up -d
```
#### 4. Install dependencies
```sh
npm install
```
#### 5. Waiting start kafka server and run 
```sh
npm run start
```

### Volumes

* `/logstash/config/` - Configure logstash
* `/logstash/pipeline/` - Data pipeline logstash
* `/logstash/vendor/` - Lib for logstash
