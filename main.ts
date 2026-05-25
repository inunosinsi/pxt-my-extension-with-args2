//% color="#000000" icon="\uf1e6" block="引数付き拡張機能"
namespace myExtensionWithArgs {

    //% block="echo %str"
    function echo (str: string) {
        basic.showString(str)
    }
}