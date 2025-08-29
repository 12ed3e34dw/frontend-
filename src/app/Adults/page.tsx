
'use client';
import Image from "next/image";
import Logo from "@/assets/Logo_About.png";
import "@/Styles/Adults_style/Adults.css";
import { useTranslation } from "react-i18next";
export default function Page() {
    const { t } = useTranslation();
    return (
        <div className="main">
            <div className="background"></div>
            <div className="txt_English">{t("ENGLISH")}</div>
            <div className="txt_For">{t("FOR")}</div>
            <div className="txt_Everyone">{t("EVERYONE!")}</div>
            <Image src={Logo} alt="Logo About" className="Logo_About"/>
            <div className="buttonGroup">
                <button className="button">
                    <div className="txt_button">
                        {t("  Get a free lesson ")}
                    </div>
                </button>
                <div className="txt_credit_card">
                    {t("  No credit card needed ")}
                </div>
            </div>
            <div className="txt_WHY">{t("WHY")}</div>
            <div className="txt_CHOOSE">{t("CHOOSE")}</div>
            <div className="txt_US">{t("US?")}</div>
            <div className="txt">{t("We are comfortable")}</div>
            <div className="reasons">
                <div className="block_teachnologies">

                </div>
                <div className="block_program">

                </div>
                <div className="block_perfect">

                </div>
            </div>

            <div className="Statistics">
                <div className="">2023</div>
                <div className="">{t("the best school of the")}</div>
                <div className="">{t("year")}</div>


                <div className="">50K</div>
                <div className="">{t("")}</div>

                <div className="">{t("")}</div>
                <div className="">{t("")}</div>

                <div className="">{t("")}</div>
                <div className="">{t("")}</div>
                <div className="">{t("")}</div>


            </div>
        </div>
    );
}
