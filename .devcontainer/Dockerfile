FROM mcr.microsoft.com/devcontainers/javascript-node:20

RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
    libxss1 \
    libgtk-3-0 \
    libasound2 \
    libgbm1 \
    libasound2 \
    libnss3 \
    libxss1 \
    libasound2-dev \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspaces/HeliosLauncher
