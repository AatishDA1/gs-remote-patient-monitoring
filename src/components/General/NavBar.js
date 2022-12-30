import React from 'react';

export default function Navbar() {
    
    return (<nav className="nav">
        <a href="/" className="site-title">Vitals Page</a>
        <ul>
            <CustomLink href="/Patient1/" children="Patient 1"/>
            <CustomLink href="/Patient2/" children="Patient 2"/>
            <CustomLink href="/Patient3/" children="Patient 3"/>
            <CustomLink href="/Patient4/" children="Patient 4"/>
            <CustomLink href="/Patient5/" children="Patient 5"/>
        </ul>
    </nav>
    )
}
function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? 'active':''}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}