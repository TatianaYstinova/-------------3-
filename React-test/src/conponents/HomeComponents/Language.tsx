import '../../pages/HomePage/Home.scss'

interface LanguageParam {
    title: string,
    value: string
}

export function Language(parametrs: LanguageParam) {
    return (
        <option value={parametrs.value}>{parametrs.title}</option>
    )
}