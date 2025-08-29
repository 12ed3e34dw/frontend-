'use client';
import Menu from "@/navigate/Menu";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import "@/Styles/Registration_Style/Registration.css";
import { useTranslation } from "react-i18next";


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const { t } = useTranslation();
    const router = useRouter();

    const register = async () => {
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                router.push(`/profile?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
            } else {
                alert(data.error || 'Неизвестная ошибка');
            }
        } catch (error: any) {
            console.error('Ошибка при регистрации:', error);
            alert('Ошибка клиента или сети: ' + error.message);
        }
    };


    return (
        <div  className="main">
            <main  className="scrollContainer">
                <Menu/>
                <div className="button_Register">{t("Registrate")}</div>
                <div className="button_Login">{t("Sing in")}</div>
                <div  className="form">
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail"
                        className="input"
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        className="input"
                    />
                    <input className="input" placeholder="Phone"/>

                    <div  className="buttonGroup">
                        <button onClick={register} className="button">{t("Register")}</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
