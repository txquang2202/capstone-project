# Kafka and ELK stack on Docker

Run the latest version of the [Elastic stack][elk-stack] with Docker and Docker Compose.

### Prerequisities

In order to run this container you'll need docker installed.

- [Windows](https://docs.docker.com/windows/started)
- [OS X](https://docs.docker.com/mac/started/)
- 4 GB of RAM on docker

#### Set Environment Variables

- `ELASTIC_VERSION` - elastic search version variables

### Usage

#### 1. Run this command to build docker.

```sh
docker-compose up -d
```

#### 2. Install dependencies

```sh
npm install
```

#### 3. Waiting start kafka server and run

```sh
npm run dev
```

#### \*NOTE: if windows don't, please change your host Docker in file `C:\Windows\System32\drivers\etc\host`, set localhost to 127.0.0.1 as:

```
127.0.0.1 localhost
```

### Volumes

- `/logstash/config/` - Configure logstash
- `/logstash/pipeline/` - Data pipeline logstash
- `/logstash/vendor/` - Lib for logstash
