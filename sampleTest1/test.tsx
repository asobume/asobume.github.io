// import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout"
import { useState } from 'react'

function createBox() {
    return <div className="bg-red-100 h-40 w-40 mx-auto">boxM</div>
}

// function lsit3() {
//     if (process.browser) {
//         document.write('<div className="bg-red-100 h-40 w-40 mx-auto">boxY</div>')
//     }
// }

const TestPage = () => {

    (function () {
        if (process.browser) {
            const targetItem = document.querySelector('#target1')
            console.log(targetItem)
            //コンパイル上はnullだがブラウザー上では値を取得するケース
            if (targetItem) {
                targetItem.addEventListener('click', function () {
                    console.log('クリックされました！');
                }, false);
            }
        }
    })();

    const abcd = "abcd"

    function clickA() {
        console.log("clickされた")
    }

    let [countValue, setCount] = useState(0)

    return (
        <Layout>
            <div>
                <Head>
                    <title>Test Page</title>
                </Head>
                <div className="bg-gray-200">
                    <h1 className="text-purple-600">ここはTestPageです</h1>
                    <section className="flex justify-center">
                        <div className="bg-red-100 h-40 w-40 mx-auto">box1</div>
                        <div className="bg-red-100 h-40 w-40 mx-auto">box2</div>
                        <div onClick={clickA} id="target1" className="bg-red-100 h-40 w-40 mx-auto hover:bg-fuchsia-600">{abcd}</div>
                        {/* {lsit3()} */}
                        {createBox()}
                    </section>
                    <div className="w-80 my-10 flex mx-auto leading-10">
                        <button onClick={() => setCount(cnt => cnt + 1)} className="bg-red-100 h-10 w-20 mx-auto leading-10">+</button>
                        <button onClick={() => setCount(cnt => cnt - 1)} className="bg-red-100 h-10 w-20 mx-auto leading-10">-</button>
                        <button onClick={() => setCount(cnt => 0)} className="bg-red-100 h-10 w-20 mx-auto">reset</button>
                    </div>
                    <div className="bg-red-200 h-10 w-20 mx-auto text-center leading-10">{countValue}</div>

                </div>
            </div>
        </Layout>
    );
};

export default TestPage;