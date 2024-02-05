#!/bin/bash

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "Error: CLOUDFLARE_API_TOKEN environment variable is not set."
    exit 1
fi

STACK_NAME="amc-carpool-api-stack"

if [ "$1" == "up" ]; then
  aws cloudformation create-stack \
    --stack-name "$STACK_NAME" \
    --template-body file://aws-cloudformation-template.json

  aws cloudformation wait stack-create-complete --stack-name "$STACK_NAME"

  ALB_DNS_NAME=$(aws elbv2 describe-load-balancers --names "amc-carpool-api-alb" --query "LoadBalancers[0].DNSName" --output text)

  curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/dns_records" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H Content-Type:application/json \
    --data "{
        \"content\": \"$ALB_DNS_NAME\",
        \"name\": \"api.amc-carpool\",
        \"proxied\": false,
        \"type\": \"CNAME\",
        \"comment\": \"Points to the application load balancer of the AMC Carpool API service\",
        \"ttl\": 60
      }"

elif [ "$1" == "down" ]; then
  aws cloudformation delete-stack --stack-name "$STACK_NAME"

  aws cloudformation wait stack-delete-complete --stack-name "$STACK_NAME"

  RESPONSE=$(curl -sS -X GET "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/dns_records?type=CNAME&name=api.amc-carpool.zbly.org" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H Content-Type:application/json)

  RECORD_ID=$(echo "$RESPONSE" | jq -r '.result[0].id')

  curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/dns_records/$RECORD_ID" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H Content-Type:application/json

else
    echo "Usage: $0 [up|down]"
    exit 1

fi
