import {css} from "styled-components"

export const xs = (props) => {
    return css`
        @media only screen and (max-width: 600px){
            ${props}
        }
    `
}

export const sm = (props) => {
    return css`
        @media only screen and (min-width: 600px){
            ${props}
        }
    `
}

export const md = (props) => {
    return css`
        @media only screen and (min-width: 768px){
            ${props}
        }
    `
}

export const lg = (props) => {
    return css`
        @media only screen and (min-width: 992px){
            ${props}
        }
    `
}

export const xl = (props) => {
    return css`
        @media only screen and (min-width: 1200px){
            ${props}
        }
    `
}