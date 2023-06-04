import Navbar from '@components/Navbar/Navbar';
import React from 'react';


type LayoutProps = {
    children: React.ReactNode
}

// stateless component
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='container'>
            <Navbar/>
            {children}
            <br></br>
            <footer>
                This is the footer
            </footer>
        </div>
    );
};

export default Layout;