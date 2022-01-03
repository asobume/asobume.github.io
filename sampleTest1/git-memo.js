git-memo

git config --global user.name "shishito shibuya"
git config --global user.email "shishitoshibuya@example.com"

git設定の確認
git config -l

gitの作成 ※対象ファイルの登録
git init
git init --bare ※共有リポジトリを作成する場合

git状況確認
git status

変更ファイルのステージングへ追加
git add
git add . ※今いるディレクトリ以下の変更を一括してステージングに追加する場合

変更の取りけし
git checkout -- [file name]

変更ファイルのコミット
git commit -a
git commit -m"メッセージ" or git commit -m "メッセージ"
git commit --amend ※直前のコミットに変更を加えたが新たなコミットとするほどでもない場合(amend = アメンド)
git commit -am "メッセージ" ※addとcommitを同時に行う場合

コミットの一覧
git log

差分確認
git diff ※まだステージングに登録されていない変更について
git diff --cashed ※既にステージングに登録された変更について

git対象のファイルの削除・移動
git rm [file name]
git mv [file name]

gitに含めたくないファイルの設定
.gitignore非表示ファイルを作成
*.log ※拡張子「log」ファイルは全てgit監視対象外

過去のバージョンに戻る場合
git reset ※直前のひとつ前にコミットに戻る場合
git reset --hard ※加えて作業ディレクトリもステージングエリアも一気に戻したいという場合
git reset --hard [id(最低7桁)] ※加えてidを指定して戻したいという場合

ブランチの確認・作成
git branch ※確認
git branch [ブランチ名] ※新たなブランチを作成

ブランチの移動
git checkout [移動先ブランチ名] 

ブランチをマージする
git merge [反映させたいブランチ名]

ブランチをマージ後に不要になったブランチを削除する
git branch -d [不要になったブランチ名]

タグをつける ※タグ=commit idに対してつけるわかりやすくするためのタグ
git tag [タグ名 例:v1.0] ※直前のコミットへタグをつける
git tag [タグ名] [id] ※idを指定してタグを設定したい場合

タグの削除
git tag -d [タグ名]  

共有リポジトリ
リモート先の登録
git remote add origin [リモート先 ]

リモート先へのプッシュ
git push origin master ※masterとする場合
git clone [リポジトリ] [クローン時に名前をつける場合(例: myrepogitory)] 

リモート先からのプル
git pull origin master ※masterとする場合


