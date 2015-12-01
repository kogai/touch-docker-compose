FROM ubuntu:14.04
MAINTAINER kogai <kogai@mmmcorp.co.jp>

# OSの準備
RUN apt-get update
RUN apt-get install -y curl

# アプリケーションの実行環境を作成
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
RUN . ~/.nvm/nvm.sh && nvm install v5.1.0 && nvm alias default v5.1.0 && node -v

# アプリケーションの実体ファイルを取得
RUN mkdir /app
WORKDIR /app
ADD . /app

# アプリケーションの起動
RUN . ~/.nvm/nvm.sh && npm install && npm start
