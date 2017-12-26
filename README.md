# vagrant-ssl-enabled-web-server-client
vagrant-ssl-enabled-web-server-client setup

# Check the IP addr of docker container
docker exec -it c269a8939b2e ip addr show

# curl the web-page
curl -k https://<IP_ADDR>:8080
