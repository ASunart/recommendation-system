export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row gap-10 justify-between border-t border-white border-opacity-20 p-4">
            <img
                className="w-[200px]"
                src="../src/assets/images/other/logo.webp" alt="logo-img" />
            <div className="flex items-center justify-between md:justify-end md:gap-8 text-white font-semibold px-10">
                <a className="cursor-pointer">About</a>
                <a className="cursor-pointer" >Our service</a>
                <a className="cursor-pointer" >Our value</a>
            </div>
        </footer>
    )
}