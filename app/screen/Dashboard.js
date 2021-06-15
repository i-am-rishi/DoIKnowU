import React from 'react'

import Card from '../components/Card';
import Head from './../components/Head';


const items=[
    {
        name:"Rishabh",
        image:require("../assets/boy1.jpg"),
        like:false,
        save:false
    },
    {
        name:"Shashwat",
        image:require("../assets/boy2.jpg"),
        like:false,
        save:false
    },
    {
        name:"Shweta",
        image:require("../assets/girl1.jpg"),
        like:false,
        save:false
    },
    {
        name:"Shivangi ",
        image:require("../assets/girl2.jpg"),
        like:false,
        save:false
    },
]

export default function Dashboard() {
    return (
        <>
            <Head/>
            <Card
                list={items}
            />
        </>
    )
}
