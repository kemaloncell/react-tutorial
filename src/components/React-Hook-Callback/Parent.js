import React, {useCallback, useState} from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
/*  What? we use callback = useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
useCallback, sadeca bağımnlılığı(age, salary) değiştiğinde çalışır
    Why? = it is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
 gereksiz işlemeleri önlemek için referans eşitliğine dayanan optimize edilmiş alt bileşenlere geri aramalar aktarılırken kullanışlıdır
 1. = it is useful when passing callbacks =   <Button handleClick={incrementAge}>increment age</Button>
 2. = to optimized child components = export default React.memo(Button)

  How to use it ? =
  if ı write like above the Button component wil be run twice
  *** bak burada 'useCallback' yok dikkatini çekerim, eğer bunu yazmazsan bu fonksiyon çağırılmasada render olur. nedeni ise fonksiyonu componente
  parametre olarak geçiyoruz dolayısıyla React.Memo prop değişilik olduğunu seziyor ve yeniden render ediyor.
    const incrementAge = () => {
       setAge(age + 1)
    }
    ----------
    we must use useCallback method to avoid re-render
    *** useCallback ile metodumuuzu yazdık bu sayede sadece age değiştiğinde component render olacak
        const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    it takes two parameters first one is a callback method next one is array which take dependency parameters
*/


// we have to use React.memo to prevent to re-render
function Parent(){
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(5000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary +  2500)
    },[salary])

    return(
       <>
           <Title/>
           <Count age={age}/>
           <Button handleClick={incrementAge}>increment age</Button>
           <Count age={salary}/>
           <Button handleClick={incrementSalary}>increment salary</Button>
       </>
    )
}

export default Parent
