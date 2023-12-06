export const Header = () => {
    return(
        <div className={`flex flex-col p-4`}>
            <div className={`flex flex-row justify-center gap-4 text-center text-white`}>
                <span className={`w-fit bg-blue-600 h-6 px-3`}>day </span>
                <span className={`w-fit bg-blue-600 h-6 px-3`}>week </span>
                <span className={`w-fit bg-blue-600 h-6 px-3`}>month</span>
                <span className={`w-fit bg-blue-600 h-6 px-3`}>year</span>
            </div>
        </div>
        )

}