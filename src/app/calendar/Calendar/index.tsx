import Calendar from "@/components/ui/Calendar";
import { darkTheme, lightTheme } from "@/components/ui/Calendar/theme";
import { useTimeServiceContext } from "@/context/TimeServiceContext";
import { ThemeProvider } from "@emotion/react";
import { miniApp, useSignal } from "@telegram-apps/sdk-react";
import dayjs from "dayjs";
import { useState } from "react";

const CalendarBlock = () => {
    const isDark = useSignal(miniApp.isDark);
    const { value, setValue } = useTimeServiceContext();
    const [data, setData] = useState<dayjs.Dayjs | null>(value.date ? dayjs(value.date) : dayjs());

    const handleTimeChange = (day: dayjs.Dayjs | null) => {
        setData(day);
        setValue({ ...value, date: String(day?.format("YYYY-MM-DD")) });
    };

    return (

        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Calendar value={data} setValue={handleTimeChange} />
        </ThemeProvider>

    );
};

export default CalendarBlock;