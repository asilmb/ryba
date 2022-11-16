FROM node:19-alpine

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./

# Install packages
RUN set -eux; \
    # Packages to install
    apk add --no-cache \
        git \
        python3 \
        make \
        g++ \
    && \
    # Clean out directories that don't need to be part of the image
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && \
    npm install
# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm run dev" ]

ENTRYPOINT ["/bin/sh"]
