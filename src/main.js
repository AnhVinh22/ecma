import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newDetail";
import Singin from "./pages/singin";
import Singup from "./pages/singup";
import Dashboard from "./pages/dashboard";
import Add from "./pages/add";
import Edit from "./pages/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },
    "/singin": () => {
        print(Singin.render());
    },
    "/singup": () => {
        print(Singup.render());
    },
    "/Admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/Admin/add": () => {
        print(Add.render());
    },
    "/news/:id/edit": ({ data }) => {
        const { id } = data;
        print(Edit.render(id));
    },
});

router.resolve();