#!/bin/bash
rm -rf ./build/;
yarn run build;
cd ./build/;
echo taring;
echo ======;
tar zcvf build.tar.gz *;
ls;
echo uploading;
echo =========;
sudo scp -i ~/.server_ssh/kbz-frontend-ec2.pem ./build.tar.gz ubuntu@ec2-54-95-229-18.ap-northeast-1.compute.amazonaws.com:.;
echo deploying;
echo =========;
sudo ssh -i ~/.server_ssh/kbz-frontend-ec2.pem  ubuntu@ec2-54-95-229-18.ap-northeast-1.compute.amazonaws.com 'cd /var/www/kbz-test-frontend/; sudo rm *; sudo mv ~/build.tar.gz .; sudo tar xvf ./build.tar.gz; sudo rm build.tar.gz;';
echo deploying finished;
echo ==================;
cd ..;
