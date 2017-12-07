#!/usr/bin/env bash

export WORKSPACE=$PWD
export SERVER_IP=203.0.113.90
export PROXY_IP=165.225.106.34

#export http_proxy=http://gur03994:SRHjnddd899nma@$PROXY_IP:80
#export https_proxy=https://gur03994:SRHjnddd899nma@$PROXY_IP:80
#export ftp_proxy=ftp://gur03994:SRHjnddd899nma@$PROXY_IP:80

# Steps to install and configure required packages
sudo apt-get update -y

#######################################################################################
# Install OpenSSL
#######################################################################################
sudo apt-get -y install apache2
sudo service apache2 restart

#######################################################################################
# Generate self-signed certificate
# Ref: https://major.io/2007/08/02/generate-self-signed-certificate-and-key-in-one-line/
# Ref: https://docs.nodejitsu.com/articles/HTTP/servers/how-to-create-a-HTTPS-server/
#######################################################################################
#openssl genrsa -out key.pem
#openssl req -new -key key.pem -out csr.pem
#openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
#rm csr.pem
#openssl req -subj '/CN=aricent.com/O=Aricent/C=IN' -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout server.key -out server.crt

#######################################################################################
# Install node.js
#######################################################################################
#curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
#sudo apt-get install -y nodejs
