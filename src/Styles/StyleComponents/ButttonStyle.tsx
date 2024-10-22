import styled from 'styled-components'

interface Props {
    width?: number;      
    height?: number;        
    color?: string;        
    backgroundcolor?: string; 
    border?: string;       
    borderradius?: string; 
}

export const ButtonStyle =styled.button<Props>`
    width:${({width})=>width?width:'188'}px;
    height:${({height})=>height?height +'':'60'}px;
    color:${({color})=>color?color:'#FFFFFF'};
    background-color:${({backgroundcolor})=>backgroundcolor?backgroundcolor:'#000000'};
    border:${({border})=>border?border:'none'};
    border-radius:${({borderradius})=>borderradius?borderradius :'5px'};
`