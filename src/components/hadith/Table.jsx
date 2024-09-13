import React from 'react'
import Tr from './Tr';

export default function Table({data}) {
    const { hadith, chapter } = data;
  return (
    <table>
        <Tr
            heading={'হাদিসের বই'}
            title={hadith?.book_name}
        />
        <Tr
            heading={'হাদিসের মান'}
            title={hadith?.grade}
        />
                <Tr
            heading={'অধ্যায়'}
            title={chapter?.title}
        />
                <Tr
            heading={'হাদিস নং'}
            title={hadith?.hadith_id}
        />
                <Tr
            heading={'হাদিস বর্ণনাকারী'}
            title={hadith?.narrator}
        />
        </table>
  )
}
