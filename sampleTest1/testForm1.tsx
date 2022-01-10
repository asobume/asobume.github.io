import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout"
import { useState } from 'react'
import ResultForm1 from "./testResult1";
import Router from 'next/router'
import Link from "next/link";
import React from 'react';
// import React, { useContext } from 'react'


const TestForm1 = () => {
    const [selectValue, setSelectValue] = useState("select1");
    const [textareaValue, setTextareaValue] = useState();

    function logValue() {
        console.log(selectValue);
        console.log(textareaValue);
    }

    function clickHandler() {
        Router.push('/testResult1')
        return
    }

    const setTextareaData = (e: any) => {
        e.preventDefault();
        setTextareaValue(e.target.value);
    };


    return (
        <Layout>
            <div>
                <Head>
                    <title>Index Page</title>
                </Head>
                <div>
                    {/* <form onSubmit={registerUser}> */}
                    <form>
                        <div>Label:
                            <label htmlFor="name">Name</label>
                        </div>
                        <div>Input:
                            <input id="name" name="name" type="text" autoComplete="name" required />
                            <input id="check1" name="check1" type="checkbox" autoComplete="check1" required />
                        </div>
                        <div>Textarea:
                            <textarea name="textarea" value={textareaValue} onChange={setTextareaData} defaultValue="Hello there, this is some text in a text area" placeholder="テキストエリアです">

                            </textarea>
                        </div>
                        <div>Select:
                            <select name="select" value={selectValue}
                                onChange={(e) => {
                                    setSelectValue(e.target.value)
                                }}>
                                <option value="select1">select1</option>
                                <option value="select2">select2</option>
                                <option value="select3">select3</option>
                            </select>

                        </div>
                        <div>Button:
                            {/* <button type="submit" value="Submit" onClick={logValue}>Register</button>*/}
                            <button type="submit" value="Submit" onClick={clickHandler}>Register</button>
                            <ResultForm1 title="from test1 to test2" />
                            <Link href="/testResult1"><a>go to testResult1</a></Link>


                        </div>
                    </form>
                </div>
            </div >
        </Layout >
    );
};

export default TestForm1;

