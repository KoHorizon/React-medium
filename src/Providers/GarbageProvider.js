import React, { createContext, useEffect, useState, useRef } from 'react';
import { getArticles, getMessages } from '../Services/API';
import io from "socket.io-client";
export const GarbageContext = createContext()

export const GarbageProvider = (props) => {

    // const data = {
    //     point_lat: 48.9459560484859,
    //     point_lon: 2.36556866700135
    // }

    const [aritcles, setArticles] = useState([]);
    const [positions, setPositions] = useState();

    const [userPos, setUserPos] = useState()
    const [load, setLoad] = useState(false)


    let interval = useRef()


    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function(position) {
            setUserPos([position.coords.latitude,position.coords.longitude]);
            setLoad(true)
        });




        interval.current = setInterval(() => {
            getArticles().then((res) => {
                setArticles(res.data)
            })
        }, 1000)


        const socket = io("http://edu.project.etherial.fr/")

        socket.on("positions", (position) => {
            setPositions(position.data)
        });

        if (load === true) {
            socket.emit("update_postion", {
                'point_lat': userPos[0],
                'point_lon': userPos[1]
            });
        }

        return () => {
            clearInterval(interval.current)
        }
    }, [])

    return (
        <GarbageContext.Provider value={{ aritcles, positions}} >
            {props.children}
        </GarbageContext.Provider>
    )

}