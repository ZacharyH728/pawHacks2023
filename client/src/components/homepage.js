import { DropdownForm } from './form';


export function HomePage() {
    return (
        <div className='main'>
            <DropdownForm label="Please select your current major" label2={"Please select your desired major"} />
        </div>
    )
}