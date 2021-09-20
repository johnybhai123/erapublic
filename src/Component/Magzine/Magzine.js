import React from 'react'
import { IconContext } from "react-icons";
import Componentmagzine from './Componentmagzine'
import { Main, Subflex } from './Magzin.element'
import { MdLibraryBooks } from "react-icons/md";
function Magzine() {
    return (
        <Main>
            <IconContext.Provider value={{ color: "white", size:'70' }}>
            <Subflex>
                <Componentmagzine logo={<MdLibraryBooks/>} heading='Magazine'></Componentmagzine>
                <Componentmagzine logo={<MdLibraryBooks/>} heading='Magazine'></Componentmagzine>
                <Componentmagzine logo={<MdLibraryBooks/>} heading='Magazine'></Componentmagzine>

            </Subflex>
            </IconContext.Provider>
        </Main>
    )
}

export default Magzine
