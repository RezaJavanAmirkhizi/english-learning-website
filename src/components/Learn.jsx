import React, { useEffect, useState, Fragment } from 'react'
import moment from 'moment';


export default function Learn(props) {

    const[todayWords, setTodayWords] = useState([]);

    useEffect(() => {

        let count = 0;
        const nullWords = [];

        while (count < 30) {
            if (nullWords.length === 0) {
                for (let i = 0; i < props.words.length; i++) {
                    if (props.words[i].nextDate === null) {
                        nullWords.push(props.words[i]);
                    }
                }
            }
            setTodayWords([...todayWords, todayWords.push(nullWords.shift())]);
            count++;
        }
        const today = moment().format("YYYY-MM-DD");

        for (let i = 0; i < props.words.length; i++) {
            if (today >= props.words[i].nextDate) {
                setTodayWords([...todayWords, todayWords.push(props.words[i])]);
            }
        }
    }, [])

    return (
        <div>
            <div className='titles'>
                {
                    <div className='head'>
                        <div className='rowStyle'>
                            Row
                        </div>
                        <div>
                            English
                        </div>
                        <div>
                            Persian
                        </div>
                    </div>
                }
                <div>
                    {
                        <div>
                            {
                                todayWords.map((item, index) => {
                                    return <Fragment key={index}>
                                        <div className='rows'>
                                            <div className='wordsContainer'>
                                                {index + 1}
                                            </div>
                                            <div>
                                                {item.english}
                                            </div>
                                            <div>
                                                {item.persian}
                                            </div>
                                        </div>
                                    </Fragment>
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
