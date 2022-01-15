const Nav = {
    render() {
        return /* html */ `
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Home Page</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">About Page</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-500">Product Page</a></li>
                <li><a href="/singin" class="block py-3 px-4 text-white hover:bg-blue-500">Singin</a></li>
                <li><a href="/singup" class="block py-3 px-4 text-white hover:bg-blue-500">Singup</a></li>
                <li><a href="/Admin/dashboard" class="block py-3 px-4 text-white hover:bg-blue-500">Dashboard</a></li>
                 <li><a href="/Admin/add" class="block py-3 px-4 text-white hover:bg-blue-500">Add</a></li>
                 <li><a href="/Admin/news/:id/edit" class="block py-3 px-4 text-white hover:bg-blue-500">Edit</a></li>
                
            </ul>
        </nav>`;
    },
};
export default Nav;