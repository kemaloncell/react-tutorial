import React, {useMemo, useState} from 'react'

function Counter(){
    const [counterone, setCounterone] = useState(0)
    const [countertwo, setCountertwo] = useState(0)

    const incrementCounterone = () => {
        setCounterone(counterone + 1)
    }
    const incrementCountertwo = () => {
        setCountertwo(countertwo + 1)
    }
   /* const isEven = () => {
        let i = 0
        while(i < 200000000) i++
        return counterone % 2 === 0
    }*/
    // incrementCountertwo methods affacted the isEvent method because every button click state re-rendering, so we have to prevent this
    // we have to use useMemo to avoid the re-rendering
    const isEven = useMemo(() => {
        /* buradaki işlem uzun süreciği için güncelleme geri kalıcak yabaş çalışcak, dolayısıyla state'den başka bir değer değiştiğindede(countertwo) bu fonksiyon çalışcak ve gecikme devam edicek
        bi react'a demeliyiz ki sadece statedeki counterone değeri değişince bu fonksiyonu çalıştır onuda useMemo ile yapıypruz.
         useMemo kullanırsak sadece counterOne değiştiğinde bu fonksion çalışcak */
        let i = 0
        while(i < 20000000) i++
        return counterone % 2 === 0
    },[counterone])
     // now because of useMemo other button not affected the isEven method and doing its job regularly
    // as you can see it is so similar to useCallback hook there is a one importand things
    // if you need to use cache function you can use callback otherwise you can use useMemo
    return(
        <>
        <div>
            <button onClick={incrementCounterone}> increment {counterone}</button>
            <span>{isEven ? 'even': 'odd'}</span>
        </div>
        <div>
            <button onClick={incrementCountertwo}>increment {countertwo}</button>
        </div>
        </>
    )
}

export default Counter
