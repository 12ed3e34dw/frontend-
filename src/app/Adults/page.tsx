'use client';
import Image from "next/image";
import Logo from "@/assets/Logo_About.png";
import "@/Styles/Adults_style/Adults.css";
import { useTranslation } from "react-i18next";

export default function Page() {
    const { t } = useTranslation();

    return (
        <div className="main">
            {/* Первый экран */}
            <div className="content-section">
                <div className="background"></div>
                <div className="txt_English">{t("ENGLISH")}</div>
                <div className="txt_For">{t("FOR")}</div>
                <div className="txt_Everyone">{t("EVERYONE!")}</div>
                <Image src={Logo} alt="Logo About" className="Logo_About"/>
                <div className="buttonGroup">
                    <button className="button">
                        <div className="txt_button">
                            {t("Get a free lesson")}
                        </div>
                    </button>
                    <div className="txt_credit_card">
                        {t("No credit card needed")}
                    </div>
                </div>
            </div>

            {/* Второй экран - Why Choose Us */}
            <div className="why-section">
                <div className="txt_WHY">{t("WHY")}</div>
                <div className="txt_CHOOSE">{t("CHOOSE")}</div>
                <div className="txt_US">{t("US?")}</div>
                <div className="txt">{t("We are comfortable")}</div>

                <div className="reasons">
                    <div className="block_teachnologies">
                        <div className="txt_14">01</div>
                      <div className="txt_15">{t("MODERN TECHNOLOGIES")}</div>

                        <div className="txt_16">{t("tasks")}</div>
                        <div className="txt_17">{t("lessons")}</div>
                        <div className="txt_18">{t("sweeties")}</div>

                    </div>
                    <div className="block_program">
                     <div className="txt_19">02</div>
                        <div className="txt_20">{t("txt_20")}</div>
                        <div className="txt_21">{t("txt_21")}</div>
                        <div className="txt_22">{t("txt_22")}</div>
                        <div className="txt_23">{t("txt_23")}</div>
                    </div>
                    <div className="block_perfect">
                       <div className="txt_24">03</div>
                        <div className="txt_25">{t("txt_25")}</div>
                        <div className="txt_26">{t("txt_26")}</div>
                        <div className="txt_27">{t("txt_27")}</div>
                        <div className="txt_28">{t("txt_28")}</div>
                    </div>
                </div>
            </div>

            {/* Третий экран - Statistics */}
            <div className="content-section">
                <div className="Statistics">

                    <div className="txt_1">2023</div>
                    <div className="txt_2">{t("the best school of the")}</div>
                    <div className="txt_3">{t("year")}</div>




                    <div className="txt_4">50K+</div>
                    <div className="txt_5">{t("happy pupils")}</div>

                    <div className="txt_6">300+</div>
                    <div className="txt_7">{t("teachers in team")}</div>

                    <div className="txt_8">AI</div>
                    <div className="txt_9">{t("unique education")}</div>
                    <div className="txt_10">{t("programm")}</div>

                    <div className="txt_11">10</div>
                    <div className="txt_12">{t("years we shine in the")}</div>
                    <div className="txt_13">{t("world!")}</div>

                    <div className="hr_1"></div>
                    <div className="hr_2"></div>
                    <div className="hr_3"></div>
                    <div className="hr_4"></div>





                </div>
            </div>


            <div className="content_2">
                <div className="txt_29">{t("txt_29")}</div>
                <div className="txt_30">{t("txt_30")}</div>

                <div className="txt_31">{t("txt_31")}</div>

                <div className="txt_32">{t("txt_32")}</div>
                <div className="txt_33">{t("txt_33")}</div>

                <button className="button_2">
                    <div className="txt_button_2">
                        {t("txt_bu")}
                    </div>
                </button>
            </div>


            <div className="content_3">
                <div className="txt_34">{t("txt_34")}</div>
                <div className="txt_35">{t("txt_35")}</div>

                <div className="txt_36">{t("txt_36")}</div>
            </div>






        </div>
    );
}
