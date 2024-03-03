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
Update role for index:
```sh
curl -X PUT "localhost:9200/_security/role/logstash_writer?pretty" -H 'Content-Type: application/json' -u elastic:changeme -d '{"indices": [{"names": ["sit-catalogue-item-logs-*", "uat-catalogue-item-logs-*","job"],"privileges":["create_index", "write", "create","auto_configure", "manage", "all"],"allow_restricted_indices": false}],"applications": [],"run_as": [],"metadata": {},"transient_metadata": {"enabled": true}}'
```
Update role for index Powersell 
```
Invoke-RestMethod -Uri "http://localhost:9200/_security/role/logstash_writer" -Method Put -Headers @{"Content-Type"="application/json"} -Credential (Get-Credential) -Body '{
  "indices": [
    {
      "names": ["sit-catalogue-item-logs-*", "uat-catalogue-item-logs-*", "job"],
      "privileges": ["create_index", "write", "create", "auto_configure", "manage", "all"],
      "allow_restricted_indices": false
    }
  ],
  "applications": [],
  "run_as": [],
  "metadata": {},
  "transient_metadata": {
    "enabled": true
  }
}'
```
- username: elastic

- password: changeme