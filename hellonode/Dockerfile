FROM node:6.9.2

RUN mkdir /var/run/sshd
RUN apt-get update && apt-get install -y openssh-server sudo
RUN useradd vagrant --create-home --user-group --groups sudo
RUN echo 'vagrant:vagrant' | chpasswd
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]

EXPOSE 8080
COPY server_v3.js .

RUN openssl req -subj '/CN=aricent.com/O=Aricent/C=IN' -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout server.key -out server.crt

CMD node server_v3.js
