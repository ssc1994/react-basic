import { useEffect, useState } from "react";




const HookEffect = () => {
    //useState훅
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }

    //useEffect(함수) - 화면이 mount된 이후에 동작합니다.
    /* 
    useEffect(()=>{
        console.log(`렌더링 완료. state값 : ${name}`);
    });
    */
   
   //useEffect(함수, []) - 화면이 첫번째 mount에서만 실행됩니다.
   /* 
   useEffect(()=>{
    console.log(`처음만 실행됩니다.`);
   },[]);
    */

   //useEffect(함수,[state]) - 특정값이 랜더링 될때만 실행됩니다.
   useEffect(()=>{
    console.log(`age or name이 변경될때 실행합니다.`)
   }, [age,name]);

    return (
        <>
            이름 : <input type="text" onChange={handleName}/><br/>
            나이 : <input type="number" onChange={handleAge} /><br/>

            이름 : {name}, 나이 : {age}
        </>
    )
}

export default HookEffect;