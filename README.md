# X Link Previewer

Twitter（現X）のリンクの含まれたメッセージが投稿された際、リンクをプレビューできる形式に変換して同じチャンネルに投稿するDiscord Botです。

## 機能

ツイート（ポスト）へのURLを含むメッセージが投稿されたとき、以下のように変換したものを同チャンネルに投稿します。

| 変換前      | 変換後         |
| ----------- | ------------- |
| twitter.com | vxtwitter.com |
| x.com       | fixupx.com    |

## 使い方（Railwayにデプロイする場合）

1. [Discord Developer Portal](https://discord.com/developers/applications)で本bot用アプリケーションを作成
2. 設定 > Bot > Message Content Intentをオンにする（メッセージ内に対象のURLが存在するかのチェックに必要）
3. 設定 > Bot > TokenのReset Tokenを押して表示されたトークンをコピーして控えておく
4. Railwayにデプロイ
5. 環境変数設定でTOKENに先ほど控えたトークンを設定
