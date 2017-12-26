# vagrant-ssl-enabled-web-server-client
vagrant-ssl-enabled-web-server-client setup

# Check the IP addr of docker container
Login to server VM
$ docker container list
$ docker exec -it <CONTAINER_ID> ip addr show

# curl the web-page
$ curl -k https://<IP_ADDR>:8080
