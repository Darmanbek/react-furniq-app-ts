import React, { useEffect } from "react";
import { SectionSign, FormSignOn } from "@/components"
import { useNavStore } from "@/store";

const SignOnPage: React.FC = () => {
    const { toPath } = useNavStore();

    useEffect(() => {
        toPath("/register")
    }, [])
    return (
        <SectionSign>
            <FormSignOn />
        </SectionSign>
    );
};

export default SignOnPage;
