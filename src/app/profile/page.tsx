'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslation } from "react-i18next";

import Menu from "@/navigate/Menu";


export default function Profile() {
    const params = useSearchParams();
    const email = params.get('email');
    const password = params.get('password');
    const { t } = useTranslation();

    return (
        <main style={styles.main}>
            <Menu/>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Password:</strong> {password}</p>

            <div className="">

                <div className="">SING UP FOR A FREE SESSION</div>


            </div>
        </main>
    );
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#121419',
        padding: 20,
        fontFamily: 'Arial, sans-serif'
    },


};
