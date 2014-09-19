#!/bin/bash

echo "--- Installing node.js ---"
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get --yes --force-yes install python-software-properties python g++ make nodejs

echo "--- Updating Ruby ---"
sudo apt-get install -y ruby1.9.3
sudo update-alternatives --set ruby /usr/bin/ruby1.9.1
sudo update-alternatives --set gem /usr/bin/gem1.9.1

echo "--- Installing grunt-cli ---"
npm install -g grunt-cli

echo "--- Installing Bower ---"
npm install -g bower

echo "--- Installing Jekyll ---"
sudo gem install jekyll
