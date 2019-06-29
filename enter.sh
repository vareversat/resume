docker exec -it $(docker ps | awk '{print $1}' | sed -n 2p) bash
