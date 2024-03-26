import { NextIntlClientProvider, useMessages } from "next-intl";

interface Props {
    children: React.ReactNode;
    locale: string;
}
export const I18nProvider: React.FC<Props> = ({ children, locale }) => {
    const messages = useMessages()
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
