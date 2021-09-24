##!/usr/bin/env bash
set -e

minikube start

# kubectl get po -A

kubectl apply -f test_server.yaml

minikube service wargame &