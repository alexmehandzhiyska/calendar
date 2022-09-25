import { PropsWithChildren } from 'react';

const Layout = (props: PropsWithChildren) => {
    return (
        <div className="body-wrapper">
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;