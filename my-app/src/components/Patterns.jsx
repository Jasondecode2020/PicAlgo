import React from 'react'
import { useState } from 'react'
import LevelList from './LevelList'

const patterns = [
    {
        id: 1,
        name: 'Hash Table',
        questions: [
            {level: 'Easy', leetcode: [{name: '1. Two Sum', answer: 'answer', link: 'https://leetcode.com/problems/two-sum/', checked: true}, {name: '2', answer: 'answer', link: 'https://leetcode.com/problems/two-sum/', checked: true}]}, 
            {level: 'Medium', leetcode: [{name: '1', answer: 'answer', link: 'https://leetcode.com/problems/two-sum/'}, {name: '2', answer: 'answer', link: 'https://leetcode.com/problems/two-sum/'}]}, 
            {level: 'Hard', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}
        ]
    }, 
    {
        id: 2,
        name: 'Set',
        questions: [
            {level: 'Easy', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, 
            {level: 'Medium', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, 
            {level: 'Hard', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}
    ]
    }, 
    {
        id: 3,
        name: 'Two Pointers',
        questions: [{level: 'Easy', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Medium', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Hard', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}]
    }, 
    {
        id: 4,
        name: 'Sliding Window',
        questions: [{level: 'Easy', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Medium', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Hard', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}]
    }, 
    {
        id: 5,
        name: 'Linked List',
        questions: [{level: 'Easy', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Medium', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Hard', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}]
    }, 
    {
        id: 6,
        name: 'Tree',
        questions: [{level: 'Easy', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Medium', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Hard', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}]
    }, 
    {
        id: 7,
        name: 'Graph',
        questions: [{level: 'Easy', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Medium', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}, {level: 'Hard', leetcode: [{name: '1', answer: 'answer'}, {name: '2', answer: 'answer'}]}]
    }, 
];

const Patterns = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const handleClick = (index) => {
        console.log(index)
        setActiveIndex(index);
    };

    return (
        <>
            {patterns.map(pattern => 
                <li key={pattern.id} onClick={() => handleClick(pattern.id)} className={pattern.id === activeIndex ? 'red': ''}>
                    <span>{pattern.name}</span>
                <ul className={pattern.id === activeIndex ? 'black show-questions': 'hide-questions'}>
                    <LevelList questions={pattern.questions} />
                </ul>
                </li>
            )}
        </>
    )
}

export default Patterns