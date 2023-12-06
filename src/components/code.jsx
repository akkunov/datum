// import {Fragment, useEffect, useRef, useState} from "react";
//
// export const Code =  () => {
//     const [code, setCode] = useState(new Array(6).fill())
//     const [activeIndex, setActiveIndex] = useState(0)
//     const inputRef = useRef(null)
//
//     function handleChange (e,index) {
//         const {value} = e.target
//        const validValue = value.substring(value.length-1)
//         const newCode = [...code]
//         newCode[index]  =  validValue
//
//         if(!validValue){
//             setActiveIndex(index -1)
//             inputRef.current?.focus()
//         }
//         else {
//             setActiveIndex(index +1)
//             inputRef.current?.focus()
//         }
//         setCode(newCode)
//     }
//
//     useEffect( () => {
//         inputRef.current?.focus()
//     },[activeIndex])
//
//     return <>
//                 <div className={`flex flex-col w-68 px-5  justify-center items-center w-7/12 h-56 border-blue-500`}>
//                     <div className={`flex flex-row`}>
//                         {code.map((value, index) => (
//                             <Fragment key={index}>
//                                 <input
//                                     ref={index == activeIndex? inputRef : null}
//                                     className={`outline-none border-b-2 mx-[1px] w-12
//                                     ${ !value ? 'border-b-black' : ''}
//                                     transition-colors duration-300
//                                     w-12 h-10 appearance-none spin-button-none text-4xl text-center`}
//                                     type={"text"}
//                                     value={value}
//                                     onChange={(e) => handleChange(e,index)}
//                                 />
//                             </Fragment>
//                         )) }
//                     </div>
//
//                     <button className={`p-4 bg-blue-600 rounded-2xl mt-3 text-white
//                     w-48 hover:bg-blue-400`}> Отправить</button>
//             </div>
//
//     </>
// }
import React, {useState, useRef, useEffect} from 'react';

export function Code({sendCode}) {
    const [otp, setOTP] = useState(['', '', '', '', '', '']); // Массив для хранения OTP
    const inputRefs = useRef([...Array(6)].map(() => React.createRef())); // Ссылки на инпуты

    const handleChange = (e, index) => {
        const { value } = e.target;

        const validValue = value.substring(value.length-1)
        if(/^\d+$/.test(validValue) || validValue === ''){
            setOTP((prevOTP) => {
                const newOTP = [...prevOTP];
                newOTP[index] = validValue;

                // Перемещение фокуса к следующему инпуту после ввода цифры
                if (index < 5 && value !== '') {
                    inputRefs.current[index + 1].current.focus();
                }

                return newOTP;
            });
        }

    };

    const handleBackspace = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && !otp[index]) {
            // Перемещение фокуса к предыдущему инпуту при нажатии Backspace
            inputRefs.current[index - 1].current.focus();
        }
    };
    const code = otp.join('')
    const sender = () => {
        sendCode(code)
    }
    useEffect(() => {
        inputRefs.current[0].current.focus();
    },[])


    return (
        <div className={`flex flex-col justify-center items-center`}>
            <h1 className={`mb-6`}>Введите  код</h1>
            <div className="otp-container">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        ref={inputRefs.current[index]}
                        type="text"
                        inputMode="numeric"

                        className={`outline-none border-b-2 mx-[1px] w-12
                                    ${ !digit ? 'border-b-black' : ''}
                                    transition-colors duration-300
                                    w-12 h-10  text-4xl text-center`}

                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyUp={(e) => handleBackspace(e, index)}
                    />
                ))}
            </div>
            <button onClick={sender}
                    className={`p-4  bg-blue-600 rounded-2xl mt-6 text-white
                        w-48 hover:bg-blue-500
                        disabled:bg-blue-200
                        `}
            disabled={ code.length < 6 ? true: false}
            >Отправить</button>
        </div>
    );
}

