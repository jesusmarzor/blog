export function Section({title, children}){
    return (
        <>
            <h2 className="font-bold text-xl mb-5">{title}</h2>
            {children}
        </>
    )
}