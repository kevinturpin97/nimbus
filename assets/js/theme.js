import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#499CDE',
        background: '#215F91',
        text: '#000',
        textLight: '#fff',
        border: '#000',
        notification: '#8D8F64',
        card: '#215F91',
        header: '#215F91',
        tab: '#215F91',
    }
}