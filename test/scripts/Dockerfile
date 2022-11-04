FROM kynnolabs/core:testnet-v1.0.0

COPY . /scripts

RUN sh /scripts/setup.sh

EXPOSE 26657

CMD kynnod start