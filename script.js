let instance = new Promise( ( resolve, reject) => {

    // 1秒後に実行
    setTimeout( () => {
        // 0 ~ 10 のランダムな値を取得
        const rand = Math.floor( Math.random() * 11 )

        if ( rand < 5 ) {
            reject (rand)
        } else {
            resolve(rand)
        }
    }, 1000)
});

instance = instance.then (value => {
    console.log(`5以上の値[${value}]が渡ってきました。`)
})

instance = instance.catch(errorValue => {
    console.error(`5未満の値[${errorValue}]が渡ってきたためエラー表示`)
})

instance = instance.finally(() => {
    console.log('処理を終了します')
})