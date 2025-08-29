'use client';
import Image from "next/image";
import Burger_Menu from "@/assets/menu.svg";
import Logo from "@/assets/Logo.svg";
import '@/Styles/Navigate_style/Menu.css';
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Menu() {
    const router = useRouter();
    const { t } = useTranslation();
    const goRegister = () => {
        router.push("/Register");
    };

    return (
        <div className="container">
            <Image src={Logo} alt="Logo" className="Logo_Img" />

            {/* Кнопка логина */}
            <div className="container_login" onClick={goRegister}>
                <div className="txt_login">{t("Log in")}</div>
            </div>

            {/* Бургер меню (только для мобилы) */}
            <div className="Img_Menu_Burger">
                <Image src={Burger_Menu} alt="Menu" className="Img" />
            </div>

            {/* Контейнеры для ПК */}
            <div className="desktop_menu">
                <div className="container_Contacts">{t("Contacts")}</div>
                <div className="container_Practice">{t("Practice")}</div>
                <div className="container_About">{t("About")}</div>
                <div className="container_FAQ">{t("FAQ")}</div>
            </div>
        </div>
    );
}
