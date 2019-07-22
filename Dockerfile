# Copyright 2019 the Quest developers
# Distributed under the MIT/X11 software license.

FROM ubuntu:14.04 as builder

SHELL ["bin/bash", "-c"]

# Install dependencies.
RUN apt-get update && apt-get install -y  \
    wget \
    git \
    software-properties-common \
    gcc-4.8 \
    g++-4.8 \
    build-essential \
    python-dev \
    autotools-dev \
    libicu-dev \
    libbz2-dev

# Install cmake.
RUN add-apt-repository ppa:george-edison55/cmake-3.x && \
    apt-get install -y cmake

# Build boost. This may take a while.
RUN wget -O boost_1_55_0.tar.gz https://sourceforge.net/projects/boost/files/boost/1.55.0/boost_1_55_0.tar.gz/download && \
    tar xzf boost_1_55_0.tar.gz && \
    cd boost_1_55_0/ && \
    ./bootstrap.sh --prefix=/usr/ && \
    ./b2 install

# Build Quest
RUN git clone https://github.com/MatthewASobol/Quest.git && \
    cd Quest && \
    make -j$(nproc)

# Create another stage to kepp the final image size small
FROM ubuntu:18.04
COPY --from=builder \
     /usr/lib/libboost_system.so.1.55.0  \
     /usr/lib/libboost_filesystem.so.1.55.0 \
     /usr/lib/libboost_program_options.so.1.55.0 \
     ./usr/lib/

COPY --from=builder \
     /Quest/build/release/src/miner \
     /Quest/build/release/src/Questd \
     /Quest/build/release/src/walletd \
     /Quest/build/release/src/simplewallet \
     /Quest/build/release/src/connectivity_tool \
     ./usr/local/bin/

WORKDIR /home

CMD ["Questd"]
