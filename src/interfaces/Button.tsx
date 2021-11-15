export default interface IButton{
    value: string;
    clickHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}