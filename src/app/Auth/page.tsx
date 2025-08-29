
'use client';
import {useState} from "react";
import {useRouter} from "next/navigation";
import Menu from "@/navigate/Menu";
import { useTranslation } from "react-i18next";


export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const { t } = useTranslation();
    const router = useRouter();
    const login = async () => {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok && data.token) {
                setToken(data.token);
                router.push(`/profile?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
            } else {
                alert(data.error || 'Неизвестная ошибка');
            }
        } catch (error: any) {
            console.error('Ошибка при логине:', error);
            alert('Ошибка клиента или сети: ' + error.message);
        }
    };


    return(
        <div  className="main">
            <main  className="scrollContainer">
                <Menu/>
                <h1 className="title">{t("JWT Auth")}</h1>
                <div  className="form">
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input"
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                        className="input"
                    />
                    <div  className="buttonGroup">
                        <button onClick={login} className="button">{t("Login")}</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
