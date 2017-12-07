# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'
vagrant_config = YAML.load_file("provisioning/virtualbox.conf.yml")

Vagrant.configure("2") do |config|

  config.vm.box = vagrant_config['box']
  
  # Bring up the web-server VM on Virtualbox
  config.vm.define "ssl_web_server_vm" do |ssl_web_server_vm|
    ssl_web_server_vm.vm.provision :shell, path: "provisioning/setup-ssl-secured-apache-web-server.sh"

    config.vm.provider "virtualbox" do |vb|
      # Display the VirtualBox GUI when booting the machine
      vb.gui = true

      # Customize the amount of memory on the VM:
      vb.memory = vagrant_config['ssl_web_server_vm']['memory']
      vb.cpus = vagrant_config['ssl_web_server_vm']['cpus']

      config.vm.network "private_network", ip: "203.0.113.90"
    end

    #ssl_web_server_vm.vm.hostname = vagrant_config['ssl_web_server_vm']['host_name']

    config.vm.provision "docker" do |d|
      d.build_image "/home/vagrant/hellonode", args: "-t hellonode/server-v6"
      d.run "hellonode/server-v6"
    end
  end

  config.vm.provision "file", source: "hellonode", destination: "/home/vagrant/hellonode"
  config.vm.synced_folder '.', '/vagrant'

end
