import type { PropsWithChildren } from "react";
import type React from "react";

type Props = { title: string; folded?: boolean } & PropsWithChildren;

const Summary: React.FC<Props> = ({ title, folded = false, children }) => {
    console.log(children);

    return (
        <details className="story" open={!folded}>
            <summary>{title}</summary>
            {children}
        </details>
    );
};

export default Summary;