# 0-0

## 入力デバイス

p5play で利用可能な入力デバイスは次のとおりです:

- `kb`または`keyboard`はキーボード
- `mouse`はマウス
- `contro`または`controllers`はゲームコントローラー

これらの入力デバイスはすべて、入力の状態を取得するためのシンプルな関数、`presses`、`pressing`、`released`を使用します。

また、彼らの全ての入力の状態をプロパティとして保存します。例えば、`kb.space`はユーザーがスペースキーを押し続けているフレーム数を保存します。ユーザーが入力を解放するとリセットされます。

# 1-0

## キーボード

PC ゲームでは、WASD キーが一般的にプレイヤーキャラクターの移動を制御するために使用されます。p5play では、'up'、'down'、'left'、'right'の方向名を使用して WASD キーと矢印キーの押下を検出できます。

WASD と矢印キーを別々に使用したい場合は、これらのキー名を使用して矢印キーの押下を検出できます: 'ArrowUp', 'ArrowDown', 'ArrowLeft' そして 'ArrowRight'。
左利きのプレイヤーやローカルで 2 人プレイするセカンドプレイヤーをサポートするために、IJKL キーでの移動が一般的です。これらのキーは次のように参照できます: 'up2', 'down2', 'left2', 'right2'。
一部のキーボードは最上行が QWERTY で始まりません。p5play は他のキーボードレイアウトを標準的な英語の QWERTY レイアウトにマッピングします。例えば、フランスの AZERTY キーボードのユーザーの WASD キーは ZQSD です。これは`p5play.standardizeKeyboard`を false に設定することで無効にできます。[詳細情報](https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent/code)

# 2-0

## マルチ入力

このミニスケッチは、スペースキーを押すかマウスをクリックすることで一つのアクションが実行できる方法を示しています。デフォルトのマウス入力は、左マウスボタンまたは通常のクリックのための'left'です。

# 3-0

## スプライトマウス

物理的なコライダーを持つスプライトは、スプライト上のマウス入力を検出するための自身のマウスオブジェクトを持っています。
`sprite.mouse`オブジェクトは、`mouse`入力オブジェクトと同様ですが、追加の機能があります。

`hovers`と`hovering`は、ユーザーがマウスをスプライト上に移動したときに検出します。

`dragging`は、ユーザーがマウスボタンをクリックし続けてマウスを移動するときに検出します。
`mouse.x`はキャンバス上のマウスの x 位置であり、`sprite.mouse.x`はスプライトに対するマウスの x 位置です。

# 4-0

## ゲームコントローラー

`contro`または`controllers`オブジェクトは、ゲームコントローラーのボタンの入力状態を提供します：

"a", "b", "x", "y", "l" (左バンパー), "r" (右バンパー), "lt" (左トリガー), "rt" (右トリガー), "up", "down", "left", "right" (dpad), "start", "select"

また、アナログスティックの`x`および`y`軸の位置も提供します：`leftStick`および`rightStick`。軸の値は-1 から 1 の範囲で、0 は中央です。

`contro`オブジェクトはまた、Web ブラウザによって検出されたすべての接続されたゲームコントローラーを含む配列でもあります。接続されたコントローラーはインデックスでアクセスします。例えば、`contro[0]`と`contro[1]`は最初と 2 番目のコントローラーです。デフォルトでは`contro`は`contro[0]`を参照します。

試してみてください！接続されたゲームコントローラーの任意のボタンを押すと、p5play によって検出されます。

# 5-0

## タッチ

例は近日公開予定です！
