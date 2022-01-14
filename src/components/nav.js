const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Home Page</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">About Page</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-500">Product Page</a></li>
            </ul>
        </nav>`;
    },
};
export default Nav;